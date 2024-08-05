import Button from './Button/Button';
import './Promo.css';

export default function Promo() {
    return (
        <section className="promo">
             <div className='promo__title'>
                <h1 className="promo__company">ИНРИТА</h1>
                <p className='promo__about'>ПАРКЕТНАЯ ХИМИЯ</p>
                <address className='promo__contacts'>
                <a href='mailto:itapol@yandex.ru' className='promo__email'>itapol@yandex.ru</a>
                <a href='tel:+79035095922' className='promo__tel'>+7(903)509-59-22</a>
                <span className='promo__address'>Каширский проезд, д.17, стр.4. Москва, РФ</span>
            </address>
             </div>
            {/* <Button type="promo" title="Связаться с нами" /> */}
        </section>
    )
}


{/* <p className="promo__caption">Паркетная химия RECOLL(Италия) и WERT(Россия). Грунтовки, клея и лаки для паркета и фанеры.
             Сырье для производства строительной химии напрямую от изготовителей в Китае и Индии.</p> */}