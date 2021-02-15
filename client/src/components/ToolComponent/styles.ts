import styled from 'styled-components';

export const Surface = styled.article`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background: white;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`;

export const ToolHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
`;

export const ToolTitle = styled.h4`
  color: #007eff;
  padding-right: 1rem;

  @media screen and (max-width: 22.5rem) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const ToolDescription = styled.p`
  color: #52575c;
  margin-bottom: 1.5rem;
`;

export const TagsDeck = styled.footer`
  display: flex;
  flex-wrap: wrap;
  margin-top: -1rem;
`;

export const Tag = styled.span`
  padding: 0.5rem 1rem;
  border: 0.0625rem solid #e8e8e8;
  margin-right: 1rem;
  margin-top: 1rem;
  border-radius 0.5rem;

  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1rem;
  letter-spacing: 0.2px;

  color: #52575C;
`;
