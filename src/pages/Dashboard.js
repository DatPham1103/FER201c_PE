import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


const Dashboard = () => {
    const [info, setInfo] = useState([]);
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

    const handleDelete = async (id) => {
         {
            const res = await axios.delete(
                `https://6498fe3f79fbe9bcf83e89d4.mockapi.io/staffManagement/${id}`
            );
            if (res.status === 200) {
                getListStaff();
                toast.success("Deleted Successfully ~");
            } else {
                toast.error("Error!");
            }
        }
    };

    return (
        <div className="staff-table">
            <div className="btn-add">
                <Link to={"/add/"}>
                    <button className="add-staff-btn">Add new staff</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {info &&
                        info.map((staff) => (
                            <tr key={staff.id}>
                                <td>{staff.id}</td>
                                <td>{staff.name}</td>
                                <td>
                                    <img src={staff.avatar} alt={staff.id} />
                                </td>
                                <td>{staff.age}</td>
                                <td>{staff.address}</td>
                                <td>
                                    {new Date(
                                        staff.createdAt
                                    ).toLocaleDateString()}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(staff.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
export default Dashboard;
