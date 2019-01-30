ymaps.ready(init);
function init(){
  var Map1 = new ymaps.Map("map-1", {
    center: [55.685107, 37.736375],
    zoom: 14
  });
  var Placemark1 = new ymaps.Placemark([55.685107, 37.736375], {
    hintContent: 'Москва «Центр»',
    balloonContent: 'Центральный офис продаж в Москве 109387, ул. Люблинская, д. 42, офис 229'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/about/mapPlacemark.png',
    // Размеры метки.
    iconImageSize: [86, 122],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-43, -122]
    // preset: 'islands#redDotIcon'
  });

  Map1.geoObjects.add(Placemark1);
  Map1.behaviors.disable('scrollZoom','drag');


  var Map2 = new ymaps.Map("map-2", {
    center: [55.816728, 37.647352],
    zoom: 14
  });
  var Placemark2 = new ymaps.Placemark([55.816728, 37.647352], {
    hintContent: 'Москва «ВВЦ»',
    balloonContent: 'Офис продаж в Москве у станции метро ВДНХ 129164, ул. Ярославская, д. 8, к. 6, офис 325'
}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/about/mapPlacemark.png',
    iconImageSize: [86, 122],
    iconImageOffset: [-43, -122]
  });

  Map2.geoObjects.add(Placemark2);
  Map2.behaviors.disable('scrollZoom','drag');


  var Map3 = new ymaps.Map("map-3", {
    center: [55.681651, 37.888450],
    zoom: 14
  });
  var Placemark3 = new ymaps.Placemark([55.681651, 37.888450], {
    hintContent: 'Люберцы',
    balloonContent: 'Офис продаж в Люберцах 140000, ул. Красная, д. 1, офис 505'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/about/mapPlacemark.png',
    iconImageSize: [86, 122],
    iconImageOffset: [-43, -122]
  });

  Map3.geoObjects.add(Placemark3);
  Map3.behaviors.disable('scrollZoom','drag');


  var Map4 = new ymaps.Map("map-4", {
    center: [56.300050, 38.150758],
    zoom: 14
  });
  var Placemark4 = new ymaps.Placemark([56.300050, 38.150758], {
    hintContent: 'Сергиев Посад',
    balloonContent: 'Офис продаж в Сергиевом Посаде 141313, ул. Институтская, д. 10 А '
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/about/mapPlacemark.png',
    iconImageSize: [86, 122],
    iconImageOffset: [-43, -122]
  });

  Map4.geoObjects.add(Placemark4);
  Map4.behaviors.disable('scrollZoom','drag');


  var Map5 = new ymaps.Map("map-5", {
    center: [59.915720, 30.306265],
    zoom: 14
  });
  var Placemark5 = new ymaps.Placemark([59.915720, 30.306265], {
    hintContent: 'Санкт-Петербург',
    balloonContent: 'Офис продаж в Санкт-Петербурге 190005, Измайловский пр., д. 9/2 А, офис 7'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/about/mapPlacemark.png',
    iconImageSize: [86, 122],
    iconImageOffset: [-43, -122]
  });

  Map5.geoObjects.add(Placemark5);
  Map5.behaviors.disable('scrollZoom','drag');
}