import React from 'react';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => {
          return (
            <Table
              key={item.id}
              id={item.id}
              type={item.type}
              currency={item.currency}
              amount={item.amount}
              index={idx}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const Table = ({ type, amount, currency, index }) => {
  return (
    <tr idx={index}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};


