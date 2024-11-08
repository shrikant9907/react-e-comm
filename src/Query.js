import axios from "axios";
import React, { useEffect, useState } from "react";

const USer = () => {
  const [data, setData] = useState([]);
  const [val, setValue] = useState();

  useEffect(() => {
    loaduserdta();
  }, []);

  const loaduserdta = async () => {
    try {
      const res = await axios.get("http://localhost:4000/users");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:4000/users?q=${val}`);
    setData(res.data);
    setValue("");
  };

  const handleReset = () => {
    setValue("");
    loaduserdta();
  };

  return (
    <>
      <form onSubmit={handleSearch} className="align-items-center  m-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Name..."
          value={val}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-success m-3">
          Search
        </button>
      </form>

      <div className="m-4">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  No Data found
                </td>
              </tr>
            ) : (
              data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default USer;
