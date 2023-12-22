import './Goods.css';
import { Cover, Glue, Preparation } from '../utils/products';
import Card from './Card/Card';

export default function Goods() {
    return (
        <section className='goods'>
            <h2 className="goods__title">Паркетная химия</h2>
            <h3 className='goods__group-title'>Подготовка основания</h3>
            <ul className='goods__group' id='prep'>
                {Preparation.map(({id, ...rest}) => (
                                <Card
                                    key={id}
                                    {...rest}
                                />
                            ))}
            </ul>
            <h3 className='goods__group-title'>Клей для паркета</h3>
            <ul className='goods__group' id='glue'>
                {Glue.map(({id, ...rest}) => (
                                <Card
                                    key={id}
                                    {...rest}
                                />
                            ))}
            </ul>
            <h3 className='goods__group-title'>Грунтовки, лаки, шпатлевки</h3>
            <ul className='goods__group' id='cover'>
                {Cover.map(({id, ...rest}) => (
                                <Card
                                    key={id}
                                    {...rest}
                                />
                            ))}
            </ul>
        </section>
    )
}