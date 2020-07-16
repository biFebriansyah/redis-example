# redis-example

redis-example is a simple API, build with express and node js. and this app has implement caching with redis

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) to install this app.

```bash
yarn install
```

## Usage

1. first you need to edit .env file
```sh
PORT = 9191
REDISPORT = 6379
REDISHOST = YOURE-REDIS-HOST-HERE  <-- (1)
REDISTPASS = YOURE-REDIS-PASS-HERE <-- (2)
```

2. run app with node packge manager ([npm](https://www.npmjs.com/package/download))

```sh
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
