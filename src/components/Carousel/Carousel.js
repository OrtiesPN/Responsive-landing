import './Carousel.css';

export default function Carousel(props) {
    return(
        <div className='carousel'>
            <button className="carousel__left">&lt;</button>
            <div className='carousel__content'>
                {props.children}
            </div>
            <button className="carousel__right">&gt;</button>
        </div>
    )
}