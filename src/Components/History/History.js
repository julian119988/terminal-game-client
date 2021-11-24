import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const History = (props) => {
    const [historyList, setHistoryList] = useState([]);
    const inputRef = useRef();
    const historyRef = useRef();

    const handleNewMessage = (event) => {
        event.preventDefault();
        if (
            inputRef.current.value === "cls" ||
            inputRef.current.value === "clear"
        ) {
            setHistoryList([]);
        } else {
            setHistoryList([
                ...historyList,
                `julian@archLinux~~ ${inputRef.current.value}`,
            ]);
        }

        inputRef.current.value = "";
    };

    useEffect(() => {
        scrollToBottom();
    }, [historyList]);
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "auto",
            /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        });
    };
    return (
        <TerminalScreen onSubmit={handleNewMessage}>
            <HistoryList ref={historyRef}>
                {historyList.map((item, index) => (
                    <HistoryItem
                        key={index}
                        onClick={() => inputRef.current.focus()}
                    >
                        {item}
                    </HistoryItem>
                ))}
            </HistoryList>
            <InputDiv>
                <P>julian@archLinux~~</P>

                <Input
                    type="text"
                    autoFocus
                    onBlur={() => {
                        inputRef.current.focus();
                    }}
                    ref={inputRef}
                />
            </InputDiv>
        </TerminalScreen>
    );
};

const HistoryList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
const TerminalScreen = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    color: white;
`;
const Input = styled.input`
    background-color: black;
    color: white;
    border: none;
    outline: none;
    font-size: 2.3rem;
    letter-spacing: 0.5px;
    font-weight: 500;
    width: 100%;
`;
const P = styled.p`
    font-size: 2.4rem;
    margin: 0;
    margin-right: 10px;
    font-weight: 500;
`;
const HistoryItem = styled.li`
    margin-bottom: 2vh;
    word-break: break-all;
    font-size: 2.4rem;
    font-weight: 500;
`;
export default History;
