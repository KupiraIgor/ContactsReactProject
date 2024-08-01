import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import Title from './Base/Title';
import Input from './Base/Input';
import Button from './Base/Button';
import LoaderBg from './Base/LoaderBg';

import { useAddContactMutation } from '../store/nimble/nimble.api';

const CreateContactForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const [createContact, { isLoading }] = useAddContactMutation();

  const onSubmit = async (formData) => {
    const validFormData = {
      record_type: 'person',
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
      fields: {
        'first name': [
          {
            value: formData.firstName,
          },
        ],
        'last name': [
          {
            value: formData.lastName,
          },
        ],
        email: [
          {
            value: formData.email,
          },
        ],
      },
    };

    try {
      await createContact(validFormData).unwrap();
      reset();
    } catch (error) {
      console.error('Failed:', error);
    }
  };
  return (
    <div className="relative basis-72 grow-0 shrink-0">
      {isLoading ? <LoaderBg /> : <></>}
      <div className="top-9 left-0 static md:sticky">
        <Title tag="h2" className="mb-1">
          Create Contact
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: true,
            }}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => (
              <Input
                label="First Name"
                className="mb-2.5"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: true,
            }}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => (
              <Input
                label="Last Name"
                className="mb-2.5"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={error}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            }}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => (
              <Input
                label="Email"
                className="mb-5"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={error}
              />
            )}
          />
          <Button type="submit">Add Contact</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateContactForm;
