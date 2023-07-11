import styled from '@emotion/styled';
import { FaTrash, FaHeart } from 'react-icons/fa';
export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0px;
`;
export const ContactName = styled.p`
  margin: 0px;
`;

export const DeleteButton = styled.button`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  color: inherit;
`;
export const ToggleFavourite = styled.button`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  color: inherit;
`;

export const DeleteIcon = styled(FaTrash)`
  width: 15px;
  height: 15px;
  &:hover,
  &:focus {
    color: #389677;
  }
`;
export const ColoredHeart = styled(FaHeart)`
  color: #b64d3e;
`;
