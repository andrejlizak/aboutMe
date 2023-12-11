import './index.scss';
import "/node_modules/flag-icons/css/flag-icons.min.css"
import cookies from 'js-cookie'
import i18next from 'i18next'
import { Link,Route, Routes } from 'react-router-dom';


const changeLanguage = (code) => {
    i18next.changeLanguage(code);
};

const languages = [
    {
      code: 'en',
      country_code: 'gb',
    },
    {
      code: 'sk',
      country_code: 'sk',
    },

  ]

  
const currentLanguageCode = cookies.get('i18next') || 'en'

function LangSel(){
    
    return(
        <div className="select-lang">
            <h1 className='animate__animated animate__pulse'>Select Langugage</h1>
            <div>
                {languages.map(({ code, country_code }) =>(
                    <Link to="/header" onClick={() => {
                        changeLanguage(code);
                        }}> 
                        <button key={code} className="btn animate__animated animate__pulse"><span className={`fi fi-${country_code}`}></span>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default LangSel