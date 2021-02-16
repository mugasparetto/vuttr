import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 37.5rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SearchBar = styled.div`
  display: flex;

  @media screen and (max-width: 22.5rem) {
    flex-direction: column;
  }
`;

export const SearchField = styled.div`
  position: relative;
`;
