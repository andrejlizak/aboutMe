import './index.scss'
import classNames from 'classnames'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation'
import CV from './files/AndrejLizák_CV_V2.pdf'
import CV_photo from './img/creative_cv.jpg'



function Header(){
    const { t } = useTranslation();
  
    const headingParagraph = t('heading_paragraph');
    return (
        <header>
            <div className="main-left">
                <h1>ANDREJ <br />LIZÁK</h1>
                <p>
                    {headingParagraph}
                </p>
                <div className='buttons'>
                    <a href={CV} download>
                        <button className="btn download" >
                            
                            {t('btn_download')}
                        </button>
                    </a>
                    <button className ="btn discover">
                    {t('btn_discover')}
                    </button>
                </div>
            </div>

            <div className="main-right">
                <img src={CV_photo} alt="photo here" />
            </div>
            
            

        </header>
        
    );
}

export default Header