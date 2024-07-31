import React from 'react';
import CreateContactForm from '../components/CreateContactForm';
import Contacts from '../Contacts';

const Home = () => {
  return (
    <div className="relative container max-w-7xl py-9 flex gap-9">
      <CreateContactForm />
      <Contacts />
    </div>
  );
};

export default Home;
