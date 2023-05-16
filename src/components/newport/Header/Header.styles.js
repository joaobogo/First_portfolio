import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1.firstone,
  h1.secondone,
  h1.thirdone{
    display: none;
  }

  h3 {
    width: 30vw;
  }

  h1 {
    font-family: "Times New Roman", Times, serif;
    font-size:55px;
  }

  .nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 10vh;
  }

  .social {
    display: flex;
    gap: 10px;
    color: black;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    box-shadow: 0 0 80px #ec6d10;
    border-radius: 30px;
    cursor: pointer;
    color: #ec6d10;
  }

  .typewriter .active {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em;
    animation: typing 2.5s steps(17, end), blink-caret 0.5s step-end infinite;
  }

  .typewriter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    text-align: center;
    color: black;
    font-family: "Times New Roman", Times, serif;
  }
  .typewriter .active2 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em;
    animation: typing 2.5s steps(36, end), blink-caret 0.5s step-end infinite;
  }

  .typewriter .active3 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em;
    animation: typing 2.5s steps(36, end), blink-caret 0.5s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media screen and (max-width: 780px) {

    a{
      font-size: 13px;
    }

    h1{
      font-size: 26px;
    }
    .typewriter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    text-align: center;
  }

  .typewriter .active2 {
    flex-wrap: wrap;
  }
  }
`;

export default HeaderContainer;
