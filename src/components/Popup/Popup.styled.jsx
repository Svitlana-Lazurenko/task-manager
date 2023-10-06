import styled from '@emotion/styled';

export const PopupBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 200px;
  padding: 18px;
  background-color: rgb(141, 247, 241);
  border-radius: 5px;
  border: 1px solid rgb(128, 218, 11);
`;

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 45px;
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
export const Text = styled.h2`
  font-weight: 400;
  margin-bottom: 10px;
`;
export const TextName = styled.span``;
export const Form = styled.form``;
export const Input = styled.input`
  height: 25px;
  padding: 10px 25px;
  margin-top: 5px;

  background: rgb(255, 249, 198);
  border-radius: 10px;
  border: 2px solid rgb(2, 211, 200);
  outline-color: rgb(255, 224, 45);

  font-size: 20px;
  letter-spacing: 5px;
`;
