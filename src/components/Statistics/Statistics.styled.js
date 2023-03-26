import styled from '@emotion/styled';

export const ListStatistics = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ListElem = styled.li`
  background-image: linear-gradient(
    to right,
    #a7be8e 0%,
    #067988 51%,
    #32264e 100%
  );
  width: auto;
  height: 20px;
  border-radius: 4px;
  border-color: gray;
  text-decoration: none;
  color: white;
  font-weight: 400;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const ContentSpan = styled.span`
  font-weight: bold;
`;

export const PositiveFeedBack = styled.span`
  font-weight: bold;
  color: yellow;
`;
