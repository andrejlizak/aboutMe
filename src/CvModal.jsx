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
                    

                    },
                    content: {
                      position: 'absolute',
                      top: '30px',
                      left: '200px',
                      right: '200px',
                      bottom: '-2px',
                      border: 'none',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '5px',
                      boxShadow: '-3px -3px 30px #023e8a',
                      outline: 'none',
                      padding: '0px'
                    }
                  }}
            
            >
            <div className="flex-col dialog-header">
                <div className="flex-row" id='first-row'>
                    <button id='btn-close' onClick={handleClose}><img src={krizik}/></button>
                </div>
                <div className="flex-row" id='second-row'>
                    <div className="flex-col">
                        <p>{t('heading_paragraph_name')}</p>
                        <h1>Andrej Lizák</h1>
                        <p>{t('heading_paragraph_short')}</p>
                    </div>
                    <div className="flex-col" id='my-photo'>
                        <img src={CV_photo} alt="photo here" />
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
                            <div className="flex-col dialog-element" >
                                <h4>Súkromná stredná odborná škola Ul.29.augusta 4812 Poprad</h4>
                                <p><i>2018 - 2022</i></p>
                                <p>{t('education')}</p>

                                <h4>{t('education_h2')}</h4>
                                <p><i>2018 - 2022</i></p>
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

                            <p><i>PHP</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='php'></div>
                                <div className="shadow-bar php" ></div>
                            </div>

                            <p><i>SQL</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='sql'></div>
                                <div className="shadow-bar sql" ></div>
                            </div>

                            <p><i>C</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='c'></div>
                                <div className="shadow-bar c" ></div>
                            </div>

                            <p><i>C#</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='cSharp'></div>
                                <div className="shadow-bar cSharp" ></div>
                            </div>

                            <p><i>JAVA</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='java'></div>
                                <div className="shadow-bar java" ></div>
                            </div>

                            <p><i>REACT</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='react'></div>
                                <div className="shadow-bar react" ></div>
                            </div>

                            <p><i>JAVASCRIPT</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='javascript'></div>
                                <div className="shadow-bar javascript"></div>
                            </div>

                            <p><i>PHOTOSHOP</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='ps'></div>
                                <div className="shadow-bar ps"></div>
                            </div>

                            <p><i>GIT</i></p>
                            <div className="flex-row bar-wrapper">
                                <div className="bar" id='git'></div>
                                <div className="shadow-bar git" ></div>
                            </div>
                            
                        </div>
                    </div>
            
                </div>
            </div>

            <div className="border">
                <div className="dialog-content-wrapper" id='port'>
                    <div className="flex-col dialog-element" >
                        <h1>{t('portfolio_h')}</h1>
                    </div>
            
                </div>
            </div>

            <div className="border">
                <div className="dialog-content-wrapper" id='reach'>
                    <div className="flex-col dialog-element" >
                        <h1>{t('reach_h')}</h1>
                        <p>{t('reach')}</p>
                    </div>
            
                </div>
            </div>

        
            
            
        
            
           
            </Modal>
        </div>

    )
}


export default CvModal;