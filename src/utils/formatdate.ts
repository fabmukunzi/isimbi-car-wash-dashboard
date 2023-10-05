const formatDate = (dateString:string) => {
  const options:object = { day: '2-digit', month: 'short',year: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};

export { formatDate };
