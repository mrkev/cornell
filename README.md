# Cornell CLI [![dependencies Status](https://david-dm.org/mrkev/cornell/status.svg)](https://david-dm.org/mrkev/cornell) [![npm version](https://badge.fury.io/js/cornell.svg)](https://badge.fury.io/js/cornell)

![gif 🙌](https://github.com/mrkev/cornell/raw/gh-pages/images/usage.gif)

So it's like Cornell info on your Terminal.

## Install

NOTE: `cornell` is only compatible with the latest versions of node.js. Make sure you have node 6 installed.

If you have node.js:

    npm install -g cornell

If you dont have node.js:

    curl https://raw.githubusercontent.com/mrkev/cornell/master/lib/install.sh | bash

If the you don't have node and the above failed or the idea of piping curl to bash freaks you out:

1. Install node.js or io.js (I recommend using [nvm](https://github.com/creationix/nvm)).
2. Run `npm install -g cornell`.

If you're old-school, really bored, or masochist,

    git clone http://github.com/mrkev/cornell
    cd cornell
    npm link

Getting updates will tend to suck though.

If you think `npm` is just a fad kids play with these days, and would rather go comando

    git clone http://github.com/mrkev/cornell
    cd cornell/bin

... and idk. Add this to your `$PATH` I guess but tbh I hope you didn't even make it this far plz just use `npm` ty.

## Usage
 - `cornell --help` - Always a good idea
 - `cornell eat --menu` - Lists open halls. Select one for menus.
 - `cornell eat --time okies` - Lists a few days of Okenshields open hours.
 - `cornell class mexico` - Search roster for classes containing "mexico".
 - `cornell class -s CS compilers` - Search CS classes containing compilers.

### A little extra for CS classes

Why bookmark? Don't bookmark. You'll ruin your clean toolbar a e s t h e t i c and using your _mouse_ (!! yike). Those pesky cs websites with syllabi and pset writeups are more easily opened with `cslink <query>`

- `cslink graphics` - Opens the site for Graphics
- `cslink operat` - Opens the site for OS. Search is somewhat fuzzy.
- `cslink hi` - Opens 1110. Idk why apparently that's what matches `¯\_(ツ)_/¯`

## Changelog

### 1.4.0
- Adds `cslink`

### 1.0.0
- Switched to cornell's official dinning JSON!
- Never miss an update. New update notification.

