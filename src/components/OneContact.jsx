import React from 'react';
import Avatar from './Base/Avatar';
import UserInfo from './Base/UserInfo';
import Title from './Base/Title';
import Tag from './Base/Tag';
import { Controller, useForm } from 'react-hook-form';
import Input from './Base/Input';
import Button from './Base/Button';
import { useAddTagMutation } from '../store/nimble/nimble.api';
import PropTypes from 'prop-types';
import LoaderBg from './Base/LoaderBg';
import { toast } from 'react-toastify';

const OneContact = ({ contact }) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      tags: '',
    },
  });

  const [addNewTag, { isLoading }] = useAddTagMutation();

  const onSubmit = async (formData) => {
    const tagsArr = formData.tags.split(' ');

    const argForRequest = {
      id: contact.id,
      body: { tags: tagsArr },
    };

    try {
      await addNewTag(argForRequest).unwrap();
      reset();
      toast.success('Tags added');
    } catch (error) {
      toast.error(error.data.message);
      console.error('Failed:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-7">
        <Avatar img={contact.avatar_url} large />
        <UserInfo info={contact.fields} />
      </div>
      <div className="mb-8">
        <Title tag="h2" className="mb-3">
          Tags
        </Title>
        <div className="flex gap-2 flex-wrap overflow-hidden">
          {contact.tags.length ? (
            contact.tags.map((tag) => <Tag key={tag.id}>{tag.tag}</Tag>)
          ) : (
            <div>There are no tags</div>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <Controller
          control={control}
          name="tags"
          rules={{
            required: true,
            pattern: {
              value: /^[^^&=+\]{};:\\|?<>`,]{1,256}$/,
            },
          }}
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={error}
              className="mb-5"
              placeholder="Add new Tag"
            />
          )}
        />
        <Button type="submit">Add Tag</Button>
        {isLoading && <LoaderBg />}
      </form>
    </div>
  );
};

OneContact.propTypes = {
  contact: PropTypes.object,
};

export default OneContact;
