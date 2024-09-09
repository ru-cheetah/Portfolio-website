import React, { useEffect } from 'react';

import '../../styles/Hero/Hero.scss';

import Myself from '../../assets/images/myself.png';

const Hero = () => {
  useEffect(() => {
    const alphbets = document.getElementsByClassName('hero__alphabet');
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener('animationend', function () {
        alphbets[i].classList.remove('alphabet-animated');
      });

      alphbets[i]?.addEventListener('mouseover', function () {
        alphbets[i].classList.add('alphabet-animated');
      });
    }
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              Hello, I am Ruchitha
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                A
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                I
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                &
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                M
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                L 
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {/* E
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                N
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                D
              </span>
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="1800"
              > */}
                <span className="hero__dev-text"> Enthusiast</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1800"
            >
              <p>
                I'm a passionate{' '}
                <span>AI & ML</span> explorer who is ready to tackle challenges 
                and come up with innovative solutions to change the 
                way the world is currently functioning.
              </p>
            </div>

            <div className="hero__buttons">
              <a
                className="hero__know-btn"
                href="https://leetcode.com/u/ru_cheetah/"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                LeetCode Profile
              </a>
              <a
                className="hero__contact-btn"
                href="https://www.hackerrank.com/profile/ruchithareddy1"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                Hackerrank Profile
              </a>
            </div>
          </div>
         <div className="hero__image" data-aos="zoom-in" data-aos-delay="200">
            <img src={Myself} alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
