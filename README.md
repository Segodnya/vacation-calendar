# Веб-приложение "График отпусков"

Когда составляли с ребятами график отпусков на следующий год пришла в голову мысль сделать веб-приложуху для этого удобную, которая будет показывать выбранные пользователями периоды отпусков, пересечения и все такое.

Начал делать. Базовые штуки уже работают, но впереди еще много работы.

Буду признателен за сообщения о найденных ошибках и недоработках, предложения по функциональности и UI/UX, и от звёздочек на репозитории тоже не откажусь. :)

## Обзор

- Github Pages
- Технологии и заимствованный код
- Функциональность
- TODO
- Известные ошибки
- Исправленные ошибки

## **Github Pages**

https://segodnya.github.io/vacation-calendar/

## **Технологии и заимствованный код**

- BEM-based markup and styles;
- [Templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template);
- [Date Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date);
- [Local Storage](https://learn.javascript.ru/localstorage)
- [isDayOff - API производственного календаря](https://www.isdayoff.ru/);
- [Select all DIV text with single mouse click](https://stackoverflow.com/a/72024553/16375377);
- [Smooth scroll to specific div on click](https://stackoverflow.com/a/68811921/16375377);
- [Using regular expression in CSS](https://stackoverflow.com/a/8903451/16375377);
- [JS Detect Safari on iOS devices](https://gist.github.com/carloscabo/0ec69aaa42216c7f12efd861e110cb8b);
- [Set max length for content editable element](https://stackoverflow.com/a/73522979/16375377);

## **Функциональность**

- календарь текущего года отрисовывается на чистом js при загрузке странице;
- добавлена форма выбора периода отпуска;
- добавлены кнопки создания и удаления дополнительного отпуска для пользователя;
- добавлены кнопки создания и удаления дополнительных пользователей;
- добавлена возможность редактировать имя пользователя, в т.ч. автоматический фокус и выделение дефолтного значения при вызове функции редактирования имени текущего пользователя или при добавлении нового пользователя;
- добавлена возможность выбора цвета пользователя перед указанием его отпусков;
- контейнеры выбранных дней отпуска отмечаются знаком точки после нажатия кнопки подтверждения;
- добавлено визуальное отображение пересекающихся отпусков на контейнерах дней;
- добавлен плавный скролл к началу отпуска после подтверждения периода отпуска;
- реализована десктопная грид-раскладка интерфейса с боковой панелью управления;
- добавлен случайный выбор цвета при создании пользователя, в т.ч. проверка цвета для контраста с фоном календаря;
- реализована валидация полей ввода дат периода отпуска (пустые значения, хронологическая проверка дат начала и окончания отпуска);
- добавлено отображение информацию о продолжительности отпуска после подтверждения ввода периода отпуска;
- добавлено отображение информации об общей продолжительности всех отпусков пользователя при вводе и подтверждении информации о новом отпуске;
- добавлен поп-ап с информацией об отпусках по клику на выбранном дне;
- добавлен cursor:pointer для интерактивных элементов;
- реализовано автоматическое определение выходных и праздничных дней на основе isDayOff API);
- добавлена информация о продолжительности отпуска с учетом выходных и праздничных дней в форму отпуска;
- добавлена информация об общей продолжительности всех отпусков пользователя;
- сохранение введенных пользавателем данных между сессиями;
- реализовано авто-скрытие (сворачивание) карточки пользователя, когда она неактивна;
- добавлена кнопка сворачивания формы для пользователя;
- добавлена кнопка сброса введенных данных и очистки календаря;

## **TODO**

- добавить уведомление (на форме) о пересекающихся отпусках;
- добавить глобальный объект USERS с информацией о пользователях (выбранный цвет, имя, периоды отпусков);
- добавлять отпуск прямо на календаре кликнув на начальную и конечную дату;
- добавить отображение кол-ва оставшихся дней отпуска для пользователя;
- реализовать редактирование отпуска, выбирая его в календаре;
- добавить выбор "активного" пользователя для двухцветного отображения пересечений отпусков с кем-либо из команды;
- отображение отпусков в табличном виде (работники - строки, дни - столбцы);
- подсвечивание отпусков пользователя, когда его форма активна;
- переключатель отображения и скрытия индикаторов отпусков на календаре в форме пользователя;
- возможность экспортировать заполненный календарь в PDF;
- возможность экспортировать заполненный каленщдарь в Excel;

## **Известные ошибки**

- есть возможность выбирать пересекающиеся периоды отпусков для одного пользователя;
- иногда пропадает информация об общей продолжительности отпуска пользователя после удаления одного из отпусков;
- валидация в поля ввода периода отпуска срабатывает до введения даты окончания отпуска;
- в поп-апе выходного/праздничного дня отображается информация о том, что все работники на рабочих местах (если в этот день ни у кого нет отпуска);

## **Исправленные ошибки**

- при изменении периода отпуска в форме с календаря не удаляется информация о предыдущем выборе;
- при выборе периода отпуска, захватывающего несколько месяцев, окрашиваются пустые клетки;
- после удаления пользователя из формы не удаляются отметки об отпуске с календаря;
- исправлено отображение пересечения 5 и более отпусков в одной дате на календаре;
- исправлена возможность добавления отпуска продолжительностью 1 день;
- обновление контента в поп-апе теперь корректно работает по событию click;
- отключена возможность переноса строки в поле ввода имени клавишей Enter и добавлена проверка длины строки;
- исправлено отображение индикаторов отпуска на календаре в браузерах на базе webkit (iOS);
