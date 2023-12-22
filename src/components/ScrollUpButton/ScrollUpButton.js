import './ScrollUpButton.css';

export default function ScrollUpButton({isBurgerClicked, showUp}) {

    function scrollUp() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <button className={showUp & !isBurgerClicked ? 'scroll-up-button scroll-up-button_visible' : 'scroll-up-button' } onClick={scrollUp} title='Наверх'></button>
    )
}