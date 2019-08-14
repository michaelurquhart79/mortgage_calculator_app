import React, {Component} from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageResult from '../components/MortgageResult';

class MortgageBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      userSalary: 0,
      partnerSalary: 0,
      mortgageAwarded: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(salary1, salary2){
    this.setState({userSalary: salary1});
    this.setState({partnerSalary: salary2});
  }


  render() {
    return (
      <div>
        <h1>I'm the MortgageBox</h1>
        <MortgageForm onFormSubmit={this.handleFormSubmit}/>
        <MortgageResult />
      </div>
    )
  }

}

export default MortgageBox;
