const baseUrl = () => {
  if (process.env.NODE_ENV === "development") return "";
  return process.env.BASE_URL;
};

const apiEndPoints = {
  users: `${baseUrl()}/api/users`,
};

export default apiEndPoints;
