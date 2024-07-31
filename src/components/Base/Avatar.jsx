import React from 'react';
import PropTypes from 'prop-types';
import avatarSvg from '../../assets/icons/avatar.svg';

const Avatar = ({ img }) => {
  return (
    <div className="relative w-16 h-16 rounded-[50%] overflow-hidden">
      {img ? (
        <img
          src={img}
          alt="avatar"
          className="w-full h-full object-cover block"
        />
      ) : (
        <img
          src={avatarSvg}
          alt="avatar"
          className="w-full h-full object-cover block"
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  img: PropTypes.string,
};

export default Avatar;
