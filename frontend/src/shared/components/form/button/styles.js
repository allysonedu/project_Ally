import styled from 'styled-components';

export const Container = styled.button`
  margin: 5px;
  background: ${({ theme }) => theme.secondary_light};
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  font-weight: bold;
  align-items: center;
  text-align: center;

  transition: transform 0.8s blue, background-color 0.3s blue;

  &:hover {
    transform: translateY(3px);
    box-shadow: 0 5px 1px 0 rgba(0, 0, 0, 0.2);
    background-color: #16498c;
  }
`;
