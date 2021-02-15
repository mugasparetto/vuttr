import styled from 'styled-components';

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  color: #25282b;
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalDescription = styled.p`
  color: #52575c;
  padding: 1.5rem 0;
`;

export const ButtonDeck = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top: 1rem;
  margin-top: -1rem;

  @media screen and (max-width: 27.5rem) {
    flex-direction: column;
    align-items: stretch;
  }
`;
