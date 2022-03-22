# Classes - Part 1

- It is a template that describes the data and behavior associated with an instance of that class. 

- Defined by the *class* keyword.
- Must start with a capital letter. 
- Data associated with a class is stored in variables. 
- Behaviour in a class is implemented with methods.

(It is also possible to define inner classes, these are classes defined within another class, in this case you do not need a separate file for this class.)

## Object

- is an instance of a class

This is the real element which has data and can perform actions. 

- Objects are based on the class definition. 
> Classes are seen as the blueprint of an object

## Package

Java groups classes into functional packages. 

- Typicaly used to group classes into logical units. 
- Common practice to use the reverse domain name of the company as top level package. 
- Avoid name collisions of classes. 

## Inheritance

- Subclass -> A class derived from another class.
- Superclass - The class from which the subclass is derived.

> Inheritance allows a class to inherit the behavior and data definitions of another class.

- In Java a class can only extend a maximum of one class. 

Example: 

```
class MyBaseClass {
    public void hello() {
        System.out.println("Hello From MyBaseClass");
    }
}
```

```
class MyExtendedClass extends MyBaseClass {

}
```

## Object as superclass

> Every object in Java implicitly extends the Object class.

The class defines the following methods for every Java object:

- equals(o1) allows checking if the current object is equal to o1
- getClass() returns the class of the object
- hashCode() returns an identifier of the current object
- toString() gives a string representation of the current object

## Class methods and class variables

- Associated with the class and not an instance of the class.
- To refer to these elements, you can use the classname and a dot (".") followed by the class method or class variable name.
- Declared with the static keyword. 
- Class methods aka *static methods*
- Class variables aka *static variables* / *static fields*
- If a variable has to be defined as constant, you declare it with the static or final keyword.
- Static method runs without any instance of the class, cannot directly access non-static variables or methods. 

## Abstract class and methods

An abstract class can not be directly instantiated.

