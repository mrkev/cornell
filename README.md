# Cornell CLI [![Dependencies](https://david-dm.org/mrkev/cornell.png)](https://david-dm.org/mrkev/cornell#info=dependencies)

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
 - `cornell eat` - Let's you pick a hall, view the menu.
 - `cornell eat okies` - Okenshields' menu.
 - `cornell class mexico` - Search roster for classes containing "mexico".
 - `cornell class -s CS compilers` - Search CS classes containing compilers.

## Changelog

### 0.3.0 beta
- Switched to cornell's official API. More info comming soon.
- New feature! Never miss an update. New update notification.


