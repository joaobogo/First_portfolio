import React, {useState} from 'react'
import './project.css'
import {FiGithub} from 'react-icons/fi'
import img from '../../Assets/easy.png'
import img2 from '../../Assets/mend.png'
import img3 from '../../Assets/luta.png'
import img4 from '../../Assets/cotas.png'
import img5 from '../../Assets/plane.png'
import img6 from '../../Assets/travel.png'
import img7 from '../../Assets/car.png'
import img8 from '../../Assets/tour.png'
import img9 from '../../Assets/food.png'
import img10 from '../../Assets/juice.png'
import img11 from '../../Assets/healthy.png'
import img12 from '../../Assets/gym.png'
import img13 from '../../Assets/orli.png'
import img14 from '../../Assets/horizon.png'
import img15 from '../../Assets/coffee.png'
import img16 from '../../Assets/furniture.png'
import img17 from '../../Assets/atlantis.png'

const data = [
  {
    id: 1,
    image: img,
    demo: 'https://www.easyfert.com.br',
    liveLink: '',
    github: 'https://github.com/joaobogo/Easyfert-Frontend',
    title: 'E-commerce Easyfert',
    desc: 'Fullstack E-commerce store for a local fertilizer company, with encrypted database for inventory and customers data.',
    tech1: 'CSS',
    tech2: 'JS',
    tech3: 'React.js',
    tech4: 'Node.js',
    tech5: 'AWS',
  },
  {
    id: 2,
    image: img2,
    demo: 'https://clever-kataifi-ac2d1f.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/Mend-Architecture',
    title: 'MEND Archicture',
    desc: "Frontend website for an architecture business with the focus of showing the architects' projects to its clients.",
    tech1: 'CSS',
    tech2: 'JS',
    tech3: 'React.js',
    tech4: '',
    tech5: '',
  },
  {
    id: 3,
    image: img3,
    demo: 'https://teixeirafightclub.com.br/',
    liveLink: '',
    github: 'https://github.com/joaobogo/Muay-Thai',
    title: 'Muay Thai Gym Landing Page',
    desc: "Frontend website for a muay thai gym, fully responsive to all devices.",
    tech1: 'CSS',
    tech2: 'JS',
    tech3: 'React.js',
    tech4: '',
    tech5: '',
  },
  {
    id: 4,
    image: img4,
    demo: 'https://melodious-taffy-59405b.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/CotasCuritiba',
    title: 'Cotas Curitiba Landing Page',
    desc: "Frontend website for a home and auto loan business",
    tech1: 'CSS',
    tech2: 'JS',
    tech3: 'React.js',
    tech4: '',
    tech5: '',
  },
  {
    id: 5,
    image: img5,
    demo: 'https://eloquent-mandazi-9e6252.netlify.app',
    liveLink: '',
    github: 'https://github.com/joaobogo/AirlineCompanyReact',
    title: 'Airline Company Landing Page',
    desc: "Frontend website for an airline company with booking, fully responsive website. ",
    tech1: 'CSS',
    tech2: 'Sass',
    tech3: 'JS',
    tech4: 'React.js',
    tech5: '',
  },
  {
    id: 5,
    image: img6,
    demo: 'https://papaya-macaron-5404d2.netlify.app',
    liveLink: '',
    github: 'https://github.com/joaobogo/TravelAgency-LandingPage-React',
    title: 'Travel Agency Landing Page',
    desc: "Frontend website for a travel agency, fully responsive website. ",
    tech1: 'CSS',
    tech2: 'Sass',
    tech3: 'JS',
    tech4: 'React.js',
    tech5: '',
  },
  {
    id: 6,
    image: img7,
    demo: 'https://fastidious-crisp-95273e.netlify.app',
    liveLink: '',
    github: 'https://github.com/joaobogo/CarDealership-Landingpage-Reactjs',
    title: 'Car Dealership Landing Page',
    desc: "Frontend website for car dealership, fully responsive website. ",
    tech1: 'CSS',
    tech2: 'Sass',
    tech3: 'JS',
    tech4: 'React.js',
    tech5: '',
  },
  {
    id: 7,
    image: img8,
    demo: 'https://legendary-basbousa-550301.netlify.app',
    liveLink: '',
    github: 'https://github.com/joaobogo/WonderTravelAgency',
    title: 'Travel Tour Landing Page',
    desc: "Frontend website for travel tours company, fully responsive website.",
    tech1: 'CSS',
    tech2: 'Sass',
    tech3: 'JS',
    tech4: 'React.js',
    tech5: '',
  },
  {
    id: 8,
    image: img9,
    demo: 'https://rococo-speculoos-3bbb3c.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/OnlineFoodOrdering',
    title: 'Online Food Ordering Website',
    desc: "Complete Website for online food ordering service, with admin page and fully responsive.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
  {
    id: 9,
    image: img10,
    demo: 'https://illustrious-twilight-9d0e6d.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/RawJuice-LandingPage',
    title: 'Raw Juice Landing Page',
    desc: "Frontend website for juice shop, fully responsive website.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
  {
    id: 10,
    image: img11,
    demo: 'https://reliable-pika-5f63f5.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/HealthyFoodStore-LandingPage',
    title: 'Healthy Food Store Landing Page',
    desc: "Frontend website for healthy food store, fully responsive website.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
  {
    id: 11,
    image: img12,
    demo: 'https://extraordinary-starship-c0e771.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/FitnessGym-LandingPage',
    title: 'Fitness Gym Landing Page',
    desc: "Frontend website for fitness gym, fully responsive website.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
  {
    id: 12,
    image: img13,
    demo: 'https://grand-kelpie-b25cf0.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/OrliConstruction-LandingPage',
    title: 'Orli Construction Landing Page',
    desc: "Frontend website for costruction company, fully responsive website.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
  {
    id: 13,
    image: img14,
    demo: 'https://animated-cucurucho-d1c086.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/HorizonHotel-Website',
    title: 'Horizon Hotel Complete Website',
    desc: "Complete Website for luxury hotel, with admin page and customer database.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: 'SQL',
  },
  {
    id: 14,
    image: img15,
    demo: 'https://taupe-muffin-340a73.netlify.app/',
    liveLink: img15,
    github: 'https://github.com/joaobogo/CoffeeProductsStore-LandingPage',
    title: 'Coffee Store Landing Page',
    desc: "Frontend website for coffee products store, fully responsive website.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
  {
    id: 15,
    image: img16,
    demo: 'https://clinquant-lebkuchen-2b7f6e.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/Furniture-Store-LandingPage',
    title: 'Furniture Store Landing Page',
    desc: "Frontend website for furniture store, fully responsive website.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
  {
    id: 16,
    image: img17,
    demo: 'https://animated-marshmallow-497f09.netlify.app/',
    liveLink: '',
    github: 'https://github.com/joaobogo/AtlantisHotel-LandingPage',
    title: 'Atlantis The Royal Hotel Landing Page',
    desc: "Frontend website for luxury resort, fully responsive website.",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'SASS',
    tech4: 'JS',
    tech5: '',
  },
]

const Project = () => {
  return (
    <section id='projects' className='projects container section'>
      <div class="sectionTitle">
      <span class="titleNumber">03 . </span>  
      <h5 class="titleText">Projects <div class="underline"><span></span></div></h5>
      </div>

      <div className="projectContainer grid"> 
          { 
          data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4, tech5}) =>{
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                <div className="youtubeIcon">
                <a href={demo} target="_blank">Website Demo</a>
                </div>
                <div className="githubIcon">
                <a href={github} target="_blank"><FiGithub className="icon"/></a>
                </div>
                </div>
              
             <div className="imgDiv">
              <a href={liveLink} target="_blank">
              <img src={image} alt={title} /> 
              </a>
             </div>
             <div className="projectTitle">
              <h3>{title}</h3>
             </div>
             <div className="desc">
              {desc}
             </div>
             <div className="technologies flex">
                <small> {tech1} </small>
                <small> {tech2} </small>
                <small> {tech3} </small>
                <small> {tech4} </small>
                <small> {tech5} </small>
             </div>
             </div>
            )

           })
           }
      </div>

    </section>
  )
}

export default Project