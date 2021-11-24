import styled from "styled-components";
import History from "../History/History";
const Main = () => {
    return (
        <MainDiv>
            <History />
        </MainDiv>
    );
};

const MainDiv = styled.main`
    background-color: black;
    color: white;
    width: 100vw;
    min-height: 100vh;
`;

export default Main;
