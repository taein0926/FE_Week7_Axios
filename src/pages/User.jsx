import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from 'styled-components';

const Photo = styled.img`
    width: 150px;
    height: 150px;
    padding: 2rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userId}`)
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((e) => {
            console.log(e);
            });
        }, [userId]);
    
    return (
        <>
            <h1>User Information</h1>
            <Photo src={user.avatar}/>
            <Info>
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <div>
                    Email: {user.email}
                </div>
            </Info>
        </>
    )
};

export default User;