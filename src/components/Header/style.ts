import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: #fff;
  background: ${props => props.theme.colors.primary};
`;
