const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const formatDate = (date: Date): string => date.toLocaleDateString('en-US', options);
