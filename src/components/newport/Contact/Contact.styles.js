import styled from "styled-components";

const ContactContainer = styled.div`
  margin-top: 10vh;
  border-top: 1px solid lightyellow;
  height: 45vh;
  display: flex;
  flex-direction: column;

  .main {
    margin-top: 15vh;
    display: flex;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  .icons {
    display: flex;
    gap: 8px;
  }

  .btn {
    margin-top: 5vh;
    text-align: center;
    text-decoration: none;
    color: black;
    border: solid lightyellow 2px;
    border-radius: 20px;
    background-color: white;
    width: 15vw;
    height: 5vh;
    font-size: 16px;
  }

  .btn:hover {
    cursor: pointer;
    box-shadow: 0 0 80px #ec6d10;
    background-color: #f6bd92;
  }
  .left {
    margin-top: -20vh;
    margin-left: 20vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40vw;
  }

  .right {
    width: 40vw;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  label {
    font-size: 16px;
    text-align: left;
    width: 35vw;
  }

  input {
    height: 6vh;
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
  }

  textarea {
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
  }
  h2 {
    margin-top: 5vh;
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
  }

  .main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: orange;
    transition: 0.3s;
  }

  @media screen and (max-width: 780px) {
    height: 75vh;

    h2 {
      font-size: 24px;
    }

    .left {
        justify-content: center;
        align-items: center;
      width: 90vw;
      margin-top: -10vh;
      margin-left: 0;
      gap: 10px;
      margin-bottom: 5vh;
    }
    .main {
      flex-direction: column;
    }

    .right{
        width: 90vw;
    }
    label{
        width:100%
    }
    input{
        width: 100%;
    }
    textarea{
        width: 100%;
    }

    .btn{
        width: 20vw;
    }
  }
`;

export default ContactContainer;
