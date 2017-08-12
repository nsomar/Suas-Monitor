# Suas Monitor

![Screenshot](/misc/logo.png?raw=true)

[![Build Status](https://travis-ci.com/zendesk/Suas-Monitor.svg?token=iTfSE3QQamPUFfPk3VRD&branch=master)](https://travis-ci.com/zendesk/Suas-Monitor)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://raw.githubusercontent.com/zendesk/Suas-Monitor/master/LICENSE?token=AIff-ulIVSOIggwhz1xa9Iu_tLZ1gvcbks5ZlwIewA%3D%3D)
[![Join the chat at https://gitter.im/SuasArch/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SuasArch/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Suas Monitor is a cross-platform desktop application that helps visualizing and debugging the state and actions of apps built with [Suas](https://suaswebsite). Check this [video for a demo](https://www.youtube.com/watch?v=fvblSw8tG3k)

![Screenshot](/misc/screenshot.png?raw=true)

Check how you can start using `Suas` in your apps:
- [Suas iOS](https://github.com/zendesk/Suas-iOS) (and [Suas Monitor Middleware for iOS](https://github.com/zendesk/Suas-iOS-Monitor-Middleware))
- [Suas Android](https://github.com/zendesk/Suas-iOS)

Read more from [Suas Website](https://suaswebsite)

### Running  

To run the development build

```
npm i
npm run deb
```

To run the production build

```
npm run build && npm start
```

### Packaging

Make sure you have npm version 5.2 (version 5.3 has a problem when packaging).

Prerequisite On Mac, Make sure you have wine:

```
brew cask install xquartz
brew install wine
```

Scripts:

Package mac app
```
npm run package-mac
```

Package mac app and zip it
```
npm run package-mac-zip
```

Package a windows app
```
npm run package-win-32
npm run package-win-64
```

Package a linux app
```
npm run package-linux-32
npm run package-linux-64
```

Package all versions
```
npm run package
```
