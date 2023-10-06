const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
const PERSIST_KEY = 'isimbi';
const expensesCategories = [
  { label: 'Rent', value: 'rent' },
  { label: 'Internet', value: 'internet' },
  { label: 'Raw materials', value: 'raw_materials' },
  { label: 'Car expense', value: 'car_expense' },
  { label: 'Refunds', value: 'refunds' },
  { label: 'Miscellaneous', value: 'miscellaneous' },
];
const incomeCategories = [
  { label: 'Washes', value: 'washes' },
  { label: 'Products', value: 'products' },
];
export { BASE_API_URL, PERSIST_KEY, expensesCategories ,incomeCategories};
