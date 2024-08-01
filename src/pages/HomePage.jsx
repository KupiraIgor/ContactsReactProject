import React from 'react';
import CreateContactForm from '../components/CreateContactForm';
import Contacts from '../components/Contacts';

const HomePage = () => {
  return (
    <div className="relative container max-w-7xl py-9 flex gap-9 flex-col md:flex-row">
      <CreateContactForm />
      <Contacts />
    </div>
  );
};

export default HomePage;
