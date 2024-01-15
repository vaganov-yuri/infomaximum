#### Не много о проекте
 - Для создания  легко маштабируемого проекта использовал архитиктуру FSD (Feature-Sliced Design) - https://feature-sliced.design/
 - Для написания стилей воспользовался библиотекой  Emotion - https://emotion.sh/docs/introduction
 - Для поддержания чистоты и единообразия кода услановил eslint - https://eslint.org/ и prettier - https://prettier.io/
 - Для управления состоянием приложения я использовал Redux toolkit - https://redux-toolkit.js.org/
 - Vite в качесте сборщика проекта - https://vitejs.dev/

Некоторые из этих подходов и библиотек (css-in-js, vite, RTKQuery) я использовал впервые, поэтому прошу с пониманием отнестись, если что-то сделал не совсем правильно или оптимально.

Буду рад любой обратной связи и советам по улучшению кода или архитектуры проекта:)
#
#### Установка зависимостей

```bash
yarn
```

или

```bash
npm install
```

---

#### Генерирование типов по GraphQL схеме сервера

Необходимо, чтобы GraphQL сервер был запущен!

```bash
yarn generate
```

или

```bash
npm run generate
```

---

#### Запуск в режиме разработки

```bash
yarn start
```

или

```bash
npm run start
```

---

#### Сборка проекта

```bash
yarn build
```

или

```bash
npm run build
```
