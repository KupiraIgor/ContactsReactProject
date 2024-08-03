import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ info }) => {
  const returnValue = (value) => {
    return info[value] ? info[value][0].value : '';
  };

  return (
    <div className="overflow-hidden">
      <div className="font-medium flex flex-wrap">
        {returnValue('first name') && (
          <span
            className="truncate overflow-hidden"
            title={returnValue('first name')}
          >
            {returnValue('first name')}&nbsp;
          </span>
        )}
        {returnValue('last name') && (
          <span
            className="truncate overflow-hidden"
            title={returnValue('last name')}
          >
            {returnValue('last name')}
          </span>
        )}
      </div>
      <div
        className="font-medium truncate overflow-hidden"
        title={returnValue('email')}
      >
        {returnValue('email')}
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  info: PropTypes.any,
};

export default UserInfo;
