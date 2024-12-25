export const cheakValidData = (email, password) => {
  const isValidEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
    email
  );

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) {
    return "Email is not valid";
  }
  if (!isValidPassword) {
    return "Password is not valid";
  }
  return null;
};
