import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  padding: 40px 40px 60px 40px;
  margin: 0 auto;

  background-color: rgb(141, 247, 241);
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

export const InputText = styled.input`
  height: 35px;
  padding: 10px 25px;
  margin-top: 5px;

  background: rgb(255, 249, 198);
  border-radius: 10px;
  border: 2px solid rgb(2, 211, 200);
  outline-color: rgb(53, 202, 8);

  font-size: 20px;
  letter-spacing: 5px;
`;

export const InputTextArea = styled.textarea`
  resize: vertical;
  padding: 10px 25px;

  background: rgb(255, 249, 198);
  border-radius: 10px;
  border: 2px solid rgb(2, 211, 200);
  outline-color: rgb(53, 202, 8);

  font-size: 20px;
  letter-spacing: 5px;
`;

export const InputDate = styled.input`
  padding: 10px 25px;

  background: rgb(255, 249, 198);
  border-radius: 10px;
  border: 2px solid rgb(2, 211, 200);
  outline-color: rgb(53, 202, 8);

  font-size: 20px;
  letter-spacing: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  height: 40px;
  width: 100px;
  margin: 0 auto;

  border-radius: 0.6em;
  border: 2px solid rgb(53, 202, 8);
  background-color: rgb(216, 255, 193);

  fontSize: 15,
  fontWeight: 600,
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgb(0, 167, 158);

  :hover {
    background-color: rgb(253, 239, 109);
  }
`;
