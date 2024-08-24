import React from 'react';
import '../../../styles/About/Route/Graduation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Chaitanya Bharathi Institute of Technology</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;2021-2025</h2>
                        <ul>
                            <li>Final-year student majoring in Artificial Intelligence and Machine Learning with a CGPA of 9.47.</li>
                            <li>Experienced a dynamic blend of challenging coursework and transformative internships.</li>
                            <li>Served as the editor of our college newsletter, sharpening communication and leadership skills.</li>
                            <li>Passionate about cutting-edge technologies and innovative solutions, shaping professional aspirations.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Graduation;
