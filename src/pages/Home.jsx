import React from "react";

import Container from "react-bootstrap/Container";

import Search from "../components/Shared/Search";
import Users from "../components/Users";

const Home = () => {
  return (
    <Container>
      <Search />
      <Users />
    </Container>
  );
};

export default Home;
