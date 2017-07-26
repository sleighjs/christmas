# Sleigh Framework

[![npm](https://img.shields.io/npm/v/npm.svg)]([![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/sleigh))
[![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/sleigh)

### Prerequisites

To scaffold your next Sleigh app, you need to have installed sleigh-cli tool in your system. To do that just run the following command

```
npm install -g sleigh-cli
```

** Note: If you already have installed sleigh-cli, continue to the next step**

### Installing

To install a new sleigh app, follow the next steps

Scaffold a new sleigh app
```
sleigh new <name-of-the-app>
```

Change directory into the app
```
cd <name-of-the-app>
```

Create (or copy) a .env file based on the .env.example file
```
cp .env.example .env
```

Run the app
```
npm run serve
```

## Built With

* [Express](https://github.com/expressjs/express) - Server
* [Handlebars](https://github.com/nodegit/nodegit) - Template Engine

## Contributing

Please read [CONTRIBUTING.md](https://github.com/sleigh/sleigh-cli/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Apostolos Siokas** - *Initial work* - [Sleigh](https://github.com/siokas)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details