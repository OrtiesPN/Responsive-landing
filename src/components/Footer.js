import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <p className='footer__company'>ИТАПОЛ</p>
                <address className='footer__contacts'>
                    <a href='mailto:itapol@yandex.ru' className='footer__email'>itapol@yandex.ru</a>
                    <a href='tel:+79035095922' className='footer__tel'>+7(903)509-59-22</a>
                    <span className='footer__address'>Каширский проезд, д.17, стр.4. Москва, РФ</span>
                </address>
            </div>
            <p className='footer__copyright'>© {new Date().getFullYear()} ИТАПОЛ: ООО "ИНРИТА"</p>
        </footer>
    )
}