# Java Basics

## Variables

- all the program to store values during runtimeof the program.

- can either be a __primitive variable__ or __reference variable__

- Primitive -> contains the value. 
- Reference -> contains a reference (Pointer) to the object. 

(To identify if objects contain the same data, use the object1.equals(object2) method call.)

## Instance variable 

- associated with an instance of the class (also called object). 
- Access works over these objects.
- can have any access control and can be marked final or transient
- variables marked as final cannot be changed after a value has been assigned to them.

## Local variable

- local (stack) variable declarations cannot have access modifiers.
- do not get default values, must be initialized before they can be used. 

- __final__ is the only modifier available to local variables.
- final modifier defines that the variable cannot be changed after the first assignment. 

## Working with local variable

- __must always be declared in a method__

## Methods

- block of code with parameters and a return value
- can be called on the object
- can be declared with var-args
- can only have one var-args parameter, must be last parameter in the method
- __Overwrite__ of a superclass method: method must be of the exact same return parameter and the same arguments. Return parameter must be the same. 
- __Overload__ methods: method with the same name, but different arguments. The return type can not be used to overload a method.

## Main method

A public static method with the following signature can be used to start a Java application. Such a method is typically called main method.
```
public static void main(String[] args) {

}
```

## Constructor

> A class contains constructors that are invoked by the Java runtime to create objects based on the class definition.

- constructor declarations look like method declarations except they use the name of the class and have no return type. 

- classes can have several different constructors with different parameters.

example: 
```
public class MyConstructorExample2 {

    String s;

    public MyConstructorExample2(String s) {
        this.s = s;
    }
}
```

- Each class must define atleast one constructor if not the the complier implicitly adds one. 
- If a class is sub-classed, then the constructor of the super class is always called implicitly in this case. 

In the below example the constructor without parameters(aka empty constructor) is unnecessary.

```
public class MyConstructorExample {

    // unnecessary: would be created by the compiler if left out
    public MyConstructorExample() {
    }
}
```

Naming convention for constructors:
 
```
*classname* ( Parameter p1, ...) {};
```

- Objects are based on a constructor. 
- It's the first method called before anything can be done with the object.

## Modifiers

### Access modifiers

Three available in Java: 
- public
- protected
- private

Four access levels: 
- public
- protected
- default
- private

These define how the corresponding element is visible to other components.

__Public__ -> Can be freely created or called by other Java objects.
__Private__ -> Can only be accessed within the class in which it is declared.
__Protected__ -> Can be accessed from the package and sub-classes outside the package.
__Default__ -> Can get accessed only via the same package.

| Modifier | Class	 | Package | Subclass | World | 
| :---: | :---: | :---: | :---: | :---: |
| public | Y | Y | Y | Y |
| protected | Y | Y | Y | N |
| no modifier | Y | Y | N | N |
| private | Y | N | N | N |

## Other modifiers

- __final methods__: cannot be overwritten in a subclass abstract method: no method body
- __synchronized method__: thread safe, can be final and have any access control
- __native methods__: platform dependent code, apply only to methods
- __strictfp__: class or method