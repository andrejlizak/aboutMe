import React, { useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { BrowserRouter, Link,Route, Routes } from 'react-router-dom';

import Header from './Header.jsx'
import LangSel from './LangSel.jsx'


function App() {
  
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
  useEffect(() => {  
    document.title = t('app_title')
  }, [currentLanguageCode, t])
  return(
      <Routes>
        <Route path='/' element={<LangSel/>}/>
        <Route path='/header' element={<Header/>}/>
      </Routes>
  );
  
}
export default App
