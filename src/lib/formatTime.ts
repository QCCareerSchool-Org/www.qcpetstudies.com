export const formatTime = (d: Date): string => {
  const fieldLength = 2;
  return `${d.getHours().toString().padStart(fieldLength, '0')}:${d.getMinutes().toString().padStart(fieldLength, '0')}:${d.getSeconds().toString().padStart(fieldLength, '0')}`;
};
