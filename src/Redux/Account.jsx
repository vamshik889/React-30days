import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const data = useSelector((state) => state);
  return (
    <div style={{ marginTop: "50px" }}>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Mobile</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.mobile}</td>
            <td>{data.balance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Account;
