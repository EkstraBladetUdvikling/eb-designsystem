# EB Designsystem

## Table Of Content

- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Installing](#installing)
- [Developing](#developing)
- [Deployment](#deployment)
- [Snippets](#snippets)

## Getting Started

### Dependencies

Jekyll: `gem install bundler jekyll`

### Installing

```shell
bundle install
yarn install
```

## Developing

`yarn start`

## Deployment

1.  Create a branch with all your changes
2.  Submit a Pull Request on github and get it approved by someone else in the frontend team
3.  Merge your branch into master :rocket:

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
