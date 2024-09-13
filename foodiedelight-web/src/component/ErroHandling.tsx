const ErrorValidation = (error: any) => {
  if (error) {
    const { message } = error[0];
    throw { message };
  }
};
export default ErrorValidation;
