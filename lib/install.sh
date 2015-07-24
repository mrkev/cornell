#!/bin/bash

is_executable () {
  command -v "$1" >/dev/null 2>&1
}

if ! (is_executable npm && is_executable node); then

  # We are running in OSX, and have no npm. Fix that. We will,
  #   - Make sure .bash_profile exists (required for nvm).
  #   - Install nvm@0.24.1 using their own script
  #   - Reload .bash_profile, now with nvm on $PATH
  #   - Install latest iojs
  #   - Make it the default `node`
  #   - Install cornell globally
  #   - Prompt the user to restart bash. Just because nvm and the .bash_profile
  #     and what not.
  case "$OSTYPE" in
    darwin*)
      touch ~/.bash_profile                                   && \
      curl https://raw.githubusercontent.com/creationix/nvm/v0.24.1/install.sh | bash && \
      echo 'Installing latest iojs...'                        && \
      . ~/.bash_profile                                       && \
      nvm install iojs                                        && \
      nvm alias default iojs                                  && \
      echo 'Installing cornell...'                            && \
      npm install -g cornell                                  && \
      echo ""                                                 && \
      echo "All done! Restart your terminal and your're set!" && \
      echo ""
      exit 1
    ;; 
  esac

  # Haven't tested nvm on Linux, so just install node using a package manarger
  if is_executable apt-get; then
    wget -qO- https://deb.nodesource.com/setup | sudo bash - # Adds NodeSource repository to dpkg
    sudo apt-get install -y nodejs
  elif is_executable yum; then
    curl -sL https://rpm.nodesource.com/setup | bash - # Adds NodeSource repository to yum
    sudo yum install -y nodejs
  elif is_executable emerge; then
    emerge nodejs
  elif is_executable pacman; then
    pacman -S nodejs
  else
    errcho "Couldn't determine OS. Please install NodeJS manually, then run this script again."
    errcho "Visit https://github.com/joyent/node/wiki/installing-node.js-via-package-manager for instructions on how to install NodeJS on your OS."
    exit 1
  fi

  # Next install cornell! If we install from package manager we don't need to
  # restart the terminal.
  echo 'Installing cornell...'                            && \
  npm install -g cornell                                  && \
  exit 1
fi