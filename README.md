# Hitesh Sir Backend Course Practice

## Backend Standard Project file structure

#### Normal Working Files

- .gitkeep : it allow to track
- .gitignore : it exclude file changes track and does not push to github eg .env(environment variable) file

#### Files Required inside src folder

- app.js
- constant.js
- index.js

#### Folders Required inside src folder

- middlewares
- controllers
- db
- routes
- utils
- models

#### External npm lib dependency require (dependency)

- dotenv
- express
- mongoose
- cookie-parser
- cors
- jsonwebtoken (use in login authentication)
- bcrypt (password hashing)
- mongoose-aggregate-paginate-v2 (provide extra nosql methods to perform data operation)
- multer (file upload npm lib)
- cloudinary (3rd party image storage platform)

#### External npm lib Dev dependency require (dev-dependency) which requri only during development not in production

- install command : `npm i -D packageName`
- nodemon
- prettier

Dev Dependency Files (Note It should be install with `-D or --save-dev` becoz it is only used during development phase but not in production)

- Nodemon | (automatically start and stop server to refresh content similar to live server) | command : `npm install --save-dev nodemon `
- Prettier | (code format for all team in backend to make them align on same page) | command : `npm i -D prettier`
  - It require 2 files for code format and rule setting
  - `.prettierrc` & `.prettierignore`

#### .prettierrc file

```
{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"semi": true,
"trailingComma": "es5"
}
```

#### .prettierignore file

```
/.vscode
/node_modules
./dist

*.env
.env
.evn.*
```

#### .env file

```
MONGODB_URI = mongodb+srv://Rahul:<password>@cluster0.ydgrboo.mongodb.net
PORT = 8000
CORS_ORIGIN = *

# JWT TOKENS
ACCESS_TOKEN_SECRET = CHAI-AUR-CODE
ACCESS_TOKEN_EXPIRY = 1D
REFRESH_TOKEN_SECRET = NODE-BACKEND
REFRESH_TOKEN_EXPIRY = 10d

# cloudinary
CLOUDINARY_CLOUD_NAME = dfke2ujtg
CLOUDINARY_API_KEY = 758582698644889
CLOUDINARY_API_SECRET = okpbg_HI9sHdaSE-vbhP4z7fFSw


```

## Models

Youtube Project : [Youtube Project Models](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## View

## Middlewares

## Controllers

## Utils

```
Note

const appHandlers = () => {
  () => {

  }
}

above code short form is below code

const appHandlers = () => () => {}

```
