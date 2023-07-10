import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/mycss.css";


const Home = () => {
    const [info, setInfo] = useState([]);
    const [detailPopup, setDetailPopup] = useState(null);

    const getListStaff = async () => {
        const res = await axios.get(
            `https://6498fe3f79fbe9bcf83e89d4.mockapi.io/staffManagement`
        );
        if (res.status === 200) {
            setInfo(res.data);
        }
    };

    useEffect(() => {
        getListStaff();
    }, []);

    const handleViewPopup = (staff) => {
        setDetailPopup(staff);
    };

    const handleClosePopup = () => {
        setDetailPopup(null);
    };

    return (
        <div className="container">
            {info &&
                info.map((staff) => (
                    <div className="card" key={staff.id}>
                        <Link
                            className="avatar"
                            to={`/detail/${staff.id}`}
                        >
                            <img src={staff.avatar} alt={staff.id} />
                        </Link>
                        <Link
                            className="avatar"
                            to={`/detail/${staff.id}`}
                            style={{
                                color: "black",
                                textDecoration: "none",
                            }}
                        >
                            <h3>{staff.name}</h3>
                        </Link>
                        <button style={{borderRadius:'0'}} onClick={() => handleViewPopup(staff)}>
                            Details
                        </button>
                    </div>
                ))}

            {detailPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <div>
                            <span className="close" onClick={handleClosePopup}>
                                &times;
                            </span>
                            <img
                                src={detailPopup.avatar}
                                alt={detailPopup.id}
                            />
                            <p>ID: {detailPopup.id}</p>
                            <p>Name: {detailPopup.name}</p>
                            <p>Age: {detailPopup.age}</p>
                            <p>Address: {detailPopup.address}</p>
                            <p>
                                Created At:{" "}
                                {new Date(
                                    detailPopup.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
