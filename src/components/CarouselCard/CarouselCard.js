import Button from '../Button/Button';
import './CarouselCard.css';

export default function CarouselCard(props) {
    return(
        <article className='carousel-card'>
            
            <h3 className='carousel-card__title'>{props.title}</h3>
            <div className='carousel-card__content'>
                <div className='carousel-card__images-block'>
                    
                </div>
                <div className='carousel-card__text-block'>
                    <p className='carousel-card__text'>

                    </p>
                    <table className='carousel-card__table'>

                    </table>
                    <div className='carousel-card__button-block'>
                        <Button type="file" />
                        <Button type="file" />
                    </div>
                </div>
            </div>
        </article>
    )
}