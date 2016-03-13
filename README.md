# AngularJS-Cordova-App

This is the sample cordova app with Angular JS and Bower.

**Commands to install Modules and LIB** 

* First of all you have to setup dependant modules which will help to run and build the project with the help for NPM command.

```sh
    $ npm install
```
    npm will use package.json file to install all modules. 
    After running above command you will see 'node_modules' folder.
 
 * Now we have to install all lib with the use of BOWER. In this sample i have already added bower.json file and to install lib use below command.
 
```sh
    $ bower init
    $ bower install
```
    bower init command will create .bowerrc file with directory property. 
    you can change lib path and also configure proxy.
    bower will download all dependant lib and stored to configured directory.
     
     
**Grunt**
     
    you can find Gruntfile.js in base folder. Grunt is used to test and build the application.
     
**karma**
     
     Used karma + Jasmine to run the unit test cases. 