# EB Designsystem

## Table Of Content

- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Installing](#installing)
- [Developing](#developing)
- [Deployment](#deployment)
- [Snippets](#snippets)

## Getting Started

To get your machine ready to work follow this guide

* [Install jekyll](https://jekyllrb.com/docs/installation/macos/)

This will likely get you version 3 or higher of ruby, which is incompatible with dependencies.

To remedy this follow this guide to enable running multiple ruby versions
* [Install rbenv](https://github.com/rbenv/rbenv#installation)

Then install ruby version 2.7.2

```shell
$ rbenv install 2.7.2
```

Now in the root of this project, make the project use the newly install version 2.7.2

```shell
$ rbenv local 2.7.2
$ echo 'export PATH="$HOME/.rbenv/versions/2.7.2/lib/ruby/gems/2.7.0/bin:$PATH"' >> ~/.bash_profile
```

Your .bash_profile should then have these three lines, in the following order

```shell
$ export PATH="/usr/local/opt/ruby/bin:$PATH"
$ export PATH="$HOME/.rbenv/versions/2.7.2/lib/ruby/gems/2.7.0/bin:$PATH"
$ eval "$(rbenv init -)"
```

Then restart your terminal, to make profile changes take effect, running *ruby -v* in the project folder should now give you version 2.7.2

```shell
$ ruby -v
```

If it returns as expected continue

```shell
$ gem install bundler jekyll
$ bundle install
$ yarn install
```

### Dependencies

* node > 14.12.0
* yarn > 1.22.5
* ruby = 2.7.2
* * bundler
* * jekyll

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

4.  run `yarn dist:move` to move code to ekstrabladet project

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
