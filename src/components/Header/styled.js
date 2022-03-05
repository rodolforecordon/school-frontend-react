import styled from 'styled-components';
import { colors } from '../../config/colors';

export const Nav = styled.nav`
  background: ${colors.orange};
  padding: 20px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 10px 0 10px;
    padding: 0 40px 0 40px;
    font-weight: bold;
    color: ${colors.primaryColor};
  }
`;
