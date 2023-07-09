import styled from '@emotion/styled';

export const StyledForm = styled.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  border: solid 2px;
  border-radius: 6px;
  background-color: #389677;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  background-color: #e1d5bb;
  &:focus,
  &:hover {
    outline: solid 2px #c7a149;
  }
`;
export const FormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  font-size: 16px;
  background-color: #c7a149;
  &:focus,
  &:hover {
    background-color: #b38f41;
  }
`;
export const ErrorMessage = styled.p`
  margin: 0px;
  padding: 0px;
`;
