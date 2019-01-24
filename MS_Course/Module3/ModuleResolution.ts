/*
Module Resolution
Module Resolution is the process the compiler uses to figure out
what an import refers to. Consider an import statement like import
{ a } from "moduleA"; in order to check any use of a, the compiler needs to
know exactly what it represents, and will need to check its definition moduleA.
At this point, the compiler will ask "what's the shape of moduleA" while
this sounds straightforward, moduleA could be defined in one of your own
.ts/.tsx files, or in a .d.ts that your code depends on.
First, the compiler will try to locate a file that represents the imported module. To
do so the compiler follows one of two different strategies: Classic or Node.
These strategies tell the compiler where to look for moduleA.

If that did not work and if the module name is non-relative (and in the case of "moduleA", it is),
then the compiler will attempt to locate an ambient module declaration.
Finally, if the compiler could not resolve the module, it will log an error. 
In this case, the error would be something like error TS2307: Cannot find module 'moduleA'.
*/

/*
Relative vs. Non-relative module imports
Module imports are resolved differently based on whether the module
reference is relative or non-relative.
A relative import is one that starts with /,./ or ../. Some examples
include:
*/
import Entry from "./components/Entry";
import {DefaultHeaders} from "../constants/http";
import "/mod";
/*
Any other import is considered non-relative. Some examples include:
*/
import * as $ from "jquery";
import{component} from "@angular/core";

/*
A relative import is resolved relative to the importing file and cannot resolve to an ambient module declaration.
*/

/*
A non-relative import can be resolved relative to baseUrl, or through
path mapping. They can also resolve to ambient module declarations.
Use non-relative paths when importing any of your external dependencies.
*/

/*
Module resolution strategies
There are two possible module resolution strategies: Node and Classic.
You can use the --moduleResolution flag to specify the module resolution strategy.
If not specified, the default is Classic for --module AMD|System|ES2015 or Node otherwise.
*/

/*
Classic
This used to be TS's default resolution strategy. Nowadays, this strategy is
mainly present for backward compatibility.
A relative import will be resolved to the importing file. So import {b} from "./moduleB"
in source file /root/src/folder/A. ts would result in the following lookups:
1. /root/src/folder/moduleB.ts
2. /root/src/folder/moduleB.d.ts
找两种文件：一种是ts文件，另一种是d.ts文件。
For non-relative module imports, however, the compiler walks up the directory
tree starting with the directory containing the importing file, trying to
locate a matching definition file.
For example:
A non-relative import to moduleB such as import {b} from "moduleB", in a source file
/root/src/folder/A.ts, would result in attempting the following locations for locating "moduleB":
1. /root/src/folder/moduleB.ts
2. /root/src/folder/moduleB.d.ts
3. /root/src/moduleB.ts
4. /root/src/moduleB.d.ts
5. /root/moduleB.ts
6. /root/moduleB.d.ts
7. /moduleB.ts
8. /moduleB.d.ts
有一个算法，就是递归求多少个根目录的，搜索时间是可以计算的。
*/

/*
Node
This resolution strategy attempts to mimic the Node.js module resolution
mechanism at runtime.
How Node.js resolves modules
To understand what steps the TS compiler will follow, it is important to shed some light
on Node.js modules. Traditionally, imports in Node.js are performed by calling a function
named require. The behavior Node.js takes will differ depending on if requires is given a relative
path or a non-relative path.
Relative paths are fairly straightforward. An an example, let's consider a file located at /root/src/moduleA.js,
which contains the import var x = require("./moduleB"); Node.js resolves that import in the following order:
1. As the file named /root/src/moduleB.js, if it exists.
2. As the folder /root/src/moduleB if it contains a file named package.json that specifies
a "main" module. In our example, if Node.js found the file /root/src/moduleB/package.json 
containing {"main":"lib/mainModule.js"}, then Node.js will refer to /root/src/moduleB/lib/mainModule.js.
3. As the folder /root/src/moduleB if it contains a file named index.js. That file is implicitly
considered that folder's "main" module.
However, resolution for a non-relative module name is performed differently. Node will
look for your modules in special folders named node_modules. A node_modules folder
can be on the same level as the current file, or higher up in the directory chain. Node will
walk up the directory chain, looking through each mode_modules until it finds the module you tried to load.
*/

/*
Following up our example above, consider if /root/src/moduleA.js instead used a non-relative 
path and had the import var x = require("moduleB"); Node would then try to resolve moduleB
to each of the locations until one worked.
1. /root/src/node_modules/moduleB.js
2. /root/src/node_modules/moduleB/package.json(if it specifies a "main" property)
3. /root/src/node_modules/moduleB/index.js

4. /root/node_modules/moduleB.js
5. /root/node_modules/noduleB/package.json(if it specifies a "main" property)
6. /root/node_modules/moduleB/index.js

7. /node_modules/moduleB.js
8. /node_modules/moduleB/package.json(if it specifies a "main" property)
9. /node_modules/moduleB/index.js
*/

/*
How TS resolves modules
TS will mimic the Node.js run-time resolution strategy in order to locate the definition files for modules at compile-time. To accomplish this, TS overlays the TS source file
extensions(.ts,.tsx, and .d.ts) over the Node's resolution logic. TS will also use a field in package.json named "typings" to mirror the purpose of "main" -the compiler will
use it to find the "main" definition file to consult.

For example, an import statement like import {b} from "./moduleB" in /root/src/moduleA.ts would result in attempting the following locations for locating "./moduleB":
1. /root/src/moduleB.ts
2. /root/src/moduleB.tsx
3. /root/src/moduleB.d.ts
4. /root/src/moduleB/package.json(if it specifies a "typings" property)
5. /root/src/moduleB/index.ts
6. /root/src/moduleB/index.tsx
7. /root/src/moduleB/index.d.ts
*/

/*
Recall that Node.js looked for a file named moduleB.js, then an application package.json, and then for an index.js.
Similarly a non-relative import will follow the Node.js resolution logic, first looking up a file, then looking up an application folder. So import {b} from "moduleB"
in source file /root/src/moduleA.ts would result in the following lookups:
这一篇都在讲，不同情况下的import声明时TS是怎样找文件的，通过不同的路径--绝对路径寻找和相对路径寻找时候的不同寻找方式。--iterative遍历。穷尽。不同的搜索方式思路是一样的，只是寻找的文件夹不一样，比如
经典方式：从根目录下找，从src目录下找，从根这一级的目录下找；Node方式：从根目录下的node_modules下找，从src下的node_modules下找，从node_modules下找。
经典方式找：.ts, .d.ts
Node方式找：.js, package.json, index.js
*/

/*
what extension files that typescript are searching for: .ts, .tsx, .d.ts, package.json, index.ts, index.tsx, index.d.ts
1. /root/src/node_modules/moduleB.ts
2. /root/src/node_modules/moduleB.tsx
3. /root/src/node_modules/moduleB.d.ts
4. /root/src/node_modules/moduleB/package.json (if it specifies a "typings" property)
5. /root/src/node_modules/moduleB/index.ts
6. /root/src/node_modules/moduleB/index.tsx
7. /root/src/node_modules/moduleB/index.d.ts

8. /root/node_modules/moduleB.ts
9. /root/node_modules/moduleB.tsx
10. /root/node_modules/moduleB.d.ts
11. /root/node_modules/moduleB/package.json (if it specifies a "typings" property)
12. /root/node_modules/moduleB/index.ts
13. /root/node_modules/modulesB/index.tsx
14. /root/node_modules/moduleB/index.d.ts

15. /node_modules/moduleB.ts
16. /node_modules/moduleB.tsx
17. /node_modules/moduleB.d.ts
18. /node_modules/moduleB/package.json (if it specifies a "typings" property)
19. /node_modules/moduleB/index.ts
20. /node_modules/moduleB/index.tsx
21. /node_modules/moduleB/index.d.ts
Although it may seem there is too many steps, TS is still only jumping up directories twice at steps (8) and (15). This is really no more complex
than what Node.js itself is doing.
*/