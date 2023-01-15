import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";

function useAuth() {
  const [user, setUser] = useState(null);

  const logoutWithRedirect = () => {};
  const loginWithRedirect = () => {};
  const gotoRegisterPage = () => {};

  return { logoutWithRedirect, user, loginWithRedirect, gotoRegisterPage };
}

export default useAuth;
