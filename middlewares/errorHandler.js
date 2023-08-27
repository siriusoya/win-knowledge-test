module.exports = (err, req, res, next) => {
  let status;
  let message;

  switch (err.name) {
    case "EmailPasswordisRequired":
      status = 400;
      message = "Email and password is required!";
      break;
    case "UserNotFound":
    case "EmailPasswordInvalid":
      status = 401;
      message = "Email or password is invalid!";
      break;

    default:
      status = 500;
      message = "Internal server error";
      break;
  }

  res.status(status).json({ message });
};
