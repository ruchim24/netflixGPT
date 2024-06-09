export const checkValidData = (isSignIn,email, password, fullname) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullname = /^[A-Za-z]+([\ A-Za-z]+)*/.test(fullname);

  if (!isEmailValid) return "Email ID is not valid.";
  if (!isPasswordValid) return "Password is not valid.";
  if(!isSignIn && !isFullname) return "Name is not valid.";

  return null;
};
