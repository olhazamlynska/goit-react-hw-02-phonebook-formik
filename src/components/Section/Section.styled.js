import styled from 'styled-components';

export const SectionStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 600px;
  text-align: center;
  padding-left: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[5]}px;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 5px -5px 20px ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.backgroundBody};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.accentColor};
`;
