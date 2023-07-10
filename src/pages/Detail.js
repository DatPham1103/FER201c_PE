import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
    const { id } = useParams();
    const [staff, setInfo] = useState([]);

    const getListStaff = async () => {
        const res = await axios.get(
            `https://6498fe3f79fbe9bcf83e89d4.mockapi.io/staffManagement/${id}`
        );
        if (res.status === 200) {
            setInfo(res.data);
        }
    };

    useEffect(() => {
        getListStaff();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ paddingTop: "200px" }}>
                <img src={staff.avatar} alt={staff.name} />
            </div>
            <div>
                <div>Name: {staff.name}</div>
                <div>Address: {staff.address}</div>
                <div>Age: {staff.age}</div>
                <div>Date Created: {staff.createdAt}</div>
            </div>
        </div>
    );
}

export default Detail;
