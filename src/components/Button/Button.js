import './Button.css';

export default function Button({type, title, fileLink}) {
    return {
        promo : (
            <button className='button button__promo' type='button'>{title}</button>),
        file : (
            <a className='button button__file' href={fileLink} download>
                <span className='button__title'>{title}</span>
            </a>),
    }[type];
}