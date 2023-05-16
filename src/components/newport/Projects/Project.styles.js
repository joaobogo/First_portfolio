import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15vh;

  h2 {
    margin-top: 7vh;
    font-size: 40px;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
  }

  h3 {
    font-size: 30px;
  }

  .first {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .left {
    text-align: justify;
    width: 40vw;
    border: solid 2px lightyellow;
    border-radius: 20px;
    padding: 2vw;
  }

  .right img {
    margin-top: 5vh;
    width: 35vw;
    height: 40vh;
    filter: drop-shadow(20px 8px 4px lightyellow);
  }

  .buttoncontainer2 {
    padding-top: 4vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .buttoncontainer2 a {
    text-align: center;
    text-decoration: none;
    color: black;
    border: solid lightyellow 2px;
    border-radius: 20px;
    background-color: white;
    width: 8vw;
    height: 5vh;
  }

  .buttoncontainer2 a:hover {
    cursor: pointer;
    box-shadow: 0 0 80px #ec6d10;
    background-color: #f6bd92;
  }

  .desktop{
    display: none;
  }


  @media screen and (max-width: 780px) {
    height: auto;
    
    h2 {
      margin-top: 10vh;
      font-size: 24px;
    }

    .first {
      flex-direction: column;
      margin-top: -10vh;
    }

    h3 {
      font-size: 20px;
      text-align: center;
    }

    .left {
      width: 90vw;
    }

    .right {
      width: 90vw;
    }

    .right img {
      width: 90vw;
      height: 20vh;
      filter: drop-shadow(10px 4px 2px lightyellow);
    }

    .buttoncontainer2 a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4vh;
      width: 16vw;
    }

    .mobile{
      display: none;
    }

    .desktop{
      display: flex;
    }

  }
`;

export default ProjectContainer;
