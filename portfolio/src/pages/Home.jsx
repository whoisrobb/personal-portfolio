import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    const itemEls = document.querySelectorAll('.animate-item');

    gsap.set(itemEls, { y: '20rem', opacity: 0 });

    gsap.to(itemEls, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.1, // Stagger delay between each element
    });
  }, []);

  return (
    <section id='home' className='home'>
      <div className="wrapper">
        <div className="name tabs">
          <h1 className="animate-item">robert</h1>
          <h1 className="animate-item">muchiri</h1>
        </div>
        <div className="intro">
          <div className="tabs"><p className="animate-item">Full-stack developer based in Nairobi, Kenya.</p></div>
          <div className="tabs"><p className="animate-item">I bring a versatile skill set in web development and a passion for crafting captivating digital experiences to the table.</p></div>
          <div className="tabs"><p className="animate-item">I focus on creating dynamic front-end solutions that engage users as well as crafting optimal, integrated backend applications.</p></div>
        </div>
      </div>
    </section>
  );
};

export default Home;