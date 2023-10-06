import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;

  background-color: rgb(255, 236, 161);
  border-radius: 10px;
  border: 2px solid rgb(53, 202, 8);

  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Text = styled.span`
  font-size: 27px;
  letter-spacing: 4px;
`;

export const TextNumber = styled.span`
  font-size: 20px;
  letter-spacing: 4px;
`;

export const TextDate = styled.span`
  font-size: 20px;
  letter-spacing: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  height: 40px;

  border-radius: 0.6em;
  border: 2px solid rgb(53, 202, 8);
  background-color: rgb(216, 255, 193);

  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgb(0, 167, 158);

  :hover {
    background-color: rgb(253, 239, 109);
  }
`;
