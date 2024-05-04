import './Header.css';
import { useMediaQuery } from 'react-responsive';
import BurgerButton from './BurgerButton/BurgerButton';

export default function Header({isBurgerClicked, onClickBurger, doSticky}) {
    const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

    function toggleHome() {
        if (isBurgerClicked) {
            onClickBurger();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        } else {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    }

    return (
        <header className={doSticky ? "header header_sticky" : "header" }>
            {/* <p className="header__company">ИНРИТА</p> */}
            <a className='header__link header__link_company' onClick={toggleHome}>ИТАПОЛ</a>
            { isMobile ? (
                <>
                    <BurgerButton isBurgerClicked={isBurgerClicked} onClickBurger={onClickBurger} />
                    <nav className={`header__nav ${isBurgerClicked ? "header__nav_mobile header__nav_mobile_active" : "header__nav_mobile" }`} onClick={onClickBurger}>
                        <li className={`header__nav-list ${isBurgerClicked ? "header__nav-list_mobile header__nav-list_mobile_active" : "header__nav_mobile" }`} onClick={(evt=> evt.stopPropagation())}>
                            <ul className=" header__nav-item header__nav-item_mobile" onClick={toggleHome}>
                                <a className='header__link header__link_mobile'>Главная</a></ul>
                            <ul className=" header__nav-item header__nav-item_mobile" onClick={onClickBurger}>
                                <a className='header__link header__link_mobile' href='#raw'>Сырье</a></ul>
                            <ul className="header__nav-item header__nav-item_mobile" onClick={onClickBurger}>
                                <a className='header__link header__link_mobile' href='#prep'>Подготовка основания</a></ul>
                            <ul className="header__nav-item header__nav-item_mobile" onClick={onClickBurger}>
                                <a className='header__link header__link_mobile' href='#glue'>Клей для паркета</a></ul>
                            <ul className="header__nav-item header__nav-item_mobile" onClick={onClickBurger}>
                                <a className='header__link header__link_mobile' href='#cover'>Грунтовки, лаки, шпатлевки</a></ul>
                            <ul className="header__nav-item header__nav-item_mobile" onClick={onClickBurger}>
                                <a className='header__link header__link_mobile' href='#about'>О нас</a></ul>
                        </li>
                    </nav>
                </>
            ) : (
                <nav className="header__nav">
                <li className="header__nav-list">
                    <ul className="header__nav-item">
                        <a className='header__link' href='#raw'>Сырье</a></ul>
                    <ul className="header__nav-item">
                        <a className='header__link' href='#prep'>Подготовка основания</a></ul>
                    <ul className="header__nav-item">
                        <a className='header__link' href='#glue'>Клей для паркета</a></ul>
                    <ul className="header__nav-item">
                        <a className='header__link' href='#cover'>Грунтовки, лаки, шпатлевки</a></ul>
                    <ul className="header__nav-item">
                        <a className='header__link' href='#about'>О нас</a></ul>
                </li>
                </nav>
            )}
            
        </header>
    )
}