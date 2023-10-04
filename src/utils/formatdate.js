const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};

export { formatDate };
