import dayjs from 'dayjs';

export const formatDate = (dateF: string | undefined) => {
  const formatdate = dayjs(dateF).format('ddd, DD MMM YYYY');

  return formatdate;
};
