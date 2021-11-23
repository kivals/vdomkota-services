import { CreateCatDto } from '../../cat/dto/create-cat.dto';
import { PhotoDto } from '../../photo/dto/photo.dto';
import { Types } from 'mongoose';
import { Sex } from '../../cat/cat.model';

// ВАЖЕН! порядок следования котов
export const generateCats = (): CreateCatDto[] => {
  return [
    {
      alias: 'phelix',
      info: `
      ХАРАКТЕР: 😹 Феликс очень человеколюбивый кот! Но он - кот с характером! Что это значит? Это значит, что он - кот-личность, с которой в доме надо считаться! Не беспокоить по пустякам, гладить и играть, когда коту захочется, вкусненько кормить, чтобы получить от него поцелуй!
      <br><br>
      ОСОБЕННОСТИ: Феликс вырос одним котом и ему очень некомфортно жить с другими собратьями, так как он любит доминировать и не хочет никого терпеть на своем пространстве, кроме хозяина. Но в приюте всё таки случилась любовь – с котом Пиратом! Пират – единственный кот, с кем сдружился Феликс и кого он любит и жалеет, поэтому очень надеемся, что коты поедут в одну семью.
      <br><br>
      ИСТОРИЯ КОТА:У Феликса умер хозяин и наследники посчитали нужным выставить кота за дверь вместо того, чтобы принять его вместе с наследством. Феликс пару месяцев жил на улице в кустах, его подкармливали одни люди, а другие грозились отловом и усыплением. Кот все это время находился в шоковом состоянии, сидел на одном месте и не понимал куда ему идти. Однажды его заметила его будущий куратор и скоро Феликс попал в приют.
      `,
      name: 'Феликс',
      order: 1,
      sex: Sex.male,
      isKitten: false,
      shelterPutDate: new Date(),
      age: 36,
      photoLimit: 6,
      hasHome: false,
      characteristics: [
        { alias: 'alias1', name: 'Кастрирован', value: 'да' },
        { alias: 'alias2', name: 'Привит', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'pandora',
      info: `
      ХАРАКТЕР: 😹 Пандора очень скромная киска, человеколюбивая, в приюте ведет себя довольно боязливо, видно, что ей некомфортно жить в большом скоплении других котиков. Возможно кошку раньше обижали, так как к новым людям относится настороженно, но как только понимает, что нет никакой опасности - становится самым ручным и ласковым созданием!
      <br><br>
      ИСТОРИЯ КОШКИ:Кошку нашли на улице брошенную и беременную. Она просто сидела на люке на колодца и плакала. Такое часто бывает в наших краях... Хорошо, что мимо нее не прошли мимо и так кошка оказалась в приюте.
      `,
      name: 'Пандора',
      order: 2,
      sex: Sex.female,
      shelterPutDate: new Date(),
      age: 24,
      hasHome: false,
      photoLimit: 7,
      characteristics: [
        { alias: 'alias1', name: 'Стерилизована', value: 'да' },
        { alias: 'alias2', name: 'Привита', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'fox',
      info: `
      ХАРАКТЕР: 😹 Фокс - это воплощение всего, что можно выразить фразами "рыжий кот", "рыжая наглая моська", "рыжий наглец" - это сгусток всей "рыжей" харизмы, ума и энергии!!! Это любопытство, которое не знает границ! Это ум и хитрость, достойные более высшего по разуму живого существа! Фокс – кот-огонь!
      <br><br>
      Все кто видел его - восхищаются как его внешними данными - мраморный окрас, длинный розовый нос и рыжие глаза в цвет шубки, так и его умственными способностями и энергией!
      <br><br>
      ИСТОРИЯ КОТА: Фокс попал к нам котенком-подростком, его выставили за дверь прошлые хозяева и он жил в подъезде. Одна сердобольная бабушка из этого же подъезда, посадила котенка в коробку, принесла в зоомагазин и оставила там…
      <br>
      Так Фокс попал в приют.
      `,
      name: 'Фокс',
      order: 3,
      sex: Sex.male,
      photoLimit: 8,
      shelterPutDate: new Date(),
      age: 24,
      hasHome: false,
      characteristics: [
        { alias: 'alias1', name: 'Кастрирован', value: 'да' },
        { alias: 'alias2', name: 'Привит', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'dashka',
      info: `
      ХАРАКТЕР: 😹 Дашка очень активная и игривая кошка, а какая она хитрющая и сообразительная - в лучших традициях семейства кошачьих!!! А её мимика покоряет всех!!
      <br><br>
      ИСТОРИЯ КОШКИ: Дашка родилась в квартире от домашней кошки, когда котятам исполнился месяц, они были вынесены в коробке во двор - в декабре-то месяце самое время было избавиться от котят, далее они заболели панлейкопенией, Дашка выкарабкалась уже в приюте, а братик ее нет...
      <br><br>
      В приюте Дашка сначала жила в клетке на карантине и усиленно лечилась, а потом началась нормальная приютская  жизнь в кошачьей стае на выгуле с играми в догонялки и прочими кошачьими шалостями!
      `,
      name: 'Дашка',
      order: 4,
      sex: Sex.female,
      photoLimit: 10,
      shelterPutDate: new Date(),
      age: 12,
      characteristics: [
        { alias: 'alias1', name: 'Стерилизована', value: 'да' },
        { alias: 'alias2', name: 'Привита', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'leo',
      info: `
      ХАРАКТЕР: 😹 Лео – это нежный тигренок! Лео довольно крупный кот, очень дружелюбный и доверчивый, очень ласковый, любит ручки и гладиться, игривый и активный. В новом доме скорее всего будет первое время бояться, но надо дать ему время и он начнет доверять и допускать поглаживания своего мягкого пузика и симпатичной мордочки.
      <br><br>
      ОСОБЕННОСТИ: В настоящее время Лео проходит лечение от FIP (вирусный перитонит кошек).
      <br><br>
      ИСТОРИЯ КОТА: Лео попал в приют в маленьком возрасте, 3-4 месяца. Лео и его сестру Кейт вытащили из подвала, когда погибла их мама-кошка, ее сбила машина и малыши остались одни. Дикарята долго привыкали к людям, не доверяли, боялись, Кейт до сих пор не дает себя гладить, но Лео… Лео очень быстро доверился куратору и ему очень понравилось, что с ним играют, его гладят и ласкают, ему дают вкусняшки и оказывают всякое внимание.
      `,
      name: 'Лео',
      order: 5,
      sex: Sex.male,
      photoLimit: 6,
      shelterPutDate: new Date(),
      age: 24,
      hasHome: false,
      characteristics: [
        { alias: 'alias1', name: 'Кастрирован', value: 'да' },
        { alias: 'alias2', name: 'Привит', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'lapka',
      info: `
      ХАРАКТЕР: 😹 Лапка – это миниатюрная человеколюбивая кошка, ласковая, игривая, веселая и мурчащая!
      <br><br>
      ИСТОРИЯ КОШКИ: Кошка попала в приют с улицы, уже беременной. Маленькая ручная киска, которая тянулась к людям - было понятно, что она бывшедомашняя. Лапку стерилизовали, обработали от паразитов, на лоток ходила с первых дней. Малышка больше месяца привыкала быть в приюте среди других котиков, ей было некомфортно, она всех боялась. Сейчас она привыкла быть в приюте, играет с игрушками и даже с другими котиками, но в целом держится особняком.
      `,
      name: 'Лапка',
      order: 6,
      sex: Sex.female,
      photoLimit: 7,
      shelterPutDate: new Date(),
      age: 24,
      characteristics: [
        { alias: 'alias1', name: 'Стерилизована', value: 'да' },
        { alias: 'alias2', name: 'Привита', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'atom',
      info: `
      ХАРАКТЕР: 😹 Атом - очень общительный, очень активный и игривый кот. Обожает играть как с игрушками, так и с другими котами. Ласковый, человеколюбивый, но на ручках сидеть не любит - предупреждаем сразу.😹
      <br><br>
      ИСТОРИЯ КОТА: Атома взяли котенком по объявлению в съемную квартиру, но хозяйка сильно была против. Тогда его отвезли в комнату в общежитии (в свою или съемную - вот уже не знаем) и оставили там. Приходили раз в несколько дней кормить. Котенок жил один, орал на весь этаж - понятно, он и к людям хотел, и корм заканчивался раньше, чем приходили, и вода…
      <br><br>
      Удалось уговорить хозяйку Атома отдать его в приют на последующее пристройство. Больше она никогда его судьбой не интересовалась.
      `,
      name: 'Атом',
      order: 7,
      sex: Sex.male,
      photoLimit: 10,
      shelterPutDate: new Date(),
      age: 12,
      hasHome: false,
      characteristics: [
        { alias: 'alias1', name: 'Кастрирован', value: 'да' },
        { alias: 'alias2', name: 'Привит', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'dick',
      info: `
      ХАРАКТЕР: 😹 Дикий Дик – был диким котиком, а теперь стал одомашенный! Первое время боялся людей, но быстро понял, что человек – это не всегда опасность, а и источник тепла, вкусняшек и любви! Дик очень общителен с другими котами и кошками, заботливо относится к котятам - идеально будет взять вторым или третьим в семью, но одному ему у Вас тоже будет хорошо!.
      <br><br>
      ИСТОРИЯ КОТА: Дик попал к нам в приют прошлой зимой, в морозы кот жил на дачах, людей боялся, удалось выловить его с помощью котоловки. Боялись, что будет вести себя агрессивно, но Дик быстро привык к людям. Сначала он, конечно, обходил стороной и даже периодически рычал, когда к нему подходили со шваброй в руках при уборке слишком близко…
      <br><br>
      Но кот всё таки понял, что здесь опасность ему не угрожает, что здесь он в тепле, его кормят, его гладят и теперь он очень общительный и человеколюбивый - подходит гладиться при каждом удобном случае и даже дается взять его на ручки и поцеловать в носик!
      `,
      name: 'Дик',
      order: 8,
      sex: Sex.male,
      photoLimit: 6,
      shelterPutDate: new Date(),
      age: 36,
      hasHome: false,
      characteristics: [
        { alias: 'alias1', name: 'Кастрирован', value: 'да' },
        { alias: 'alias2', name: 'Привит', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'pirat',
      info: `
      ХАРАКТЕР: 😹 Пират – это миниатюрный котик-забияка! Друг Феликса, между прочим, которого он единственного из всех котов любит и подпускает к себе. Кличку Пират приобрел по отсутствию одного глазика – таким он попал в приют… Но это не мешает Пиратке быть маленьким кошачьим жуликом и, к тому же, очень ласковым, веселым и умным мальчиком!
      <br><br>
      ОСОБЕННОСТИ: Помимо отсутствия одного глаза, Пират перенёс FIP (вирусный перитонит кошек), прошёл долгое дорогущее лечение и кота удалось спасти. Поэтому пристраивается осторожно, с постоянным наблюдением его здоровья.
      <br><br>
      ИСТОРИЯ КОТА: Пират попал в приют маленьким котенком, было не понятно как он оказался на улице – вроде бы и не домашний, судя по тому, что глаз «съела» инфекция, но и не дикий, как бывает, когда кошки рождаются в подвале и не знают, что такое человек и дом.
      <br><br>     
      Когда Пиратик подрос – ему удалили пустую глазницу, чтобы там не скапливалась пыль и не было постоянных загноений. Казалось бы, все ужасы позади, но через некоторое время Пират начал чувствовать себя плохо и у него диагностировали FIP (вирусный перитонит кошек) – самое страшное заболевание, которое может быть у кошек, потому что еще три года назад это означало смерть. В настоящее время FIP лечится, но лечение стоит очень дорого, длится долго и проходит болезненно для кота. Но мы решили рискнуть, начали лечить и победили!
      <br><br>
      Сейчас Пират полностью здоров, у него идеальные анализы, он активен и игрив, что возможно только тогда, когда животное чувствует себя хорошо!
      `,
      name: 'Пират',
      order: 9,
      sex: Sex.male,
      photoLimit: 9,
      shelterPutDate: new Date(),
      age: 24,
      hasHome: false,
      characteristics: [
        { alias: 'alias1', name: 'Кастрирован', value: 'да' },
        { alias: 'alias2', name: 'Привит', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'rysya',
      info: `
      ХАРАКТЕР: 😹 Рыська – еще котенок, она очень умная, сообразительная кошка и, конечно же, как и все котодети – очень игривая, активная и шилопопая! Рыська любит людей, любит сидеть на ручках, любит комочком свернуться на коленках и тыкаться в ладошку, чтобы ее гладили. 
      <br><br>
      ОСОБЕННОСТИ: У кошки нет хвоста, попала под машину и Рыську чудом удалось спасти. Отсутствие хвоста никак не мешает ей жить и выдавать такие пируэты в играх, что другие коты могут позавидовать.
      <br><br>
      ИСТОРИЯ КОШКИ: История Рыси началась со звонка куратору соседки по даче – котенка сбила машина… Они ее подобрали, но не везли в ветклинику, попросили сделать обезболивающий укол. Куратор сразу же подхватила котенка и повезла в круглосуточную клинику. На осмотре сразу сказали, что сломана лапа и оторван хвост от позвоночника, ткани вокруг хвоста гниют.
      <br><br>
      Утром сделали рентген и записали на операцию. По телу пошли свищи, которые вскрывались и оттуда вытекал гной. Операция была очень сложной – единственный врач в городе взялся ее сделать, в первой клинике говорили, что травма не совместима с жизнью и предложили усыпить. Но мы привыкли бороться до последнего и дали шанс кошке бороться за свою жизнь вместе с нами. 
      <br><br>
      После первой операции на поверхности спины не хватало большого куска кожи, который уже сгнил изнутри… Зрелище было не для слабонервных. Но у Рыси была такая тяга к жизни, что она сразу начала кушать, пить и ходить в туалет. Через несколько дней последовала вторая операция, на которой врач попыталась стянуть остатки кожи и закрыть рану. И Рысе снова повезло – кожа прижилась, со временем затянула рану и даже выросла шерсть!   
      <br><br>
      Сейчас Рыся обычный активный котенок, который ждет своих родителей!
      `,
      name: 'Рыся',
      order: 10,
      sex: Sex.female,
      photoLimit: 6,
      shelterPutDate: new Date(),
      age: 12,
      characteristics: [
        { alias: 'alias1', name: 'Стерилизована', value: 'да' },
        { alias: 'alias2', name: 'Привита', value: 'да' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
    {
      alias: 'tishka',
      info: `
      ХАРАКТЕР: 😹 Милый, ласковый, нежный и добрейший Тишенька! «Усатый нянь» приюта! Его обожают все коты и кошки приюта! Он со всеми дружелюбен, за всеми ухаживает, вылизывает котят, да и взрослых тоже! Все подставляют ему моськи, все его любят! А также он еще и «сладенький пирожочек» и «полосатый батончик» - настолько он милейший кот!
      <br><br>
      НЕ КОТ, А ЗОЛОТО!!!!
      <br><br>
      Вот честно, не понятно, как такой кот мог так долго жить на улице и выжить?
      <br><br>
      ИСТОРИЯ КОТА: Кот из СНТ куратора приюта… Однажды он был замечен с напуганными глазками, затекшими гноем, за забором и ему оставили мисочку еды. На другой день кот пришел еще и так стал приходить несколько раз в день кушать. Когда наступили холода и листья на деревьях опали, он был замечен залезающим в старый дачный дом в чердачное окно у соседей - стало ясно - кот там живет.
      <br><br>
      По Тише было видно, что он очень хочет к человеку домой, в тепло… Ему сделали мостик к окну, чтобы удобно было кормить и заодно приучать к дому. Он приходил, жался к окошку, но стоило его открыть - убегал, очень боялся…
      <br><br>
      Но однажды, когда в прошлом году начались морозы, куратор случайно протянула в открытое окно руку, схватила его за холку и затащила домой. Он, конечно испугался, начал кричать, прыгать на окно… Чудом его удалось посадить в переноску и отвезти в приют!!!!
      <br><br>
      В приюте стало понятно - кот добрейший! На руки не нападает, а уже через неделю стал давать себя гладить и ему это очень нравилось!!! Сразу же началось лечение, обострение, потом еще раз обострение, капельницы каждый день, насильное кормление из шприца, температура под 40 держалась несколько дней…
      <br><br>
      Слава богу, Тишу удалось спасти и вылечить! После карантина его переселили в общую комнату и он проявил себя как «усатый нянь»!
      `,
      name: 'Тишка',
      order: 11,
      sex: Sex.male,
      photoLimit: 6,
      shelterPutDate: new Date(),
      age: 24,
      hasHome: false,
      characteristics: [
        { alias: 'alias1', name: 'Кастрирован', value: 'да' },
        { alias: 'alias2', name: 'Привит', value: 'нет' },
        {
          alias: 'alias3',
          name: 'Анализы на ВЛК и ВИК',
          value: 'отрицательные',
        },
      ],
    },
  ];
};

export const generatePhotos = (catId: string, alias: string, limit = 10): PhotoDto[] => {
  return [...Array(limit)].map((value, index) => ({
    catId: new Types.ObjectId(catId),
    path: `/cats/${alias}/${alias.toLowerCase()}-${index + 1}`,
    isDeleted: false,
    order: index + 1,
    isMain: index + 1 === 1,
  }));
};
