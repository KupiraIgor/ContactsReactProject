import React, { useEffect } from 'react';
import { useGetContactsQuery } from '../store/nimble/nimble.api';
import Title from './Base/Title';
import Contact from './Base/Contact';
import Loader from './Base/Loader';
import { toast } from 'react-toastify';

const Contacts = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  useEffect(() => {
    if (error) {
      toast.error(error.data.message || 'An unknown error occurred');
    }
  }, [error]);

  return (
    <div className="w-full  grow-0">
      <Title tag="h2" className="mb-2">
        Contacts
      </Title>

      {isLoading && <Loader />}

      {data && (
        <div className="flex flex-col gap-2">
          {data.length ? (
            data.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))
          ) : (
            <div>There are no contacts</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Contacts;
