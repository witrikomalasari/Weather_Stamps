import dayjs from 'dayjs';

export const formatDate = (dateF: string | undefined) => {
  let format = 'ddd, DD MMM YYYY';
  const formatdate = dayjs(dateF).format(format);

  return formatdate;
};
