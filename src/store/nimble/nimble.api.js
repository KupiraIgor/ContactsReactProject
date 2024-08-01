import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://live.devnimble.com/api/v1/';
const token = 'VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn';
const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export const nimbleApi = createApi({
  reducerPath: 'nimbleApi',
  tagTypes: ['Contact', 'Tags'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${corsProxy}${API_URL}`,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: `contacts`,
        params: {
          sort: 'created:desc',
        },
      }),
      providesTags: () => [
        {
          type: 'Contact',
        },
      ],
      transformResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.resources;
      },
    }),

    getOneContact: builder.query({
      query: (id) => ({
        url: `contact/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Tags', id }],
      transformResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.resources[0];
      },
    }),

    addContact: builder.mutation({
      query: (body) => ({
        url: 'contact',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: () => [
        {
          type: 'Contact',
        },
      ],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [
        {
          type: 'Contact',
        },
      ],
    }),

    addTag: builder.mutation({
      query: ({ id, body }) => ({
        url: `contacts/${id}/tags`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tags', id }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetOneContactQuery,
  useAddContactMutation,
  useAddTagMutation,
  useDeleteContactMutation,
} = nimbleApi;
