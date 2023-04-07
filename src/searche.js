import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class App extends Component {

  state = {
    firstName: '',
    showName: false
  }
  inputHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ firstName: updatedName });
    console.log(updatedName);  
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      showName: true
    });
    window.location.href = "http://localhost:3000/somepage?var1="+this.state.firstName+"&var2="+this.state.var2 + "......";
  }
  render() {
    return (
      <div>
     <form
          onSubmit={this.onSubmitHandler} class="d-flex">
   <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.inputHandler} value=
            {this.state.firstName} />
   <button class="btn btn-outline-success"  type="submit" onClick={this.onSubmitHandler}>Submit</button>
 </form> 
      </div>
    );
  }
}
export default (App);