# Generating newest version of LabelThem source files for Yandex.Toloka

## Introduction

This guide will walk you through the process of generation of the newest version of *LabelThem* source files, needed
to run the system on Yandex Toloka crowdsourcing platform.

## System prerequisites

In order to get started, you'll need to install [NodeJS runtime](https://nodejs.org/en/),
[Bower package manager](https://bower.io/#install-bower)
and [Grunt's command line interface (CLI)](https://gruntjs.com/getting-started) globally.
You may need to use `sudo` (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

## Retrieving LabelThem source code

In order to have the code of the project on your machine you need to clone the repository and switch to the branch
`develop-toloka`.
You may use [git version control system](https://git-scm.com/downloads) via terminal (command shell on Windows) or
[some GUI tool](https://git-scm.com/downloads/guis) to achieve this.

In the example we will show how to achieve this result with git using terminal (command shell on Windows).
1) Create a new directory (folder), or chose an existing empty one for storing *LabelThem* source files.
(In this example we assume that [absolute path](https://en.wikipedia.org/wiki/Path_(computing))
to the selected directory is `/home/LT/Projects/LabelThem`)
2) Open a terminal and change current directory to the selected one by executing
`cd <absolute address of the selected directory>` command (e.g. `cd /home/LT/Projects/LabelThem`)
3) Clone *LabelThem* source files repository to the selected directory by executing
`git clone https://github.com/innosoft-pro/label-them.git` command
4) Switch to the `develop-toloka` branch, which contains latest version of *LabelThem* system source code,
configure to work on Yandex Toloka crowdsourcing platform.
It may be done by executing `git checkout develop-toloka` command
5) Now the latest version of *LabelThem* system source code, configured to work on Yandex Toloka crowdsourcing platform,
is available in the directory which you have selected on step 1.

## Generating source files for Yandex.Toloka

In order to generate source files needed to run the system on Yandex Toloka crowdsourcing platform you need to
[open a directory, which contains *LabelThem* system source code, configured to work on Yandex Toloka
crowdsourcing platform, in a terminal (command shell on Windows)](#retrieving-source-files),
and execute the following commands:
1) `bower update` // to download libraries used by the system
2) `npm install grunt-contrib-cssmin --save-dev` // to install css minification plugin
3) `npm update` // to install all the pre-defined dependencies (plugins) by going through the package.json file
4) `grunt` // to generate source files needed to run the system on Yandex Toloka crowdsourcing platform
(to build systems minified and concatenated file)

The source files that are needed to run the system on Yandex Toloka crowdsourcing platform are:
1) `/front/main.html`
2) `/build/app.js`
3) `/build/css/concat.min.css`