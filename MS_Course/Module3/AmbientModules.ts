/*
Working with other JS libraries
To describe the shape of libraries not written in TS, we need to
declare the API that the library exposes.
We call declarations that don't define an implementation "ambient".
Typically, these are defined in .d.ts files. If you are familiar with
C/C++, you can think of these as .h files.
*/
/*
Ambient Modules
In Node.js, most tasks are accomplished by loading one or more modules.
We could define each module in its own .d.ts file with top-level export
declarations, but it is more convenient to write them as one large .d.ts file.
To do so, we use a construct similar to ambient namespaces, but we use the module
keyword and the quoted name of the module which will be available to a later import.
*/

///<reference path = "node.d.ts"/>

import url = require("url");

//or
import * as URL from "url";

let myUrl = URL.parse("http://www.typescriptlang.org");

//shorthand ambient modules

///<reference path = "declarations.d.ts"/>
import x,{y} from "hot-new-module";
x(y);

//UMD modules
/*
Some libraries are designed to be used in many module loaders, or with
no module loading(global variables). These are known as UMD modules.
These libraries can be accessed through either an import or a 
global variable.
Universal Module Definition(UMD) pattern typically attempts to 
offer compatibility with the most popular script loaders of the day. In many
cases it uses AMD as a base, with special-casing added to handle CommonJS compatibility.
*/

///<reference path = "math-lib.d.ts"/>
import {isPrime} from "math-lib";
isPrime(2);
mathLib.isPrime(2);
