import { baseAPI } from '../api';

const reportEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createReport: builder.mutation<{ data: object }, object>({
      query: (body) => ({
        url: 'reports/expenses',
        method: 'POST',
        body,
      }),
    }),
    createIncome: builder.mutation<{ data: object }, object>({
      query: (body) => ({
        url: 'reports/incomes',
        method: 'POST',
        body,
      }),
    }),
    getAnalytics: builder.query<
      {
        weeklyPerformanceOverview?: any;
        weeklyExpenses?: any;
        groupedByCategory?: any;
      },
      void
    >({
      query: () => ({
        url: `analytics`,
        method: 'GET',
      }),
    }),
    getExpenses: builder.query<{ reports: any }, void>({
      query: () => ({
        url: `reports/expenses`,
        method: 'GET',
      }),
    }),
    getIncome: builder.query<{ reports: any }, void>({
      query: () => ({
        url: `reports/incomes`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateReportMutation,
  useCreateIncomeMutation,
  useGetAnalyticsQuery,
  useGetExpensesQuery,
  useGetIncomeQuery,
} = reportEndpoints;
