This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm i` && `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### Задание

Необходимо сверстать адаптивную страницу со списком фотографий.​

При клике на фотографии открывается модальное окно с фотографией, списком комментариев и формой добавления комментариев.​

Список ручек:

GET https://boiling-refuge-66454.herokuapp.com/images - получение списка фотографий.
GET https://boiling-refuge-66454.herokuapp.com/images/:imageId - получения большого изображения и списка комментариев.
POST https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments - добавление комментария.
​Дизайн можно найти [тут](https://www.figma.com/file/3VP0QDK3kjdfbkj8TRrtsx/Test-task).​

Мы оценим если:

приложение будет работать локально после npm i && npm run start;
приложение написано на React;
не используются внешние компоненты, например, модальное окно;
учтен UX.
