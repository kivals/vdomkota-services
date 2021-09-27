import { CreateCatDto } from '../../cat/dto/create-cat.dto';

export const generateCats = (): CreateCatDto[] => {
  return [
    {
      alias: 'Leo',
      info: `Красавчик Лео! Ну посмотрите, какой вырос красавчик!❤<br> Кому такого в дом?😉<br><br> История Лео: котик попал в приют в маленьком возрасте, 3-4 месяца. Лео и его сестру Кейт вытащили из подвала, когда погибла их мама-кошка, ее сбила машина и малыши остались одни. Дикарята долго привыкали к людям, не доверяли, боялись, Кейт до сих пор не дает себя гладить, но Лео… Лео очень быстро доверился куратору и ему очень понравилось, что с ним играют, его гладят и ласкают, ему дают вкусняшки и оказывают всякое внимание.<br><br> Сейчас Лео уже один год, он довольно крупный кот, очень ласковый, любит ручки, игривый, активный. В новом доме скорее всего будет первое время бояться, но надо дать ему время и он начнет доверять и допускать поглаживания своего мягкого пузика и симпатичной мордочки. Кастрирован, к лотку приучен. Отлично ладит с другими котиками!<br><br> По вопросам укотовления:<br><br> Tel: +79533269886 Елена (куратор)<br><br> ВАЖНО! Все животные приюта пристраиваются СТРОГО по Договору ответственного содержания и ненавязчивого отслеживания дальнейшей жизни кота! Надеемся на ваше понимание!`,
      name: 'Лео',
      shelterPutDate: new Date(),
      age: 21,
      hasHome: false,
      characteristics: [
        { alias: 'vaccinations', name: 'Вакцины', value: 'от того и от этого' },
        { alias: 'neutered', name: 'Кастрирован/Стерилизована', value: 'true' },
      ],
    },
    {
      alias: 'Marpha',
      info: 'Марфа c новыми фотками!🎊<br> Марфа - это забавная кошечка-подросток!😻<br> Веселая, компанейская, игривая, общительная, разговорчивая, человеколюбивая, ласковая и очень ручная! Просто супер кошка! Обратите на нее внимание и сделайте домашней!🙏<br><br>  Марфа обработана от паразитов, стерилизована, приучена к лотку.<br> Возраст - около 1 года.<br><br>  Если Вам приглянулась девочка, то связаться с ее куратором можно так:<br> Tel: +79533269886 Елена (куратор)<br><br><br>  ВАЖНО! Все животные приюта пристраиваются СТРОГО по Договору ответственного содержания и ненавязчивого отслеживания дальнейшей жизни кота! Надеемся на ваше понимание!',
      name: 'Марфа',
      shelterPutDate: new Date(),
      age: 4,
      characteristics: [
        { alias: 'vaccinations', name: 'Вакцины', value: 'от того и от этого' },
        { alias: 'neutered', name: 'Кастрирован/Стерилизована', value: 'true' },
        { alias: 'hiddenInfections', name: 'Скрытые инфекции', value: 'нет' },
      ],
    },
    {
      alias: 'Marpha',
      info: 'Лапка с новыми фотками!🎊<br> Миниатюрная Лапка попала в приют с улицы уже беременной. Маленькая ручная киска, которая тянулась к людям - было понятно, что она бывшедомашняя. Лапку стерилизовали, обработали от паразитов, на лоток ходила с первых дней. Малышка больше месяца привыкала быть в приюте среди других котиков, ей было некомфортно, она всех боялась. Сейчас она уже привыкла и была замечена бегающей с игрушкой, а играющая кошка - лучший показатель хорошего здоровья и настроения!<br><br>  Лапка очень человеколюбивая, ласковая, игривая, веселая и мурчащая кошка! Малышке очень нужен дом!<br><br>  Если Вам приглянулась девочка, то связаться с ее куратором можно так:<br> Tel: +79533269886 Елена (куратор)<br><br><br>  ВАЖНО! Все животные приюта пристраиваются СТРОГО по Договору ответственного содержания и ненавязчивого отслеживания дальнейшей жизни кота! Надеемся на ваше понимание!',
      name: 'Марфа',
      shelterPutDate: new Date(),
      age: 14,
      characteristics: [
        { alias: 'neutered', name: 'Кастрирован/Стерилизована', value: 'true' },
        { alias: 'hiddenInfections', name: 'Скрытые инфекции', value: 'нет' },
      ],
    },
    {
      alias: 'Phinik',
      info: 'Всеобщий любимчик - Финик с пиарными фотками!🎊😻<br> Финик - это кот, о котором должны мечтать все! Он настолько отдается людям, настолько весь человечный, хочет быть любимым и сам хочет любить! Тому, кто возьмет Финика в семью - очень повезет, поверьте! Таких котов как он можно держать 10 штук и тебе их будет мало!<br><br>  Финик - бывшедомашний очень ласковый и ручной кот, сразу же в приюте сходил в туалет на лоток, видимо был приучен. Как оказался на улице? За что? Непонятно… Как и многие другие его сородичи - видимо стал неудобным.<br><br>  Кот прошел карантин, вылечился от блох и глистов, кастрирован.<br><br>  Ищем таких же котолюбивых хозяев для этого зеленоглазого чуда!🙏<br> Репосты плиз!😉<br><br>  По вопросам укотовления:<br> Tel: +79533269886 Елена (куратор)<br><br>  ВАЖНО! Все животные приюта пристраиваются СТРОГО по Договору ответственного содержания и ненавязчивого отслеживания дальнейшей жизни кота! Надеемся на ваше понимание!',
      name: 'Финик',
      shelterPutDate: new Date(),
      age: 17,
      characteristics: [
        { alias: 'neutered', name: 'Кастрирован/Стерилизована', value: 'true' },
        { alias: 'hiddenInfections', name: 'Скрытые инфекции', value: 'нет' },
      ],
    },
  ];
};

export const generatePhotos = () => {
  return [
    {
      path: '/Lapka/lapka-1.webp',
      isDeleted: false,
    },
  ];
};
