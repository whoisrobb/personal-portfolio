import React from 'react'
import Card from '../components/Card'
import data from '../utils/data'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <div className="head">
        <p>my works</p>
      </div>
      <div className="works">
        {data.map((item, index) => ( // Added 'index' as a parameter
          <Card key={index} item={item}/> // Added 'key' prop and returned JSX element
        ))}
      </div>
    </section>
  )
}

export default Portfolio