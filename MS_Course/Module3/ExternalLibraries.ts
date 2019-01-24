/*
Working with external Libraries
Working with JS Libraries

As mentioned in a previous lesson, sometimes in your project you will need to work with some third party libraries that offer some features and 
functionality that you would like to bring into your application. Those libraries when they were first written, TS was not there yet and they were written
in JS. Now, you are in a situation that you would like to use a non TS library in your TS application and get all the beautiful features of TS like typings and
syntax auto complete, ..etc
How to combine or integrate a JS library into a TS application and get all the benefits of developing in TS.

Some examples of the JS libraries that are out there are:
1. Lodash: A modern JS utility library delivering modularity, performance & extras.
2. jQuery: A fast, and rich JS library that makes HTML document traversal and manipulation, event handling, animatin, and Ajax much simpler with an easy-to-use API.
3. D3.js: A JS library for manipulating documents based on data.

Importing a JS library
There are two options ti bring a JS library in your tS project:
1 - Manual download: this is by manually copying some definitions files for the objects used in the JS libraries into your TS project so that TS can recognize and be
able to support the typings. There is a big effort from the TS community to provide those decalaration files for almost all the third party JS libraries out there
for developers to copy and include in their projects without having to rewrite the types themselves. This project is called the definitely typed project.

2 - Using TypeSearch: This will automatically install the definitions files for the imported library. The TS project that is a Microsoft initiative that uses npm
to install the library definition files automatically with no need to manually copy any files. The TypeSearch project is an automation on top of the definitely typed project and uses
the same definition files behind the scenes.

*/