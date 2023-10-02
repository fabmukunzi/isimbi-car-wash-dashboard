import { UserSchema } from '@/src/utils/types/user';
import { baseAPI } from '../api';

const userEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserSchema, LoginPayload>({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation<UserSchema, SignupPayload>({
      query: (body) => ({
        url: 'users/register',
        method: 'POST',
        body,
      }),
    }),
    getAllUsers: builder.query<{ data: Array<UserSchema> }, void>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGetAllUsersQuery } =
  userEndpoints;
