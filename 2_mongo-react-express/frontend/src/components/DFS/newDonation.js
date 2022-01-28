import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../templates/Navbar';

export default class newDonation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      amount: ""
      
    };

    this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeamount = this.onChangeamount.bind(this);
    


    this.onSubmit = this.onSubmit.bind(this);

  }

  onChangename(event) { this.setState({ name: event.target.value }); }
  onChangeemail(event) { this.setState({ email: event.target.value }); }
  onChangeamount(event) { this.setState({ amount: event.target.value }); }
  




  async onSubmit(e) {
    console.log("insubmit loki vachindi bro");
    e.preventDefault();
    const newDonor = {
      name: this.state.name,
      email: this.state.email,
      amount: this.state.amount,
    };

    if (newDonor.name && newDonor.email && newDonor.amount) {
      this.setState({
        name: "",
        email: "",
        amount: ""
      });


      let str = "http://localhost:4000/newdonation";

      var res = await axios.post(str, newDonor)
      
      if (res.data.error) {
        alert("Gone wrong somewhere");
      }

    }
    else alert("Please fill all the fields !!!!!!")

    
    

    
  }

  render() {

    return (
      <div className="container">
        <Navbar />
        <h1 style={{ color: "Green", paddingBottom: 30 }}>ONE DONATION - can save a millions of life</h1>


        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label><h2><strong>Donor Name: </strong></h2></label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          <div className="form-group">
            <label><h2><strong>Email:</strong></h2> </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
          </div>
          <div className="form-group">
            <label><h2><strong>Amount:</strong></h2> </label>
            <input
              type="text"
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeamount}
            />
          </div>


          <div className="form-group">
            <input
              type="submit"
              value="DONATE"
              className="btn btn-primary"

            />
          </div>
        </form>
      </div>
    );
  }
}
