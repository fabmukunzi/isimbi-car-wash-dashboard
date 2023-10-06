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
    updateUser: builder.mutation<{ data: any }, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    changePassword: builder.mutation<
      { data: any },
      { old_password: string; new_password: string }
    >({
      query: ({ old_password, new_password }) => ({
        url: 'users/change-password',
        method: 'PATCH',
        body: {
          old_password,
          new_password,
        },
      }),
    }),
    changeStatus: builder.mutation<
      { isApproved: boolean; id: string },
      { isApproved: boolean; id: string }
    >({
      query: ({ isApproved, id }) => ({
        url: `users/disable-enable/${id}`,
        method: 'PUT',
        body: {
          isApproved,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useChangeStatusMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = userEndpoints;
