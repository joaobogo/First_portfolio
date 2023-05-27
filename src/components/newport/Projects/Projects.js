import React, { useEffect } from "react";
import ProjectContainer from "./Project.styles";
import easyfert from "../../../assets/easyfert.png";
import teixeira from "../../../assets/teixeira.png";
import cotas from "../../../assets/cotas.png";
import mend from "../../../assets/mend.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ProjectContainer id="projects">
      <h2 data-aos="fade-up">Latest Projects</h2>

      <div data-aos="fade-up" className="first">
        <div className="left">
          <h3>E-Commerce Easyfert</h3>
          <p>
            In this project I created an E-commerce store, for Easyfert. I used
            Reactjs, CSS and Javascript to create the Frontend, and Nodejs and
            AWS for the backend and hosting. I used quite a few different API's
            during this proccess, Sanity to allow the client to manage the
            store's inventory with ease, and also being able to post on their
            internal blog on their own. I also used Stripe to enable safe credit
            card transactions for the purchases, and Mercado Pago to enable PIX
            payments. The Bling API was used to connect their website to their
            inventory management and accounting system, so that every purchase
            made within the website automatically updates their official
            inventory and accounting.
          </p>
        </div>

        <div className="right">
          <img src={easyfert}></img>
          <div className="buttoncontainer2">
            <a href="www.easyfert.com.br">Demo</a>
            <a href="https://github.com/joaobogo/Easyfert-Frontend">Code</a>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="first mobile">
        <div className="right">
          <img src={mend}></img>
          <div className="buttoncontainer2">
            <a href="https://clever-kataifi-ac2d1f.netlify.app">Demo</a>
            <a href="https://github.com/joaobogo/Mend-Architecture">Code</a>
          </div>
        </div>

        <div className="left">
          <h3>MEND Architecture</h3>
          <p>
            I used CSS, JS and Reactjs, and the Email JS API to set up a system
            to help MEND capture more customers and get in touch quickly with
            them. The website was designed by me and it is completely responsive
            to any devices. The objective of this website was to show potential
            clients their projects, while keeping a modern and sophisticated
            look to it.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="first desktop">
        <div className="left">
          <h3>MEND Architecture</h3>
          <p>
            I used CSS, JS and Reactjs, and the Email JS API to set up a system
            to help MEND capture more customers and get in touch quickly with
            them. The website was designed by me and it is completely responsive
            to any devices. The objective of this website was to show potential
            clients their projects, while keeping a modern and sophisticated
            look to it.
          </p>
        </div>

        <div className="right">
          <img src={mend}></img>
          <div className="buttoncontainer2">
            <a href="https://clever-kataifi-ac2d1f.netlify.app">Demo</a>
            <a href="https://github.com/joaobogo/Mend-Architecture">Code</a>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="first">
        <div className="left">
          <h3>Muay Thai Gym Website</h3>
          <p>
            Using CSS, JS and Reactjs, this project was for a local business.
            The website was designed by me and it is completely responsive to
            any devices. The objective of this website is to raise awareness of
            the brand and facilitate getting in touch with the business while.
          </p>
        </div>

        <div className="right">
          <img src={teixeira}></img>
          <div className="buttoncontainer2">
            <a href="https://teixeirafightclub.com.br/">Demo</a>
            <a href="https://github.com/joaobogo/Muay-Thai">Code</a>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="first mobile">
        <div className="right">
          <img src={cotas}></img>
          <div className="buttoncontainer2">
            <a href="https://melodious-taffy-59405b.netlify.app/">Demo</a>
            <a href="https://github.com/joaobogo/CotasCuritiba">Code</a>
          </div>
        </div>

        <div className="left">
          <h3>Cotas Curitiba Website</h3>
          <p>
            Using CSS, JS and Reactjs, and the Email JS API to set up a system
            to help my client capture more potential clients and reach out to
            them on a timely manner. The website is completely responsive to any
            devices. The objective of this website is to raise awareness of the
            brand and facilitate the proccess of sharing about house and auto
            loans.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="first desktop">
        <div className="left">
          <h3>Cotas Curitiba Website</h3>
          <p>
            Using CSS, JS and Reactjs, and the Email JS API to set up a system
            to help my client capture more potential clients and reach out to
            them on a timely manner. The website is completely responsive to any
            devices. The objective of this website is to raise awareness of the
            brand and facilitate the proccess of sharing about house and auto
            loans.
          </p>
        </div>

        <div className="right">
          <img src={cotas}></img>
          <div className="buttoncontainer2">
            <a href="https://melodious-taffy-59405b.netlify.app/">Demo</a>
            <a href="https://github.com/joaobogo/CotasCuritiba">Code</a>
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
}

export default Projects;
