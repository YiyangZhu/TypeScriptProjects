/*
Modules or Namespaces
Namespaced Vs. Modules
you may have noticed that Namespaces are similar to modules interms of the fact that they both are used to organize the code. In fact, namespaces were previously refered to
as internal modules while modules where refered to as external modules. Starting in TS 1.5, the terminology has changed and now internal modules are called namespaces and
external modules are just modules. This is to align with ECMAScript 2015's terminology.
*/

/*
When to use namespaces and when to use modules

When first moving to a module-based organization, a common tendency is to wrap exports in an additional layer of namespaces. Modules have their own scope, and only
exported delcarations are visible from outside the module. With this in mind, namespace provide very little, if any, value when working with modules.

On the organization front, namespaces are handy for grouping together logically-related objects and types in the global scope. For example, in C#, you are going to find
all the collection types in System.Collections. By organizting our types into hierarchical namespaces, we provide a good "discovery" experience for users of those types.
Modules, on the other hand, are already present in a file system, necessarily. We have to resolve them by path and filename, so there's logical organization scheme for us to
use. We can have a /collections/generic/ folder with a list module in it.之前提到很多；如何找到module，通过什么路径找。
Namespaces are important to avoid naming collisions in the global scope. For example, you might have My.Application.Customer.AddForm and My.Application.Order.AddForm --
two types with the same name, but a different namespace. This, however, is not an issue with modules. Within a module, there's no plausible reason to have two objects
with the same name. From the consumption side, the consumer of any given module gets to pick the name that they will use to refer to the module, so accidental naming conflicts
are impossible.
*/

/*
Reg Flags
Do not use namespaces in modules
All of the following are red flags for module structuring. Double-check that you're not trying to namespace your external modules if any of these apply to your files:
A file whose only top-level declaration is export namespace Foo { ... } (remove Foo and move everything 'up' a level) ???
A file that has a single export class or export function (consider using export default)
Multiple files that have the same export namespace Foo {at top-level (don't think that these are going to combine into one)
*/

/*
Best practices
1. While namespaces are still available in TS, it is better to use modules as much as possible. This is because, in most cases, you will need to use external libraries in your
application. In that case you will have to deal with modules because modules are the way to go with external none TS libraries. Mixing namespaces and modules in one
application is not a recommended practice. //尽量用module。不要在一个应用里又用namespace，又用module！
2. Use modules and not namespaces if you are going to share your code as components or libraries to be consumed by other applications.
3. Use namespaces if your application is small and within the same application and when you do have any external dependencies like using external libraries or offering your
code to be used by other applications. You can still use modules in this case. However, some developers favor namespaces in this scenario for its ease of use and abscence of the
overhead of using a module loader as in the case of modules.
*/