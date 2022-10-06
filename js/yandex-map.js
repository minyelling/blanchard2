
    (() => {
    ymaps.ready(init);
    function init(){
      const myMap = new ymaps.Map(
        "myMap1",
        {
          center: [55.758468, 37.601088],
          zoom: 14,
          controls: [] /* Убираем элементы управления*/
        },
        {
          suppressMapOpenBlock: true, /* Убираем элементы управления*/
        }
      );

        // // Создание карты.
        // var myMap = new ymaps.Map("myMap1", {
        //     // Координаты центра карты.
        //     // Порядок по умолчанию: «широта, долгота».
        //     // Чтобы не определять координаты центра карты вручную,
        //     // воспользуйтесь инструментом Определение координат.
        //     center: [55.76, 37.64],
        //     // Уровень масштабирования. Допустимые значения:
        //     // от 0 (весь мир) до 19.
        //     zoom: 7
        // });
// Создание геообъекта с типом точка (метка).
var myGeoObject = new ymaps.GeoObject({
  // geometry: {
  //     type: "Point", // тип геометрии - точка
  //     coordinates: [48.8, 2.3] // координаты точки
  // }
});

// var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
//   iconLayout: 'default#image',
//   iconImageHref: 'https://img.icons8.com/office/2x/one-free.png',
//   iconImageSize: [30, 42],
//   iconImageOffset: [-3, -42]
// });

const myPlacemark = new ymaps.Placemark(
  [55.758468, 37.601088],
  {},
  {
    iconLayout: "default#image",
    iconImageHref: "./img/ellipse.png",
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  }
);

// Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark);
       myMap.geoObjects.add(myGeoObject);

    }

  } )();
