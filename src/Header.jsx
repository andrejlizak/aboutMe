import './index.scss'
import classNames from 'classnames'
import i18next from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation'
import CV from './files/AndrejLizák_CV_V2.pdf'
import CV_photo from './img/creative_cv.jpg'
import CV_SK from './files/creative_cv_SK.pdf'
import CvModal from './CvModal'
import Modal from 'react-modal'
import 'animate.css'




function Header(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { t } = useTranslation();
  
    const headingParagraph = t('heading_paragraph');
    const pdf = i18next.language === 'sk' ? CV_SK : CV;
    return (
        <header>
            <div className="main-left">
                <h1 className='animate__animated animate__fadeInDown'>ANDREJ <br />LIZÁK</h1>
                <p className='animate__animated animate__fadeInLeft'>
                    {headingParagraph}
                </p>
                <div className='buttons animate__animated animate__fadeInUp'>
                    <a href={pdf} download>
                        <button className="btn download" >
                            
                            {t('btn_download')}
                        </button>
                    </a>
                    <button className ="btn discover" onClick={handleOpen}>
                    {t('btn_discover')}
                    </button>
                </div>
            </div>

            <div className="main-right animate__animated animate__fadeInRight">
                <img src={CV_photo} alt="photo here" onClick={handleOpen} />
            </div>
            
            
            <CvModal  open={open} handleClose={handleClose} />
        </header>
        
    );
}

export default Header