import React from 'react';
import "../styles/portfolio.css";
import IMG1 from "../assets/portfolio1.png";
import IMG2 from "../assets/portfolio2.png";
import IMG3 from "../assets/portfolio3.png";
import IMG4 from "../assets/portfolio4.png";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";


const data = [
    {
        id: 1,
        image: IMG1,
        title: "Omi Logo Redesign",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/22524463-Omi-Logo-Redesign"
    },

    {
        id: 2,
        image: IMG2,
        title: "Unused Kode Logo Design",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/22527785-Unused-Kode-Logo-Design"
    },
    {
        id: 3,
        image: IMG3,
        title: "Icons",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/22527633-Icons"
    },
    {
        id: 4,
        image: IMG4,
        title: "Wellness: Your All-in-One UI Kit",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/22520765-Wellness-Your-All-in-One-UI-Kit"
    },
    {
        id: 5,
        image: IMG5,
        title: "Footbal",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/22523455-Footbal"
    },
    {
        id: 6,
        image: IMG6,
        title: "Rocket",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/22528593-Rocket"
    }

];


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} target='_blank' className='btn'>Github</a>
                                <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Portfolio