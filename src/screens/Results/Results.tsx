import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DrawerAppBar from '../../components/Navbar2/NavbarMui';

const Results = () => {
    const [userInfo, setUserInfo] = useState([]);
    console.log(userInfo);
  
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://result.ourworldintschool.ng/api/results"
        );
        setUserInfo(data);
      };
      fetchData();
    }, []);
  return (
    <div>
         <DrawerAppBar />
      {userInfo?.map((items: any) => (
        <div className="container mt-5" key={items.id}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-7">
              <div className="card p-3 py-4">
                <div className="text-center">
                  <img
                    src="https://i.imgur.com/bDLhJiP.jpg"
                    width="100"
                    className="rounded-circle"
                    alt="User Avatar"
                  />
                </div>

                <div className="text-center mt-3">
                  <span className="bg-secondary p-1 px-4 rounded text-white">
                    {items.company.name}
                  </span>
                  <h5 className="mt-2 mb-0">{items.name}</h5>
                  <span>{items.username}</span>

                  <div className="px-4 mt-1">
                    <p className="fonts">
                      Address: {items.address.street}, {items.address.suite}, {items.address.city} - {items.address.zipcode}
                    </p>
                    <p className="fonts">
                      Geo: Lat {items.address.geo.lat}, Lng {items.address.geo.lng}
                    </p>
                  </div>

                  <ul className="social-list">
                    <li>
                      <i className="fa fa-facebook"></i>
                    </li>
                    <li>
                      <i className="fa fa-dribbble"></i>
                    </li>
                    <li>
                      <i className="fa fa-instagram"></i>
                    </li>
                    <li>
                      <i className="fa fa-linkedin"></i>
                    </li>
                    <li>
                      <i className="fa fa-google"></i>
                    </li>
                  </ul>

                  <div className="buttons">
                    <button className="btn btn-outline-primary px-4">
                      Message
                    </button>
                    <Link to={`/userDetails/${items.id}`}>
                      <button className="btn btn-primary px-4 ms-3">
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Results