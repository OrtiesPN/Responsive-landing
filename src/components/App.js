import './App.css';
import Header from './Header';
import Promo from './Promo';
import Rawmat from './Rawmat';
import Goods from './Goods';
import Footer from './Footer'
import About from './About';
import MapSection from './Map';
import ScrollUpButton from './ScrollUpButton/ScrollUpButton';
import { useState } from 'react';

function App() {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const [doSticky, setDoSticky] = useState(false);
  const [showUp, setShowUp] = useState(false);

  function toggleBurgerClick() {
    setIsBurgerClicked(!isBurgerClicked);
  }

  function checkScroll() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setShowUp(true);
            setDoSticky(true);
         } else {
            setShowUp(false);
            setDoSticky(false);
         }
  }

  window.onscroll = () => checkScroll();

  return (
    <div className='app'>
      <div className='app__container'>
        <Header isBurgerClicked={isBurgerClicked} onClickBurger={toggleBurgerClick} doSticky={doSticky} />
        <ScrollUpButton isBurgerClicked={isBurgerClicked} showUp={showUp}/>
        <Promo />
        <Rawmat />
        <Goods />
        <About />
        <MapSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
