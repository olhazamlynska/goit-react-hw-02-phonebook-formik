import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
  width: 300px;
  justify-content: center;
  border: 1px solid ${p => p.theme.colors.accentColor};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.accentColor};
  &:focus-within {
    outline: none;
  }
  &:not(:placeholder-shown) {
    color: ${p => p.theme.colors.accentColor};
  }
  &::placeholder {
    color: ${p => p.theme.colors.accentColor};
  }
  &:hover::-webkit-input-placeholder {
    color: ${p => p.theme.colors.accentColor};
  }
  &:hover {
    border-bottom: 0.5px solid ${p => p.theme.colors.accentColor};
  }
`;

export const AddBtn = styled.button`
  width: 250px;
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accentColor};
  }
`;
