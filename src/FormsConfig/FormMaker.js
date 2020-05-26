import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dogs from "./../Controllers/DataFetcher"
const FormMaker = props => {
  const Fields = props.castForm.fields;
  console.log("+++++++", props.castForm);
  console.log("+++++++", props.castForm.formName);
  return (
    <Formik initialValues={{ email: "", password: "" }} validate={values => FormValidator(values)} onSubmit={(values, { setSubmitting }) =>FormSubmit(values, { setSubmitting }) }>
      {({ isSubmitting }) => (
        <Form className="Former">
          {Fields.map((field,key) => {
            return (
              <React.Fragment>
                <div className="FieldFormer">
                <div className={field.name+"Field"}><span className="PaymentLabels">{field.name}</span><Field  type={field.type} name={field.name} placeholder={field.label}/></div>
                <ErrorMessage className="ValidationError" name={field.name} component="p" />
                </div>
              </React.Fragment>
            );
          })}
           <div className="MainButtonHolder">
       {
         props.submitButtonText?   <button className={props.castForm.formName+"SubmitButton"} type="submit" disabled={isSubmitting}>
         {props.castForm.submitButtonText}
       </button>:""
       }
          </div> 
        </Form>
      )}
    </Formik>
  );
};

const FormValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if(!values.password){
    errors.password = "Please Enter Password !";
  }
  return errors;
};

const FormSubmit=(values, { setSubmitting })=>{

      console.log("_____values", values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
          
        }, 400);
       return <Dogs  val={values} />
        
    
}


export default FormMaker;
