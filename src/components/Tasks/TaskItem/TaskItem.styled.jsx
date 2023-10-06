import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 15px 15px;
  margin: 0 auto;
  width: 247px;

  background-color: rgb(255, 236, 161);
  border-radius: 10px;
  border: 2px solid rgb(53, 202, 8);
  }
`;

export const TextName = styled.span`
  font-size: 27px;
  letter-spacing: 4px;
  margin-bottom: 15px;
`;

export const Text = styled.span`
  font-size: 20px;
  letter-spacing: 4px;
  margin-bottom: 35px;
`;

export const TextDate = styled.span`
  font-size: 13px;
  letter-spacing: 4px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
