import React, { Component } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next'
import './index.scss';
import krizik from './img/close.png';
import aboutMe from './img/arroba.png';
import education from './img/mortarboard.png';
import skills from './img/skill.png';
import reachMe from './img/find-my-friend.png';
import 'animate.css'
import CV_photo from './img/creative_cv.jpg'
import portfolio from './img/portfolio.png';
import logo1 from './img/ifx8950fb7e45a5d6a8_logoTAv9_2010_bez_textu.jpg'
import logo2 from './img/TUKE_logo_website.png'
import phone from './img/telephone.png'
import mail from './img/mail.png'
import linkedin from './img/linkedin.png'
import home from './img/home-button.png'
import gallery1 from './img/Gallery1.jpg'
import gallery2 from './img/Gallery2.jpg'
import gallery3 from './img/Gallery3.jpg'
import gallery4 from './img/Gallery4.jpg'




const images = [
    { src: gallery1, alt: 'https://github.com/andrejlizak/anlee' },
    { src: gallery3, alt: 'https://github.com/andrejlizak/game-in-c' },
    { src: gallery4, alt: 'https://github.com/TELIT-Hackathon2023/6-draci' },
    { src: gallery2, alt: 'https://github.com/andrejlizak/takeshi-trezor' }
  ];

const CvModal = ({ open, handleClose }) =>{
    const { t } = useTranslation();
    
    return(
        <div className="dialog-window">
            <Modal
            className="modal animate__animated animate__fadeInUp"
                isOpen={open}
                onRequestClose={handleClose}
                style={{
                    overlay: {
                      position: 'fixed',
                      backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    

                    }
                  }}
            
            >
            <div className="flex-col dialog-header">
                <div className="flex-row" id='first-row'>
                    <button id='btn-close' onClick={handleClose}><img src={krizik}/></button>
                </div>
                <div className="flex-row" id='second-row'>
                <div className="flex-col" id='my-photo'>
                        <img src={CV_photo} alt="photo here" />
                    </div>
                    <div className="flex-col">
                        <p>{t('heading_paragraph_name')}</p>
                        <h1>Andrej Lizák</h1>
                        <p>{t('heading_paragraph_short')}</p>
                    </div>
                
                </div>
            </div>
            
            <div className="border">
                <div className='icon-list flex-row'>
                    <a href="#about"><img src={aboutMe} alt="" /></a>
                    <a href="#edu"><img src={education} alt="" /></a>
                    <a href="#skill"><img src={skills} alt="" /></a>
                    <a href="#port"><img src={portfolio} alt="" /></a>
                    <a href="#reach"><img src={reachMe} alt="" /></a>

                </div>
            </div>
            
            <div className="border">
                <div className="dialog-content-wrapper" id='about'>
                    <div className="flex-col dialog-element">
                        <h1>{t('introduction_h')}</h1>
                        <p>{t('introduction')}</p>
                    </div>
                    <div className="flex-col dialog-element" id='about2'>
                        <p>{t('introduction2')}</p>
                    </div>
                    <div className="flex-col dialog-element" id='about3'>
                        <p>{t('introduction3')}</p>
                    </div>
                    <div className="flex-col dialog-element" id='about4'>
                        <p>{t('introduction4')}</p>
                    </div>
            
                </div>
            </div>

            <div className="border">
                <div className="dialog-content-wrapper" id='edu'>
                    <div className="flex-col">
                        <h1 id='educationh1'>{t('education_h')}</h1>
                        <div className="flex-row">
                            <div className="flex-col dialog-element" id='edu-element'>
                                <h4>Súkromná stredná odborná škola Ul.29.augusta 4812 Poprad</h4>
                                <p><i>2018 - 2022</i></p>
                                <p>{t('education')}</p>

                                <h4>{t('education_h2')}</h4>
                                <p><i>{t('education_u')}</i></p>
                                <p>{t('education2')}</p>
                            </div>
                            <div className="flex-col dialog-element img-wrapper">
                                <img src={logo1} alt="" />
                                <img src={logo2} alt="" />
                            </div>
                        </div>
                    </div>            
                </div>
            </div>

            <div className="border">
                <div className="dialog-content-wrapper" id='skill'>
                    <div className="flex-col dialog-element">
                        <h1>{t('skills_h')}</h1>
                        <div className="flex-col">
                            <p><i>HTML/CSS</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='HTML'></div>
                                <div className="shadow-bar HTML" ></div>
                            </div>

                            <p><i>C</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='c'></div>
                                <div className="shadow-bar c" ></div>
                            </div>

                            <p><i>PHP</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='php'></div>
                                <div className="shadow-bar php" ></div>
                            </div>

                            <p><i>GIT</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='git'></div>
                                <div className="shadow-bar git" ></div>
                            </div>


                            <p><i>JAVASCRIPT</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='javascript'></div>
                                <div className="shadow-bar javascript"></div>
                            </div>

                            <p><i>REACT</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='react'></div>
                                <div className="shadow-bar react" ></div>
                            </div>

                            <p><i>JAVA</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='java'></div>
                                <div className="shadow-bar java" ></div>
                            </div>

                            <p><i>SQL</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='sql'></div>
                                <div className="shadow-bar sql" ></div>
                            </div>


                            <p><i>C#</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='cSharp'></div>
                                <div className="shadow-bar cSharp" ></div>
                            </div>


                            <p><i>PHOTOSHOP</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='ps'></div>
                                <div className="shadow-bar ps"></div>
                            </div>

                            
                        </div>
                    </div>
            
                </div>
            </div>

            <div className="border">
                <div className="dialog-content-wrapper" id='port'>
                    <div className="flex-col dialog-element" >
                        <h1>{t('portfolio_h')}</h1>
                        <div className="gallery">
                            
                            {images.map((image, index) => (
                                <a href={image.alt} target='_blank'>
                                <img
                                key={index}
                                className={`gallery_item ${index === 3 ? "second_column" : "first_colum"}`}
                                src={image.src}
                                alt={image.alt}
                                style={{ width: "300px", height: "auto" }}
                                />
                                </a>
                            ))}
                        </div>
                    </div>
            
                </div>
            </div>

            <div className="border">
                <div className="dialog-content-wrapper" id='reach'>
                    <div className="flex-col dialog-element" >
                        <h1>{t('reach_h')}</h1>
                        <div className="flex-col reach-me">
                            <div className="flex-row">
                                <img src={phone} alt="" />
                                <h3>+421911252664</h3>
                            </div>
                        </div>
                        <div className="flex-col reach-me">
                            <div className="flex-row">
                                <img src={mail} alt="" />
                                <h3>andrejlizak1@gmail.com</h3>
                            </div>
                        </div>
                        <div className="flex-col reach-me">
                            <div className="flex-row">
                                <img src={linkedin} alt="" />
                                <a href="https://www.linkedin.com/in/andrej-liz%C3%A1k-3954ab149/" target='_blank'><h3>Andrej Lizák</h3></a>
                            </div>
                        </div>
                        <div className="flex-col reach-me">
                            <div className="flex-row">
                                <img src={home} alt="" />
                                <h3>Slnečná 28, 059 07, Lendak, SK</h3>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>

        
        
            
           
            </Modal>
        </div>

    )
}


export default CvModal;
