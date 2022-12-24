# Веб-приложение "Календарь отпусков"

**Github Pages**

https://segodnya.github.io/vacation-calendar/

**Технологии и заимствованный код**

- BEM-based markup and styles;
- [Templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template);
- [Date Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date);
- [Select all DIV text with single mouse click](https://stackoverflow.com/a/72024553/16375377);
- [Smooth scroll to specific div on click](https://stackoverflow.com/a/68811921/16375377);

**Функциональность**

- календарь текущего года отрисовывается на чистом js при загрузке странице;
- объединены циклы рендеринга карточек месяцев и контейнеров дней;
- добавлена форма выбора периода отпуска;
- добавлены кнопки создания и удаления дополнительного отпуска для пользователя;
- добавлены кнопка создания и удаления дополниительных пользователей;
- добавлена возможность редактировать имя пользователя;
- добавлена возможность выбора цвета пользователя перед указанием его отпусков;
- контейнеры выбранных дней отпуска отмечаются знаком точки после нажатия кнопки подтверждения;
- добавлено визуальное отображение пересекающихся отпусков на контейнерах дней;
- добавлен плавный скролл к началу отпуска после подтверждения периода отпуска;
- реализована десктопная грид-раскладка интерфейса с боковой панелью управления;
- добавлено авто-выделение дефолтного значения при вызове функции редактирования имени текущего пользователя или при добавлении нового пользователя;

**TODO**

- валидация полей ввода дат периода отпуска;
- определить выходные дни из JSON-а Минтруда;
- добавить информацию о продолжительности отпуска;
- добавить информацию об общей продолжительности всех отпусков;
- добавить уведомление (на форме) о пересекающихся отпусках;
- добавить поп-ап с информацией об отпусках по клику на выбранном дне;
- добавить случайный выбор цвета при добавлении пользователя;
- добавить глобальный объект USERS с информацией о пользователях (выбранный цвет, имя, периоды отпусков);

**Известные ошибки**

- некорретно отображается пересечения 5 и более отпусков в одной дате на календаре;

**Исправленные ошибки**

- при изменении периода отпуска в форме с календаря не удаляется информация о предыдущем выборе;
- при выборе периода отпуска, захватывающего несколько месяцев, окрашиваются пустые клетки;
- после удаления пользователя из формы не удаляются отметки об отпуске с календаря;
