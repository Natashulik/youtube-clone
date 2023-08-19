
export const formatViews = (views) => {
  const formattedViews = (views / 1000).toFixed(1);
  return `${formattedViews} тыс. просмотров`;
  }