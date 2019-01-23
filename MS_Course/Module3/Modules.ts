/*
Modules are used for code organization as well as code sharing.
The older name for modules is "external modules", starting TS 1.5,
they are just called "modules";
Starting with the ECMAScript 2015, JS has the concept of modules. TS
shares this concept.
Modules are executed within their own scope, not in the global scope;
this means that variables, functions, classes, etc. declared in a module are not visible
outside the module unless they are explicitly exported using one of the
export forms. Conversely, to consume a variable, function, class, interface,
etc. exported from a different module, it has to be imported using one of the import
forms.
Modules are declarative; the relationships between modules are specified in terms
of imports and exports at the file level.
Modules are declarative; the relationships between modules are specified
in terms of imports and exports at the file level.
In TS any file containing a top-level import or export is considered
a module. This is similar to ECMAScript 2015. This is also different
than namespaces that use the namespace keyword to declare a namespace.
*/

/*
Module Loaders
Modules import one another using a module loader. At runtime the module loadr
is responsible for locating and executing all dependencies of a module before
executing it, this is called Module Resolution. Well-known modules
loaders used in JS are the CommonJS module loader for Node.js and require.js for
Web applications.
Benefits of using module loaders:
1.Asynchronous module loading.
2.Lazy(on-demand) module loading.
3.Great community support for example, one of the standard module
wrappers(AMD) has a lot of community modules implement it, so your 
modules can depend on them.
An example of a module loader
RequireJS is a JS file and module loader. It is optimized for in-browser
use, but it can be used in other JS environments, like Rhino and Node.
Using a modular script loader like RequireJS will improve the spped and qualifty of your code. RequireJS only loads the JS script that the page needs. 
*/

/*
Export
Exporting a declaration
Any declaration (such as a variable, function, class, type alias, or interface)
can be exported by adding the export keyword.
*/