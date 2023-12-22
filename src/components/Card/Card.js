import Button from '../Button/Button';
import './Card.css';

export default function Card(props) {

    return(
        <li className='card'>
            <img className='card__image' src={props.image} alt={props.alt}/>
                <h4 className='card__name'>{props.name}</h4>
                <a href={props.specs} target='_blank' className='card__specs'></a>
                <p className='card__description'>{props.description}</p>
                {/* <div className='card__button-wrapper'>
                    <Button type='file' fileLink={props.specs} title='Характеристики' />
                </div> */}
        </li>
    )
}