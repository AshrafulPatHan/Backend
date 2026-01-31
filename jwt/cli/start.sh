#!/bin/bash

echo -e "\033[1;32mInstalling npm package : \033[0m"
npm i

echo -e "\033[0;34mServer start : \033[0m"
node ../server.js
