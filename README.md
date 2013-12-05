This is a packaged version of OMeta-JS for NodeJS. The original version has been done by Alessandro Warth, https://github.com/alexwarth/ometa-js. This version kept only the core files needed to compile an OMeta Grammar to its JavaScript equivalent. It provides an executable, ometac, to compile OMeta Grammar files from the commandline.

No support for using the code as a library has been done yet.

# Installation

It is available as a node package directly from its github repository:
    $ npm install https://github.com/elavoie/ometa-js

# Compiling an OMeta Grammar

Usage:
    ometac FILE [OPTIONS]
Options:
    -h (show help)
    -o FILE (output file path)

By default, the output is sent to the standard output:
    $ ometac grammar.txt 

Otherwise an output file can be specified:
    $ ometac grammar.txt -o out.js 
