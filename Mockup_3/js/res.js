const icons=new Map([
        ['Пуск', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/Win.png'],
        ['Сеть:ресурс', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (1).ico'],
        ['Power', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (2).ico'],
        ['Logout', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (3).ico'],
        ['Принтер', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (4).ico'],
        ['Корзина', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (5).ico'],
        ['Замок', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (6).ico'],
        ['Старый Пуск', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (7).ico'],
        ['Ключ', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (8).ico'],
        ['Звезда', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (9).ico'],
        ['Экранная клавиатура', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (10).ico'],
        ['Мой компьютер', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (11).ico'],
        ['Задача выполнена', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (12).ico'],
        ['Paint', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (13).ico'],
        ['Назад', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (14).ico'],
        ['Права', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (15).ico'],
        ['Пользователи', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (16).ico'],
        ['Вставить в папку', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (17).ico'],
        ['Калькулятор', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (18).ico'],
        ['Видео', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (19).ico'],
        ['Жесткий диск', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (20).ico'],
        ['Лупа', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (21).ico'],
        ['Задача', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (22).ico'],
        ['Диск', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (23).ico'],
        ['Диск DVD', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (24).ico'],
        ['Музыка', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (25).ico'],
        ['Загрузки', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (26).ico'],
        ['Файл', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (27).ico'],
        ['Файл png', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (28).ico'],
        ['Файл jpg', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (29).ico'],
        ['Файл ico', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (30).ico'],
        ['Файл doc', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (31).ico'],
        ['Файл docx', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (32).ico'],
        ['Файл bimp', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (33).ico'],
        ['Папка', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (34).ico'],
        ['Папка:', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (35).ico'],
        ['Папка:open', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (36).ico'],
        ['Папка:update', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (37).ico'],
        ['Папка:LAN', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (38).ico'],
        ['Папка:MP3', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (39).ico'],
        ['Папка:fonts', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (40).ico'],
        ['Диск MP3', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (41).ico'],
        ['Настройки', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (42).ico'],
        ['Папка:проект html', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (43).ico'],
        ['Файл doc:временный доступ', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (44).ico'],
        ['Принтер:удаленный доступ', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (45).ico'],
        ['Накопитель LAN', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (46).ico'],
        ['Принтер LAN', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (47).ico'],
        ['Принтер МФУ:удаленный доступ', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (48).ico'],
        ['Файл CSV', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (49).ico'],
        ['Накопитель:DVD', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (50).ico'],
        ['Папка:поиск', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (51).ico'],
        ['Папка:access', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (52).ico'],
        ['Накопитель', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (53).ico'],
        ['Папка:write', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (54).ico'],
        ['Папка:tasks', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (55).ico'],
        ['Принтер LAN:удаленный доступ', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (56).ico'],
        ['Диск MP4', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (57).ico'],
        ['XBOX', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (58).ico'],
        ['Принтер:МФУ', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (59).ico'],
        ['Папка:share', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (60).ico'],
        ['Накопитель:VHS', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (61).ico'],
        ['Накопитель:CD', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (62).ico'],
        ['Папка:Изображения', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (63).ico'],
        ['Компьютер:ярлык', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (64).ico'],
        ['Папка:complete', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (65).ico'],
        ['Накопитель:дискета', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (66).ico'],
        ['Папка:Видео', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (67).ico'],
        ['Блокнот', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (68).ico'],
        ['Сеть:connect', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (69).ico'],
        ['Программа', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (70).ico'],
        ['Программа:настройки', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (71).ico'],
        ['Брендмауэр', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (72).ico'],
        ['Плеер', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (73).ico'],
        ['Сеть', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (74).ico'],
        ['Install', 'https://gosha-gavriloff-experience.000webhostapp.com/students/winxp/icons/WindowsXP (75).ico'],

    ]
);

const wheel=new Map([
    ['url("./img/background/nature.jpg")','url("./img/background/space.jpg")'],
    ['url("./img/background/space.jpg")','url("./img/background/tropic.jpg")'],
    ['url("./img/background/tropic.jpg")','url("./img/background/nature.jpg")'],
]);