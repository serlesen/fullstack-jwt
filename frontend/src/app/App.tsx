import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode'

import Login from "../login/Login";
import Messages from "../messages/Messages";
import ProtectedMessages from "../messages/ProtectedMessages";

import { CustomJwtPayload } from "../entities/CustomJwtPayload";

import { getAuthToken } from "../services/BackendService";

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    let token = getAuthToken();
    if (token !== null) {
        setIsAuthenticated(true);
        const decoded = jwtDecode<CustomJwtPayload>(token);
        console.log(decoded);
        if (decoded.role == "ADMIN") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    } else {
        setIsAuthenticated(false);
    }

  }, []);


  return (
    <div>
        <h1>Authorization Example Application</h1>
      {!isAuthenticated && <Login/>}
      {isAuthenticated && !isAdmin && <Messages/>}
      {isAuthenticated && isAdmin && <ProtectedMessages/>}
    </div>
  );
}

export default App;
