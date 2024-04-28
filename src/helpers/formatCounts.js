export const formatCounts = (count) => {
  const formattedCounts = (count / 1000).toFixed(1);
  return `${formattedCounts} тыс.`;
};
