import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import Title from './Base/Title';
import Input from './Base/Input';
import Button from './Base/Button';

const CreateContactForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="relative basis-72 grow-0 shrink-0">
      <div className="sticky top-9 left-0">
        <Title tag="h2" className="pb-1">
          Create Contact
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="First Name"
                className="mb-2.5"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Last Name"
                className="mb-2.5"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Email"
                className="mb-5"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
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
