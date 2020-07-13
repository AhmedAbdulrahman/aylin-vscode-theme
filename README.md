# Aylin 🌌
Aylin is a modern and minimal VS Code dark theme with bright colors. The theme is based on the great theme [Ayu theme](https://github.com/ayu-theme/vscode-ayu). See Credits for a detailed lineage.

## Installation
1.  Install [Visual Studio Code](https://code.visualstudio.com/)
2.  Launch Visual Studio Code
3.  Choose **Extensions** from menu
4.  Search for `aylin`
5.  Click **Install** to install it
6.  Click **Reload** to reload the Code
7.  From the menu bar click: Code > Preferences > Color Theme > **Aylin**

## How do I enable the glow seen in the screenshot?
Install [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) which allows you to load custom CSS and JS. Please carefully read the ReadMe regarding permission for that extension before continuing with this installation.

Locate [`aylin.css`](https://github.com/AhmedAbdulrahman/aylin-vscode-theme/blob/master/aylin.css) either in this extension's VS code install directory, or [directly from the github repo](https://github.com/AhmedAbdulrahman/aylin-vscode-theme/blob/master/aylin.css).

Copy CSS file to a location on your machine, such as your `user` folder. Then, copy the file path and add it to your VS code `settings.json`.

On Mac:

```bash
{
  "vscode_custom_css.imports": [
    "file:///Users/{your username}/aylin.css"
    ]
}
```

On Windows:

```bash
{
  "vscode_custom_css.imports": [
    "file:///C:/Users/{your username}/aylin.css"
    ]
}
```

**Important**: Make sure you include the file protocol in the path i.e. `file://`

Then, open your command palette with `Ctrl + Shift + P` or `Shift + ⌘ + P` and choose "Enable custom CSS and JS". It will prompt you to restart, and when you do the lights should be on :)

At this point, VS Code may pop up a message to say that it is corrupted, this is caused by the **Custom CSS & JS extension** and not this theme. As their installation instructions say, you can click "Don't show again" to dismiss the popup.

## Screenshots

#### React
![React](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/react.png)

#### React (with Glow)
![React (with Glow)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/react-glow.png)

#### React (with TypeScript)
![React (with Typescript)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/react-typescript.png)

#### Vue
![Vue](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/vue.png)

#### JavaScript
![JavaScript)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/javscript.png)

#### CSS
![CSS](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/css.png)

#### SCSS
![SCSS](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/scss.png)

#### LESS
![LESS](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/less.png)

#### HTML
![HTML](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/html.png)

#### Python
![Python)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/python.png)

#### Ruby
![Ruby)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/ruby.png)

#### PHP
![PHP)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/php.png)

#### BASH
![BASH)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/bash.png)

#### Dockerfile
![Docker](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/dockerfile.png)

#### Dockerfile (with compose file)
![Docker (with compose file)](https://raw.githubusercontent.com/AhmedAbdulrahman/aylin/master/assets/docker-compose.png)

## Credits
Credit goes to the [Ayu theme](https://github.com/ayu-theme/vscode-ayu). I ended up changing colors and their mappings.

## Recommended Plugins and settings

### Plugins
- [VIM](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) (by [VSCodeVim](https://github.com/VSCodeVim/Vim))
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode) (by [Monokai](https://monokai.pro/))
- [IBM Plex Mono](https://github.com/IBM/plex) (by [IBM](https://github.com/IBM)).
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) (by [Sergii Naumov](https://github.com/sergiirocks)).
- [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize) (by [Kamikillerto](https://github.com/KamiKillertO)).

## License
MIT
