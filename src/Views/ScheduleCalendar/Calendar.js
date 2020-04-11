import React, { Component } from 'react';
import Calendar from 'react-calendar';
import ModalComponent from "./../ModalView/Modal"
 
class CalendarComponent extends Component {
  state = {
    date: new Date(),
    modalShow:false    
  }
  // const [modalShow, setModalShow] = React.useState(false);
 
  onChange = date => this.setState({ date,modalShow:true},()=>{

    console.log("DATE::: ",this.state.date)
    
  })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <ModalComponent
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow:false})}
          selected_date={this.state.date}
        />
      </div>
    );
  }
}

export default CalendarComponent