import React from 'react'
import './portfolio.css'
import IMAGE1 from '../../assets/portfolio1.jpg'
import IMAGE2 from '../../assets/portfolio2.jpg'
import IMAGE3 from '../../assets/portfolio3.jpg'
import IMAGE4 from '../../assets/portfolio4.jpg'
import IMAGE5 from '../../assets/portfolio5.png'
import IMAGE6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMAGE1,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMAGE2,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMAGE3,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: IMAGE4,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: IMAGE5,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: IMAGE6,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })}
        
      </div>
    </section>
  )
}

export default Portfolio