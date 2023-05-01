import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className>{title}</h2>}
      <ul className="stat-list">
        {stats.map(data => (
          <li className="item" key={data.id}>
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
// Масив елементів певного типу
//optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
//// Об'єкт вказаної форми
//optionalObjectWithShape: PropTypes.shape({
//color: PropTypes.string,
//fontSize: PropTypes.number
//}),
