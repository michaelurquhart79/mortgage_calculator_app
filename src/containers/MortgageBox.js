import React, {Component} from 'react';
import MortgageForm from '../components/MortgageForm';

class MortgageBox extends Component {
  render() {
    return (
      <div>
        <h1>I'm the MortgageBox</h1>
        <MortgageForm />
      </div>
    )
  }

}

export default MortgageBox;
