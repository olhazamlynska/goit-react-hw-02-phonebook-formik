import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 40px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const ContactsName = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accentColor};
`;

export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-left: ${p => p.theme.space[3]}px;
  cursor: pointer;
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
