import { baseAPI } from '../api';

const userEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<object, LoginPayload>({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = userEndpoints;
