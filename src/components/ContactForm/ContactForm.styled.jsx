import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  text-align: center;

  padding: 15px;

  width: 70%;

  border: 1px solid black;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;
`;

export const Input = styled.input`
  display: block;
  max-width: 50 px;
  margin-top: 10px;
  padding: 10px;

  border: none;
  border-radius: 5px;
  display: block;
  box-shadow: inset 0px 0px 8px 0px #33333347;
`;

export const Button = styled.button`
  min-width: 100px;
  width: 150px;
  height: 32px;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;

  border: none;
  border-radius: 4px;

  transition: background-color 500ms, transform 500ms;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #33cc33;
    transform: scale(1.1);
  }
`;
