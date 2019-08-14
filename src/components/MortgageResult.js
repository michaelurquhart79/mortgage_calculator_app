import React from 'react';

const MortgageResult = (props) => {
  if (props.mortgageAwarded != 0) {
    return(
      <div>
        <p>You can get a mortgage for £{props.mortgageAwarded}</p>
      </div>
    )
  } else {
    return null;
  }
}

export default MortgageResult;
