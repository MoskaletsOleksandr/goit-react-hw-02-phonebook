import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContactName = styled.p`
  margin-right: 5px;
`;

export const ContactNumber = styled.p`
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  min-width: 100px;
  width: 150px;
  height: 32px;

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
