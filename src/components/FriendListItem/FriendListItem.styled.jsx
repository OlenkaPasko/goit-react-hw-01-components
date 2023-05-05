import styled from 'styled-components';

export const Li = styled.li`
  margin: auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 270px;

  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Status = styled.span`
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
`;
export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Name = styled.span`
  color: black;
  margin-left: 10px;
`;
