import styled from "styled-components";

export const Input = styled.input.attrs({
    type: 'text',
})`
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    width: 30px;
    color: red;
`;

export const Button = styled.button`
    border: none;
    background: none;
    font-size: 22px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
`;