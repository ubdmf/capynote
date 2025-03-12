// 格式化日期
export const formatDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
