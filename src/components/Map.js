import './Map.css';
import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps';

export default function MapSection() {
    return(
        <section className='map'>
            <p className='map__caption'>Каширский проезд, д.17, стр.4. Москва, РФ. Въезд на территорию через д.17, стр.3</p>
            <YMaps>
                    <Map className='map__element' defaultState={{ center: [55.656258290719656,37.630035153941705], zoom: 16, controls: ["zoomControl", "fullscreenControl"], }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            geometry={[55.656258290719656,37.630035153941705]}
                            options={{
                                preset: 'islands#orangeDotIcon'
                            }}  
                            properties={{
                                balloonContentBody:
                                  "ИТАПОЛ: ООО \"ИНРИТА\". Каширский проезд, д.17, стр.4. Москва, РФ",}}
                            />
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            geometry={[55.656697, 37.624220]}
                            options={{
                                preset: 'islands#lightBlueCircleDotIcon'
                            }}
                            properties={{
                                balloonContentBody:
                                  "Въезд на территорию. Каширский проезд, д.17, стр.3. Москва, РФ",}}
                            />
                        <Polyline
      geometry={[
        [55.656566, 37.624442],
        [55.656306, 37.625836],
        [55.656356, 37.626251],
        [55.655882, 37.629550],
        [55.656514, 37.629909],
      ]}
      options={{
        balloonCloseButton: false,
        strokeColor: "#000",
        strokeWidth: 4,
        strokeOpacity: 0.5,
      }}
    />
                    </Map>
            </YMaps>
        </section>
    )
}

