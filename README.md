# Cornell CLI [![Dependencies](https://david-dm.org/mrkev/cornell.png)](https://david-dm.org/mrkev/cornell#info=dependencies)

![gif 🙌](http://67.media.tumblr.com/f8af6c517acb37cda749d93b27a3cbaa/tumblr_nrz9hhevIZ1t86pqso1_1280.gif)

So it's like Cornell info on your Terminal. 

## Install

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

## Changelog

### 1.0.0
- Switched to cornell's official dinning JSON!
- Never miss an update. New update notification.

