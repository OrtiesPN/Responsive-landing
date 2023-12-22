import Button from './Button/Button'
import Carousel from './Carousel/Carousel'
import oilDrums from '../images/oil_drums.jpg';
import oilTanks from '../images/ibc-tank.png';
import indiaFlag from '../images/lq_india.jpg';
import safetyPassportOil from '../files/MSDS-safety-pass_light.pdf';
import specificationOil from '../files/COA22-23_light.pdf';
import './Rawmat.css'
import { useState } from 'react';

export default function Rawmat() {
    const [option, setOption] = useState(1);

    function toggleOption() {
        if (option === 1) {
            setOption(2)
        } else if (option === 2) {
            setOption(1)
        }
    }

    return (
        <section className="rawmat">
            <h2 className="rawmat__title" id='raw'>Сырьё</h2>
            <div className='rawmat__option-block'>
                <button
                    className={`rawmat__option ${option === 1 ? "rawmat__option_active" : ""}`}
                    type='button'
                    onClick={toggleOption}
                    disabled={option === 1 ? true : false}
                >Касторовое масло</button>
                <button
                    className={`rawmat__option ${option === 2 ? "rawmat__option_active" : ""}`}
                    type='button'
                    onClick={toggleOption}
                    disabled={option === 2 ? true : false}
                >Полиол</button>
            </div>
            <article className='rawmat__card'>
            
            <div className='rawmat__card-content'>
                <div className='rawmat__card-images'>
                  <img className='rawmat__card-image' src={oilDrums} alt='Oil drums'/>
                  <img className='rawmat__card-image' src={oilTanks} alt='Oil tanks'/>
                  <img className='rawmat__card-image' src={indiaFlag} alt='India flag'/>
                </div>
                <div className='rawmat__card-text-block'>
                    <p className='rawmat__card-text'>
                    Касторовое масло - растительное масло, получаемое из семян клещевины путём холодного прессования.
                     Касторовое масло не высыхает, не образует плёнку. Мы предлагаем техническое рафинированное масло, FSG (первый специальный сорт) от индийского производителя.
                      Данное масло может быть использовано для получения алкидных и эпоксидных смол, ализаринового масла, энантового альдегида, себациновой и ундециленовой кислот,
                       а так же для получения полиуретанов.
                    </p>
                    <table className='rawmat__card-table'>
                        <tbody>
                            <tr>
                                <th className='rawmat__card-table-header'>Наименование показателей</th>
                                <th className='rawmat__card-table-header'>Результаты анализа</th>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td>Внешний вид</td>
                                <td >Жемчужно-желтая вязкая прозрачная жидкость</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td>Цветность по Ловибонду 5 1/4"</td>
                                <td >Желтый 16,0 Красный 1,6</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Свободные жирные кислоты, %</td>
                                <td >0,7</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Кислотное число</td>
                                <td >1,4</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Число омыления</td>
                                <td >180,33</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Неомыляемые вещества, %</td>
                                <td >0,36</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Гидроксильное число</td>
                                <td >164,55</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Йодное число</td>
                                <td >84,85</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Влага и летучие, %</td>
                                <td >0,13</td>
                            </tr>
                            <tr className='rawmat__card-table-raw'>
                                <td >Растворимость</td>
                                <td >Растворимо в спирте, смеси эфира и спирта</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='rawmat__card-button-block'>
                        <Button type="file" title="Паспорт безопасности" fileLink={safetyPassportOil} />
                        <Button type="file" title="Качественные показатели" fileLink={specificationOil} />
                    </div>
                </div>
            </div>
        </article>
        </section>
    )
}