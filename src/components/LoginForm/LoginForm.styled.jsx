import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  padding: 40px 40px 60px 40px;
  margin: 0 auto;

  background-color: rgb(255, 249, 198);
  border-radius: 10px;
  border: 2px solid rgb(2, 211, 200);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  letter-spacing: 2px;
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 5px;
  margin-left: 20px;

  letter-spacing: 5px;
  font-size: 15px;
`;

export const Input = styled.input`
  height: 35px;
  padding: 10px 25px;
  margin-top: 5px;

  background: transparent;
  border-radius: 10px;
  border: 2px solid rgb(2, 211, 200);
  outline-color: rgb(255, 224, 45);

  font-size: 20px;
  letter-spacing: 5px;
`;

export const Button = styled.button`
  height: 40px;
  margin: 30px auto 0;
  padding: 10px 20px;

  display: block;
  overflow: hidden;

  background-color: transparent;
  border: none;

  color: rgb(128, 218, 11);
  font-size: 15px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 6px;

  :hover {
    background: rgb(193, 255, 252);
    border-radius: 5px;
    border: 2px solid rgb(2, 211, 200);
  }
`;
