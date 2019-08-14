import React, {Component} from 'react';

class MortgageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSalary: 0,
      partnerSalary: 0
    };
    this.handleUserSalaryChange = this.handleUserSalaryChange.bind(this);
    this.handlePartnerSalaryChange = this.handlePartnerSalaryChange.bind(this);
  }

  handleUserSalaryChange(event) {
    this.setState({userSalary: parseInt(event.target.value)});
  }

  handlePartnerSalaryChange(event) {
    this.setState({partnerSalary: parseInt(event.target.value)});
  }

  render() {
    return (
      <div className="mortgage-form">
        <form className="mortgage-form">
          <input
            type="number"
            placeholder="Your Salary"
            value={this.state.userSalary}
            onChange={this.handleUserSalaryChange}>
          </input>
          <input
            type="number"
            placeholder="Partners Salary"
            value={this.state.partnerSalary}
            onChange={this.handlePartnerSalaryChange}></input>
          <input type="submit" value="Calculate Mortgage"></input>
        </form>
      </div>
    )
  }

}

export default MortgageForm;
