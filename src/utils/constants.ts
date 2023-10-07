const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
const PERSIST_KEY = 'isimbi';
const expensesCategories = [
  { label: 'Rent', value: 'Rent' },
  { label: 'Internet', value: 'Internet' },
  { label: 'Raw materials', value: 'Raw Materials' },
  { label: 'Car expense', value: 'Car Expense' },
  { label: 'Refunds', value: 'Refunds' },
  { label: 'Miscellaneous', value: 'Miscellaneous' },
];
const incomeCategories = [
  { label: 'Washes', value: 'washes' },
  { label: 'Products', value: 'products' },
];
export { BASE_API_URL, PERSIST_KEY, expensesCategories ,incomeCategories};
