import { AuthErrorCodes } from "firebase/auth";
import { useState } from "react";

const useError = (error) => {
  const [message, setMessage] = useState(null);

  const setErrorCode = (error) => {
    switch (error.code) {
      case AuthErrorCodes.INVALID_PASSWORD:
        return setMessage("Wrong password!");
      case AuthErrorCodes.USER_DELETED:
        return setMessage("User not found!");
      default:
        return setMessage(error.message);
    }
  };

  return [message, setErrorCode];
};

export default useError;
