import React from "react"
import Button from 'react-bootstrap/Button'
import FileUploader from "../FilePondView/FileUploader"
// import "./../ModalView/Modal.css"
import { Modal,ButtonToolbar ,Loader,Paragraph} from 'rsuite';

// const ModalComponent=(props)=> {
//     console.log("+++++++++++PROPS++++",props)
//     console.log("+++++++++++PROPS++++",props.selected_date)
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//           Make a Schedule For : <br></br> {props.selected_date.toString()}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//          <FileUploader  />
         
//         </Modal.Body>
        
//         <Modal.Footer>      
//           <Button onClick={props.onHide}>Close</Button>             
//         </Modal.Footer>
//       </Modal>
//     );
//   }

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      overflow: true,
      rows: 0
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ show: false, rows: 0 });
  }
  open(event) {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({
        rows: 80
      });
    }, 2000);
  }
  render() {
    const { overflow, show } = this.state;
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button onClick={this.open}>Open</Button>
        </ButtonToolbar>

        <Modal size="lg" show={show} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>{this.props.selected_date.toString()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.rows ? (
              <p rows={this.state.rows} />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <Loader size="md" />
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} appearance="primary">
              Ok
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

  export default ModalComponent;