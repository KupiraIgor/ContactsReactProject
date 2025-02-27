import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDeleteContactMutation } from '../../store/nimble/nimble.api';
import { toast } from 'react-toastify';
import Tag from './Tag';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import LoaderBg from './LoaderBg';
import deleteSvg from '../../assets/icons/delete.svg';

const Contact = ({ contact }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  const onDeleteContact = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await deleteContact(contact.id).unwrap();
      toast.success('Contact deleted');
    } catch (error) {
      toast.error(error.data.message);
      console.error('Failed:', error);
    }
  };

  return (
    <Link
      to={`/contact/${contact.id}`}
      className={`relative pl-4 pr-10 pt-4 pb-6 bg-grey-2 w-full rounded grid grid-cols-[4rem_1fr] gap-4 items-center ${isLoading || isSuccess ? 'pointer-events-none' : ''}`}
    >
      {(isLoading || isSuccess) && <LoaderBg />}
      <Avatar img={contact.avatar_url} />
      <div className="relative overflow-hidden">
        <UserInfo info={contact.fields} />
      </div>
      {contact.tags.length ? (
        <>
          <div></div>
          <div className="flex gap-2 flex-wrap overflow-hidden">
            {contact.tags.map((tag) => (
              <Tag key={tag.id}>{tag.tag}</Tag>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
      <button
        className="absolute top-1 right-2 w-9 h-9 flex justify-center items-center z-10 ease-in duration-150 hover:scale-110"
        onClick={onDeleteContact}
      >
        <img src={deleteSvg} alt="delete" />
      </button>
    </Link>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};

export default Contact;
