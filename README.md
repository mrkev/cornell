# Cornell CLI

So it's like Cornell info on your Terminal. 

## Install

Cornell hasn't been published to npm yet so the only way to get it is by `npm link` -ing it from source. 

    git clone http://github.com/mrkev/cornell
    cd cornell
    npm link

#### NOTE: EVERYTHING BELLOW DOESN'T WORK YET. WILL WORK BY TIME OF PUBLISHING

If you have node.js: 

    npm install -g cornell

If you dont have node.js:

    curl https://raw.githubusercontent.com/mrkev/cornell/master/lib/install.sh | bash

If the you don't have node and the above failed or the idea of piping curl to bash freaks you out:

1. Install node.js or io.js (you sholud give nvm a shot).
2. Install `npm install -g cornell`.

## Usage

 - `cornell --help`
 - `cornell eat --help`
 - `cornell class --help`

### Examples 

 - `cornell eat` - Let's you pick a hall, view the menu.
 - `cornell eat okies` - Okenshields' menu.
 - `cornell class mexico` - Search roster for classes containing "mexico".
 - `cornell class -s CS compilers` - Search CS classes containing compilers.