import React from 'react';
import PropTypes from 'prop-types';
import avatarSvg from '../../assets/icons/avatar.svg';

const Avatar = ({ img, large }) => {
  return (
    <div
      className={`relative  rounded-[50%] overflow-hidden ${large ? 'w-20 h-20' : 'w-16 h-16'}`}
    >
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
  large: PropTypes.bool,
};

export default Avatar;
