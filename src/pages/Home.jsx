import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "../components/Card";
import { styled } from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
`;

const Home = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users?page=1&per_page=9`)
            .then((res) => {
                setUserInfo(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <>
            <h1>Home Page</h1>
            <Container>
                {userInfo.map((user) => (
                    <Card
                        key={user.id}
                        id={user.id}
                        img={user.avatar}
                        name={`${user.first_name} ${user.last_name}`}
                        email={user.email}
                    />
                ))}
            </Container>
            <Link to="/menu">메뉴 페이지로 고고</Link>
        </>
    );
};

export default Home;

