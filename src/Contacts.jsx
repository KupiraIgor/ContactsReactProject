import React from 'react';
import Title from './components/Base/Title';
import Contact from './components/Base/Contact';
import { useGetContactsQuery } from './store/nimble/nimble.api';

const Contacts = () => {
  const { data } = useGetContactsQuery();
  console.log(data);
  return (
    <div className="w-full">
      <Title tag="h2" className="mb-2">
        Contacts
      </Title>
      <div className="flex flex-col gap-2">
        {data ? (
          data.map((contact) => <Contact key={contact.id} contact={contact} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Contacts;
