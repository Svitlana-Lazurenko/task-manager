import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;

  font-weight: 700;
  font-size: 20px;
  letter-spacing: 4px;
  color: rgb(141, 247, 241);
  text-decoration: none;

  &.active {
    color: rgb(2, 211, 200);
  }
`;
