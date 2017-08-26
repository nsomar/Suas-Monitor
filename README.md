<p align="center">
<a href="http://imgur.com/a0IkBEX"><img src="http://i.imgur.com/a0IkBEX.png" title="source: imgur.com" /></a>
</p>
<p align="center">
<a href="https://travis-ci.org/zendesk/Suas-Monitor"><img src="https://travis-ci.org/zendesk/Suas-Monitor.svg?branch=master" alt="Build Status" /></a>
<a href="https://raw.githubusercontent.com/zendesk/Suas-iOS/master/LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License" /></a>
<a href="https://gitter.im/SuasArch/Lobby?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge"><img src="https://badges.gitter.im/Join%20Chat.svg" alt="Join the chat at https://gitter.im/SuasArch/Lobby" /></a>
</p>

# Suas Monitor

<p align="center">
<img src="http://i.imgur.com/QsbDsN7.gif" title="source: imgur.com" />
</p>

Suas Monitor is a cross-platform desktop application that helps visualizing and debugging the state and actions of apps built with [Suas](https://suas.readme.io). Check this [video for a demo](https://www.youtube.com/watch?v=fvblSw8tG3k). 

Read more about how to use `Suas Monitor` in your apps at [Suas documentation website](https://suas.readme.io/docs/monitor-middleware-monitor-js).

# What is Suas

[Suas](https://suas.readme.io) is a [unidirectional data flow architecture](https://suas.readme.io/docs/why-unidirectional-architectures) implementation for iOS/macOS/tvOS/watchOS and Android heavily inspired by [Redux](http://redux.js.org). It provides an easy-to-use library that helps to create applications that are consistent, deterministic, and scalable.

Suas focuses on providing good developer experience and tooling such as [customizable logging](https://suas.readme.io/docs/logging-in-suas) and [state changes monitoring](https://suas.readme.io/docs/monitor-middleware-monitor-js).

Suas can be found on GitHub:
- [Suas iOS](https://github.com/zendesk/Suas-iOS) (and [Suas Monitor Middleware for iOS](https://github.com/zendesk/Suas-iOS-Monitor-Middleware))
- [Suas Android](https://github.com/zendesk/Suas-iOS)

Join our [gitter chat channel](https://gitter.im/SuasArch/Lobby) for any questions. Or check [Suas documentatation website](https://suas.readme.io).

# Installing Suas

Suas Monitor can be used on macOS, windows and linux. At the moment we provide pre-built binaries for macOS only.
To Install it on Windows and Linux you can [build it from source](#building-from-source).

macOS prebuilt binary can be found on [GitHub release page](https://github.com/zendesk/Suas-Monitor/releases).

You can also install it using [Homebrew](https://brew.sh):

```
brew tap zendesk/suas
brew cask install suas-monitor
```

# Building from source

Install the dependencies using npm:

```
npm install
```

To run it in development mode, use:

```
npm run dev
```

And to built it in production:

```
npm run build && npm start
```

# Packaging

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

# Where to go next

To get more information about Suas:
- Head to [Suas website](https://suas.readme.io/docs) for more in-depth knowledge about how to use Suas.
- Check the [Suas API refrerence](https://zendesk.github.io/Suas-iOS/).
- Read through how to use Suas by checking [some examples built with Suas](https://suas.readme.io/docs/list-of-examples).
- Join the conversation on [Suas gitter channel](https://gitter.im/SuasArch/Lobby) or get in touch with the [people behind Suas](https://suas.readme.io/docs/contact-us).

# Contributing

We love any sort of contribution. From changing the internals of how Suas works, changing Suas methods and public API, changing readmes and [documentation topics](https://suas.readme.io). 

Feel free to suggest changes on the GitHub repos or directly [in Saus gitter channel](https://gitter.im/SuasArch/Lobby).

For reference check our [contributing](https://suas.readme.io/docs/contributing) guidelines.


# Contact us

Join our [gitter channel](https://gitter.im/SuasArch/Lobby) to talk to other Suas developers.

For any question, suggestion, or just to say hi, you can find the core team on twitter:

- [Omar Abdelhafith](https://twitter.com/ifnottrue) 
- [Sebastian Chlan](https://twitter.com/sebchlan) 
- [Steven Diviney](https://twitter.com/DivoDivenson) 
- [Giacomo Rebonato](https://twitter.com/GiacomoRebonato)
- [Elvis Porebski](https://twitter.com/eepdev) 
- [Vitor Nunes](https://twitter.com/@vitornovictor)

# Suas future

To help craft Suas future releases, join us on [gitter channel](https://gitter.im/SuasArch/Lobby).

# Copyright and license

```
Copyright 2017 Zendesk, Inc.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
```
