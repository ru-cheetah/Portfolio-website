import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';

const Contact = () => {
    return (
        <>
            <div className="contact" id="contact">
                <div className="contact__header">
                    <h1 data-aos="fade-down">
                        Let's Connect
                    </h1>
                </div>
                <div className="contact__container">
                    <div className="contact__info" data-aos="fade-up">
                        <ul className="contact__info-details">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                <p>Email: ruchithareddy@gmail.com</p>
                            </li>
                            <li className="contact__social">
                                <a href="https://www.linkedin.com/in/ruchitha-reddy-bavanam/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://github.com/ru-cheetah" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </li>
                        </ul>
                        <p className="contact__footer">
                            Check out my <a href="https://ruchithamcw.blogspot.com/" target="_blank" rel="noopener noreferrer">blog</a> and <a href="https://drive.google.com/file/d/1zUjadDwop8u9StKCymxlC-FwD5iA_z-Q/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
