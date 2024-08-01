import React from 'react';
import { useGetContactsQuery } from '../store/nimble/nimble.api';
import Title from './Base/Title';
import Contact from './Base/Contact';
import Loader from './Base/Loader';

const Contacts = () => {
  const { data } = useGetContactsQuery();

  return (
    <div className="w-full  grow-0">
      <Title tag="h2" className="mb-2">
        Contacts
      </Title>
      <div className="flex flex-col gap-2">
        {data ? (
          data.map((contact) => <Contact key={contact.id} contact={contact} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Contacts;
