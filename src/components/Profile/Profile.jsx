import React from 'react';
import PropTypes from 'prop-types';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p className={username}>Petra Marica</p>
        <p className={tag}>@pmarica</p>
        <p className={location}>Salvador, Brasil</p>
      </div>

      <ul class={stats}>
        <li>
          <span class="label">Followers</span>
          <span className={stats.followers}>1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span className={stats.views}>2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span className={stats.likes}>3000</span>
        </li>
      </ul>
    </div>
  );
};
/*Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}; */