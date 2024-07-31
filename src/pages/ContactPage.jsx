import React from 'react';
import { useParams } from 'react-router';
import { useGetOneContactQuery } from '../store/nimble/nimble.api';

const ContactPage = () => {
  const params = useParams();
  const { data } = useGetOneContactQuery(params.id);

  console.log(data);
  return <div>asd</div>;
};

export default ContactPage;
