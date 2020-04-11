import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const FormMaker = props => {
  const Fields = props.castLoginForm.fields;
  console.log("+++++++", props.castLoginForm);
  return (
    <Formik initialValues={{ email: "", password: "" }} validate={values => FormValidator(values)} onSubmit={(values, { setSubmitting }) =>FormSubmit(values, { setSubmitting }) }>
      {({ isSubmitting }) => (
        <Form className="Former">
          {Fields.map((field,key) => {
            return (
              <React.Fragment>
                <div className="FieldFormer">
                <Field className={field.type+"Field"} type={field.type} name={field.name} placeholder={field.label}/>
                <ErrorMessage className="ValidationError" name={field.name} component="p" />
                </div>
              </React.Fragment>
            );
          })}
           <div className="MainButtonHolder">
          <button className={props.castLoginForm.formName+"SubmitButton"} type="submit" disabled={isSubmitting}>
            {props.castLoginForm.submitButtonText}
          </button>
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
    {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
        }, 400);
        console.log("_____values", values);
      }
}


export default FormMaker;
