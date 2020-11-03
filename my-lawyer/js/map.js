var map;
var marker;
function initMap ()
{
    map = new ymaps.Map("yandexmap", {
        center: [55.566155, 37.478333],
        zoom: 16
    });
    marker = new ymaps.Placemark([55.566155, 37.478333], {
        hintContent: 'Расположение',
        balloonContent: 'Это наша организация'
    });
    map.geoObjects.add(marker);
}
ymaps.ready(initMap);