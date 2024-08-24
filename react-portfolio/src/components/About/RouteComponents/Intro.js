import React from 'react'
import '../../../styles/About/Route/Intro.scss'

const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right'>Welcome to the universe of Ruchitha, where labels are just suggestions.</p>
                        <p data-aos='fade-right' data-aos-delay='200'>Am I a software/AI engineer? A college student? An entrepreneur? An author? A content creator? The answer is yes to all of the above and more.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>As a final-year college student, I’ve just wrapped up an exhilarating summer internship at Providence India, diving deep into the world of Generative AI with a fascinating project on Retrieval Augmented Generation.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>But my story doesn’t stop at coding marvels. I’ve embarked on an entrepreneurial journey, learning the ropes, stumbling over some, and now building my second big idea from the ground up.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>Oh, and did I mention I’m the editor of my college newsletter? Yep, I juggle words and ideas just as deftly as I handle algorithms. Self-obsessed? Yes! I’m all about leveling up and becoming the best version of myself every single day.</p>
                        <p data-aos='fade-right' data-aos-delay='1000'>So, if you’re up for a ride through innovation, creativity, and a dash of organized chaos, you’ve found the right place. Let’s grow, learn, and create something extraordinary together!</p>

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
