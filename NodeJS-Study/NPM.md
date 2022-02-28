# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [] Check if we have npm installed `npm -v`
- [] Create our own package
- [] What is package.json file
- [] Using third-party modules
    " npm install <package> "
    " npm i cfonts "
    " npm i cfonts -D " (Create dependencie)
    " npm i cfonts inquirer opn " (install multiple dependencies)
    " npm update " (remap o package.json, one should do this when changing the file manually)
- [] What is node_modules directory
    " in case package-lock-json or folder node_modules is deleted, just run npm install and it will bring them back, because the program's dependencies are already defined in package.json"
- [] What is package-lock.json file
    "The package-lock.json file maintains our dependencies, if our project is already big, it is advised not to delete this file "
- [] Create script to run with npm
- [] Install package globally
    " npm i opn -g " ( the -g makes the installation global)
    " npm root -g " (command to check the location of the node_modules folder by making it global) 
- [] Unistall package
    " npm unistall <package> " (Command to unistall a package)
- [] Change package version
    " npm i moment@1.5.1 " (Command used to change package version)
    " npm outdated " (Show packages and their versions, the one i'm using, the most desired and the last)
    " npm upgrade " (updates all packages to the most desired version [lts], however this update goes to package-lock-json and not to package.json)
    " npm i moment@latest " (Switch to the latest version of the program)