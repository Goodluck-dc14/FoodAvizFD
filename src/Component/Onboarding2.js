import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Onboarding2 = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="/image/2.png" />
        <Textholder>
          <Title>Swift Delivery</Title>
          <Text>
            Abuse is that social evil which has ruined many lives and is
            gradually on the rise.Follow this 3 steps to finish creating an
            account
          </Text>
        </Textholder>
        <Button to="/onboarding3">Click Next</Button>
        <Level>
          <NotActive />
          <Active />
          <NotActive />
        </Level>
      </Wrapper>
    </Container>
  );
};

export default Onboarding2;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  /* width: 90%; */
  width: 60%;
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const Textholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  font-family: poppins;
  font-weight: 600;
  @media screen and (max-width: 425px) {
    font-size: 23px;
  }
`;

const Text = styled.div`
  padding: 0 10px;
  text-align: center;
  opacity: 72%;
  margin-top: 10px;
  font-family: poppins;
  font-size: 20px;
  @media screen and (max-width: 425px) {
    font-family: poppins;
    font-size: 17px;
    line-height: 1.2;
  }
`;

const Button = styled(NavLink)`
  width: 85%;
  color: black;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #56cc56;
  font-weight: 500;
  text-decoration: none;
`;

const Level = styled.div`
  display: flex;
`;

const Active = styled.div`
  height: 2px;
  width: 20px;
  background: #56cc56;
  margin: 10px;
`;

const NotActive = styled.div`
  height: 2px;
  width: 20px;
  background: rgba(0, 0, 0, 0.3);
  margin: 10px;
`;
