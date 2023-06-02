import "./UserByID158529.css";
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { UserService158529 } from "./Service158529/UserService158529";

export const UserByID158529 = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  const [filterusers, setfilteruser] = useState([]);
  useEffect(() => {
    UserService158529().then((res) => setUser(res.data));
  }, []);
  const frm = useFormik({
    initialValues: {
      id: "",
    },
    onSubmit: (values) => {
      const filteruser = user.filter((user1) => user1.login === values.id);
      setfilteruser(filteruser);

      if (filteruser.length === 0) {
        setError(`User with Name ${values.id} is not found.`);
        setfilteruser([]);
      } else {
        setError("");
        setfilteruser(filteruser);
      }
    },
  });

  return (
    <div className="user__info">
      <form onSubmit={frm.handleSubmit}>
        <p>Enter User Name</p>

        <input type="text" name="id" onChange={frm.handleChange} />
        <br />
        <br />
        <input type="submit" value="Get User" />
      </form>

      {error && <p className="error">{error}</p>}
      {filterusers.length > 0 && (
        <table className="table-style">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Node_id</th>
          </tr>
          {filterusers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>
                <img src={user.avatar_url} alt="No Images" />
              </td>
              <td>{user.node_id}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};
