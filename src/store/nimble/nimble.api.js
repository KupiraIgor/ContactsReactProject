import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = 'VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn';
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
export const nimbleApi = createApi({
  reducerPath: 'nimbleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${corsProxy}https://live.devnimble.com/api/v1/`,
    mode: 'cors',
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
      transformResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.resources;
      },
    }),
    getOneContact: builder.query({
      query: (id) => ({
        url: `contact/${id}`,
      }),
      transformResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.resources[0];
      },
    }),
  }),
});

export const { useGetContactsQuery } = nimbleApi;
export const { useGetOneContactQuery } = nimbleApi;
