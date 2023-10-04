import { baseAPI } from '../api';
import { ReportPayload } from '@/src/utils/types/report';

const reportEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createReport: builder.mutation<{ data: object }, object>({
      query: (body) => ({
        url: 'reports',
        method: 'POST',
        body,
      }),
    }),
    getReports: builder.query<{reports:any} , string>({
      query: (query) => ({
        url: `reports?${query}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateReportMutation, useGetReportsQuery } = reportEndpoints;
