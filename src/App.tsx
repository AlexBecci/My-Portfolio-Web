import { Component } from './components/TEST/Component'
import { Portfolio } from './components/TEST/Portfolio'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
function App() {
  

  return (
    <>
      {/* <Game /> */}
      {/* <Test/> */}
      {/* <Portfolio/> */}
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </>
  )
}

export default App

