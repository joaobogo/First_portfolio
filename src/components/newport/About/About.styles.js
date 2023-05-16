import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
  }

  .aboutmain {
    height: 60vh;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80vw;
  }

  .me {
    width: 15vw;
    filter: drop-shadow(20px 8px 4px lightyellow);
    opacity: 0.9;
    margin-bottom: 10vh;
  }

  .right {
    margin-top: -9vh;
    width: 50vw;
    text-align: justify;
  }

  .mainp {
    padding: 3vh;
  }

  .buttoncontainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .buttoncontainer a {
    text-align: center;
    text-decoration: none;
    color: black;
    border: solid lightyellow 2px;
    border-radius: 20px;
    background-color: white;
    width: 8vw;
    height: 5vh;
  }

  .buttoncontainer a:hover {
    box-shadow: 0 0 80px #ec6d10;
    background-color: #f6bd92;
  }

  h3 {
    padding-top: 4vh;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    padding-bottom: 3vh;
  }

  .logos {
    display: flex;
    justify-content: space-evenly;
  }

  .logos img {
    width: 50px;
    height: 50px;
    opacity: 0.8;
  }

  .mobile{
    display: none;
  }

  @media screen and (max-width: 780px) {
    height: 100vh;
    justify-content: space-evenly;

    .desktop{
      display: none;
    }
    h2 {
      font-size: 24px;
    }

    .aboutmain {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .left{
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }

    .me {
      width: 50vw;
      opacity: 1;
    }
    .right {
      width: 85vw;
    }
    .mainp {
      width: 85vw;
      text-align: justify;
    }

    .buttoncontainer a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20vw;
      height: 5vh;
    }

    .logos {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 380px) {
height: 130vh;
  }
`;

export default AboutContainer;
