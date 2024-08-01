import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetOneContactQuery } from '../store/nimble/nimble.api';

import Loader from '../components/Base/Loader';
import OneContact from '../components/OneContact';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const params = useParams();
  const { data: contact, error, isLoading } = useGetOneContactQuery(params.id);

  useEffect(() => {
    if (error) {
      toast.error(error.data.message || 'An unknown error occurred');
    }
  }, [error]);

  return (
    <div className="container max-w-md py-9">
      {isLoading && <Loader />}
      {contact && <OneContact contact={contact} />}
    </div>
  );
};

export default ContactPage;
