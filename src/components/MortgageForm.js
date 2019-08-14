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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserSalaryChange(event) {
      this.setState({userSalary: parseInt(event.target.value)});
  }

  handlePartnerSalaryChange(event) {
    this.setState({partnerSalary: parseInt(event.target.value)});
  }

  handleSubmit(event) {
    event.preventDefault();
    const userSalary = this.state.userSalary;
    const partnerSalary = this.state.partnerSalary;
    if(!userSalary) {
      return
    }

    this.props.onFormSubmit(userSalary,partnerSalary);

    // this.setState({userSalary: 0, partnerSalary: 0})
  }

  render() {
    return (
      <div className="mortgage-form">
        <form className="mortgage-form" onSubmit={this.handleSubmit}>
          <label for="user-salary">Your Salary:</label>
          <input
            id="user-salary"
            min="0"
            type="number"
            placeholder="Your Salary"
            value={this.state.userSalary}
            onChange={this.handleUserSalaryChange}>
          </input>
          <br/>
          <label for="partner-salary">Your Partner's Salary:</label>
          <input
            id="partner-salary"
            min="0"
            type="number"
            placeholder="Partners Salary"
            value={this.state.partnerSalary}
            onChange={this.handlePartnerSalaryChange}></input>
          <br/>
          <input type="submit" value="Calculate Mortgage"></input>
        </form>
      </div>
    )
  }

}

export default MortgageForm;
