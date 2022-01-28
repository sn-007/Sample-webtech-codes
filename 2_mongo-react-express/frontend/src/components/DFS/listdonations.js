import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../templates/Navbar';

export default class newDonation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      sorted: 0      
    };

    this.onChangedata = this.onChangedata.bind(this);

    

  }

  onChangedata(event) { this.setState({ data: event.target.value }); }

  componentDidMount() {

    let str = "http://localhost:4000/alldonations";
    
  
    axios
      .get(str)
      .then(response => {
        this.setState({ data: response.data });
      })
      
      .catch(function(error) {
        console.log(error);
      });
  }

  renderData(data,index)
  {
      
        return (
        
            
          <tr key={index} className ="">
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.amount}</td>

          </tr>
        )
      

  }

  fsort()
  {
    let clone = [...this.state.data]; // will clone the array
    if(this.state.sorted==0)
    {
      clone.sort((a,b) => (parseInt(a.amount) > parseInt(b.amount)) ? 1 : ((parseInt(b.amount) > parseInt(a.amount)) ? -1 : 0))
      this.setState({data:clone, sorted:1})
    }
    if(this.state.sorted==1)
    {
      clone.sort((a,b) => (parseInt(a.amount) < parseInt(b.amount)) ? 1 : ((parseInt(b.amount) < parseInt(a.amount)) ? -1 : 0))
      this.setState({data:clone, sorted:0})
    }
  }
  
  




  render() {

    return (
      <div className="container" >
        <Navbar />
        <button onClick={()=>{this.fsort()} } type="button" className="btn btn-primary" style={{marginBottom:10}}>SORT</button>
        
        <div className="table-responsive">
        <table className="table  table-striped table-hover ">
        <thead className="thead-dark">
            <tr>
                
                <th scope="col">Name of Donor</th>
                <th scope="col">Email</th>
                <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>    
        {this.state.data.map(this.renderData)}
        </tbody>
    </table>
    </div>



      </div>
    );
  }
}
