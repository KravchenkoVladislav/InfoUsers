Тестове завдання front-end/React.js розробника:
 
Створити React/Redux додаток який буде відображати список юзерів взятий з відкритого апі https://randomuser.me/

Максимальна кількість юзерів отриманих від апі = 500.

Необхідно реалізувати пагінацію з можливістю перемикати кількість юзерів на сторінці (10, 50, 100, all), значення по замовчуванню = 50.

Необхідно завантажувати нових юзерів тільки при потребі (наприклад перший запит має завантажити 50 юзерів, при переході на наступну сторінку треба дозавантажити ще 50 і так поки кількість юзерів не досягне максимальної).

Реалізувати сортування.
Сортувати потрібно по таких параметрах:
name
date of birth
city
custom sort
Сортувати потрібно в два напрямки від більшого до меншого і навпаки, окрім “custom sort”.
Опція “custom sort” має дозволяти за допомогою drug and drop змінювати порядок юзерів в списку, за дефолтний порядок взяти той у якому юзери були завантажені.

Реалізувати фільтрацію по: 
cтаті
віку (від - до)
імені.

Реалізувати сторінку юзера в якій має бути можливість змінити дані про нього, або видалити його з загального списку юзерів.

Дизайн сторінок в фігмі: https://www.figma.com/file/6CtZMvk3OVl7k9OV9CTugo/Test-task?node-id=0%3A1
