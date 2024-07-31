import React from 'react';
import Tag from './Tag';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import deleteSvg from '../../assets/icons/delete.svg';
import { Link } from 'react-router-dom';

const Contact = ({ contact }) => {
  const returnValue = (value) => {
    return contact.fields[value] ? contact.fields[value][0].value : '';
  };

  return (
    <Link
      to={`/contact/${contact.id}`}
      className="px-4 pt-4 pb-6 bg-grey-2 w-full rounded grid grid-cols-[4rem_1fr] gap-4 items-center"
    >
      <Avatar img={contact.avatar_url} />
      <div className="relative">
        <div className="font-medium ">
          {returnValue('first name')} {returnValue('last name')}
        </div>
        <div className="font-medium">{returnValue('email')}</div>
        <button className="absolute top-[-10px] right-0 w-6 h-6 flex justify-center items-center">
          <img src={deleteSvg} alt="delete" />
        </button>
      </div>
      {contact.tags.length ? (
        <>
          <div></div>
          <div className="flex gap-2">
            {contact.tags.map((tag) => (
              <Tag key={tag.id}>{tag.tag}</Tag>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </Link>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};

export default Contact;
