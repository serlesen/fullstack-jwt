import { useState, useEffect } from "react";

import { getAuthToken } from "../services/BackendService";

export function ProtectedMessages() {
    const [backendResponse, setBackendResponse] = useState("Nothing");

    useEffect(() => {
        fetch("http://localhost:8080/protected/messages", {
            method: "GET",
            headers: {'Authorization': `Bearer ${getAuthToken()}`}
        }).then(response => {
            if (response.status == 200) {
                return response.json();
            }
            throw Error("Error from backend");
        }).then(data => {
            setBackendResponse(data.message);
        });
    }, []);

    return (
        <div>
            <p>Protected Messages:</p>
            <p>{backendResponse}</p>
        </div>
    );
}

export default ProtectedMessages;