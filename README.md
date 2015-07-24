# Cornell CLI

So it's like Cornell info on your Terminal. 

## Install

If you have node.js: 

    npm install -g cornell

If you dont have node.js:

    curl https://raw.githubusercontent.com/mrkev/cornell/master/lib/install.sh | bash

If the you don't have node and the above failed or the idea of piping curl to bash freaks you out:

1. Install node.js or io.js (you sholud give nvm a shot).
2. Install `npm install -g cornell`.

If you're old-school, really bored, or masochist,

    git clone http://github.com/mrkev/cornell
    cd cornell
    npm link

Else if you think `npm` thing is just a fad the kids play with these days

    git clone http://github.com/mrkev/cornell
    cd cornell/bin

... and idk. Add this to your `$PATH` but tbh I hope you didn't even make it this far down this README.

## Usage 
 - `cornell --help` - Always a good idea 
 - `cornell eat` - Let's you pick a hall, view the menu.
 - `cornell eat okies` - Okenshields' menu.
 - `cornell class mexico` - Search roster for classes containing "mexico".
 - `cornell class -s CS compilers` - Search CS classes containing compilers.
