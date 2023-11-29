import './index.scss';
import classNames from 'classnames'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation';



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
                    <a href='./img/AndrejLizák_CV_V2.pdf' download>
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
                <img src="./img/creative_cv.jpg" alt="photo here" />
            </div>
            
            

        </header>
        
    );
}

export default Header