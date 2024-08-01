import React from 'react';
import { useParams } from 'react-router';
import { useGetOneContactQuery } from '../store/nimble/nimble.api';

import Loader from '../components/Base/Loader';
import OneContact from '../components/OneContact';

const ContactPage = () => {
  const params = useParams();
  const { data: contact } = useGetOneContactQuery(params.id);

  return (
    <div className="container max-w-md py-9">
      {contact ? <OneContact contact={contact} /> : <Loader />}
    </div>
  );
};

export default ContactPage;
