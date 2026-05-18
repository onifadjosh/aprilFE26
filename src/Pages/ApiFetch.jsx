import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [number, setnumber] = useState(0);
  const [name, setname] = useState("pampam");
  const [users, setusers] = useState([]);
  useEffect(() => {
    console.log("Use effect ran");

    const fetchAllUsers = async () => {
      try {
        let response = await axios.get(
          `${import.meta.env.VITE_DEV_BASE_URL}/api/v1/allUsers`,

          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjlhOTU5Y2Q3YTA0Y2ViYTdkZjJjMSIsImlhdCI6MTc3ODA1NDA1MSwiZXhwIjoxNzc4MDcyMDUxfQ.FUNfrSEsBW8iRZylrIqOAKmWA4tzGr-cGUMkwRersLk",
            },
          }
        );
        console.log(response);

        if (response.status == 200) {
          console.log(response.data.data);
          setusers(response.data.data);
        }
      } catch (error) {
        console.log(error);

        console.log(error.response.data.message);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div>
      <button onClick={() => setnumber(number + 1)} className="btn btn-dark">
        {number}
      </button>
      <button onClick={() => setname("Josh")} className="btn btn-success">
        {name}
      </button>

      <div>
        {users.map((_, idx) => (
          <h1 key={_._id}>
            {idx + 1}. {_.email}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ApiFetch;
