/*Namespaces, namespaces are used as a way to organize the code so that you can 
keep track of your types and not worry about name collisions with other
objects. Instead of putting lots of different names into the global 
namespace, you can wrap up your objects into a namespace. The choice 
of what objects go in what namespace is totally up to your 
organization preferences. This is your code and your objects, organize it
the way you think is logical. You may choose to move all entities that 
are related to each other in some sort either by functionality or
characteristics into one namespace and give it a name that describes
the similarity between them.
If you want the interfaces and classes in your namespace to be visible
outside the namespace, you need to preface their declaration with export
keyword. Variables that are implementation details can e left unexported and
will not be visible to code outside the namespace.

Classes, interfaces and variable names within a namespace has to be
unique. Outside the namespace it is ok to have classes or interfaces or variables
with similar names as entities inside a namespace that is because
the namespace entities are refered to with their namespace so that 
gives them their uniqueness.
*/

/*
Multi-file namespaces
You can split a namespace across many files. Even though the files are
separate, they can each contribute to the same namespace and can be 
consumed as if they were all defined in one place. Because there are
dependencies between files, you will add reference tags to tell
the compiler about the relationships between the files.
*/
namespace Zoo{
    interface Animal{
        //We do not need the *export* here since this interface will
        //only be accessible only by entities from within the Zoo namespace
        skinType: string;
        isMammal(): boolean;
    }
}

