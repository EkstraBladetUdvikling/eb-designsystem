# EB Designsystem

## Table Of Content

- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Installing](#installing)
- [Developing](#developing)
- [Deployment](#deployment)
- [Snippets](#snippets)

## Getting Started

EB Designsystem is running on Svelte, go read teh docs for more info: https://svelte.dev/

### Dependencies

* node > 14.12.0
* yarn > 1.22.5

### Installing

```shell
yarn install
```

## Developing

`yarn dev`

## Deployment

1.  Create a branch with all your changes
2.  Submit a Pull Request on github and get it approved by someone else in the frontend team
3.  Merge your branch into master :rocket:
4.  run `yarn build && yarn dist` to build your awesome code
5.  run `yarn dist:move` to move code to ekstrabladet project

## Snippets

There is two VS Code snippet files outputtet from this project.

- eb-designsystem.code-snippets
- - Contains snippets for all css classes, outputs the class to be used on an HTML element
- eb-designsystem-html.code-snippets
- - Contains HTML snippets for chosen components, outputs the HTML for correct usage

To generate an updated version of snippets run

```yarn
yarn build:snippets
```

### Installing snippets

To use generated Visual Studio Code snippets for a project, make sure the Visual Studio Code configuration directory is present (%PROJECTROOT%/.vscode).

If you have this repo checked out on your machine you can run the following

```yarn
yarn installsnippets [PATH_TO_PROJECTROOT]
```

To install in ekstrabladet project:

```yarn
yarn installsnippets:eb
```

Or run following bash commands in project root:

```bash
curl -o .vscode/eb-designsystem.code-snippets https://raw.githubusercontent.com/EkstraBladetUdvikling/eb-designsystem/master/snippets/eb-designsystem.code-snippets
curl -o .vscode/eb-designsystem-html.code-snippets https://raw.githubusercontent.com/EkstraBladetUdvikling/eb-designsystem/master/snippets/eb-designsystem-html.code-snippets
```
