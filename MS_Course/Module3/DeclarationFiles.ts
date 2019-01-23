/*
Declaration file
Declarations are used to describe code that exists elsewhere(e.g. written in JS, CoffeeScript, or nodejs)
 using the declare keyword. The goal of this is to be able to use this code in
 TS applications without having to rewrite the code in TS.
*/
class="language-TypeScript">mynumber = 200;//Error: cannot find name 'mynumber'

declare var mynumber: any;
mynumber = 200;

/*
You can save these declarations in a .ts file or in a .d.ts file,
we call these files with .d.ts extension declaration files.
If a file has the extension .d.ts then each root level definition must have the
declare keyword prefixed to it. This tells the developer that there
will be no code emitted by TypeScript. The developer needs to ensure
that the declared item will exist at runtime.
*/

/*
have the following JavaScript (message.js):

function showMessage(message) {
    alert(message);
}
If you want to call the showMessage function in your TS code, TS
will not recognize that this function exists. It does not know its
name or its parameters. This can be fixed by describig the showMessage function
in a definition file as message.d.ts:
after creating the message.d.ts, we can use the function showMessage in TypeScript
without compile errors.
*/
showMessage("this is a message."); //Error: cannot find name 'showMessage'

/*
.d.ts files and .ts files
Anything allowed in a .d.ts file may also appear in a .ts file, but
not the reverse. Therefore, .d.ts allows a subset of TS's features. A .d.ts
file is only allowed to contain TS code that does not generate any JS code in the
output. If you attempt to use any feature of TS that would generate JS, you'll get an error.
Interfaces are allowed, because they disappear completely after compilation. Const 
enums(added in TS1.4) are also allowed, unlike ordinary enums which
generate an object in the output JS. Top level classes, variables, modules and functions
must be prefixed with declare. It is a common practice to see a top-level declare module and then all definitions inside it are therefore
also declaration.
*/
declare module Something{
    var x;
}

