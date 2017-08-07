# Suas Monitor

![Screenshot](/misc/logo.png?raw=true)

Suas Monitor is a cross-platform desktop application that helps visualizing and debugging the state and actions of apps built with [Suas](https://suaswebsite). Check this [video for a demo](https://www.youtube.com/watch?v=fvblSw8tG3k)

![Screenshot](/misc/screenshot.png?raw=true)

Check how you can start using `Suas` in your apps:
- [Suas iOS](https://github.com/zendesk/Suas-iOS) (and [Suas Monitor Middleware for iOS](https://github.com/zendesk/Suas-iOS-Monitor-Middleware))
- [Suas Android](https://github.com/zendesk/Suas-iOS)

Read more from [Suas Website](https://suaswebsite)

### Installation  

To run the production build
```
npm run build && npm start
```

### Packaging

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

