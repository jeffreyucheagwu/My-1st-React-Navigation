import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { red } from "@mui/material/colors";
import { FaEdit } from "react-icons/fa";
import { WindowSharp } from "@mui/icons-material";
import DrawerAppBar from "../../components/Navbar2/NavbarMui";

const FetchDeleteData = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/auth/"
      );
      setUserInfo(data);
    };
    fetchData();
  }, []);
  const deleteHandler = (_id: any) => {
    console.log("Hello");
    axios
      .delete(
        `https://fullstack-student-backend.onrender.com/api/auth/delete/${_id}/`
      )
      .then(() => {
        alert("Delete successful");
        window.location.reload();
      })
      .catch((err) => {
        alert("Request Not successful");
      });
  };
  return (
    <div>
      FetchDeleteData
      <DrawerAppBar/>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {userInfo?.map((items: any) => (
            <>
              <tr>
                <td>{items?.firstName}</td>
                <td>{items?.lastName}</td>
                <td>{items?.email}</td>
                <td>
                  <FaEdit style={{ color: "green" }} />
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteHandler(items?._id)}
                >
                  <MdDeleteForever style={{ color: "red" }} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchDeleteData;
