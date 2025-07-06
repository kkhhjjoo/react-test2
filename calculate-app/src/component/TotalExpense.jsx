import React from 'react';

const TotalExpense = ({ total }) => (
  <div
    style={{
      textAlign: 'right',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    }}
  >
    총 지출 : {total.toLocaleString()}원
  </div>
);

export default TotalExpense;
