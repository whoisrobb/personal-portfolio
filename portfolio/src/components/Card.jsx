import React from 'react'

const Card = ({ item }) => {
  return (
    <div className='card'>
        <div className="title">{item.title}</div>
        <div className="img"><img src={item.picture_path} alt="" /></div>
        <div className="desc">{item.description}</div>
        <div className="links">
            <a className='github' href=""><i className="uil uil-github"></i></a>
            <a className='live' href=""><i className="uil uil-external-link-alt"></i></a>
        </div>
    </div>
  )
}

export default Card