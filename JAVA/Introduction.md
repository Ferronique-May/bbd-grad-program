# Java Intro

- Created by James Gosling from Sun Microsystems (Sun) in 1991.
- First publicly available version of Java (Java 1.0) was released in 1995.
- Sun Microsystems was acquired by the Oracle Corporation in 2010.
- In 2006 Sun started to make Java available under the GNU General Public License (GPL). Oracle continues this project called OpenJDK.
- Java is defined by a specification and consists of a programming language, a compiler, core libraries and a runtime (Java virtual machine) 
- Java runtime allows software developers to write program code in other languages than the Java programming language which still runs on the Java virtual machine.
- Java platform is usualy associated with the Java virtual machine and Java core libraries.

## Designed with the following properties:

- __Platform independent__ ->Java programs use the Java virtual machine as abstraction and do not access the operating system directly, making it highly portable. 

- __Object-orientated programming language__ -> all elements are objects except for primitive types.

- __Strongly-typed programming language__ -> types of the used variables must be pre-defined and conversion to other objects is relatively strict

- __Interpreted and complied language__ -> source code is transferred into the bytecode format which does not depend on the target platform. Bytecode instructions is interpreted by the JVM. JVM contains a so called Hotspot-Compiler which translates performance critical bytecode instructions into native code instructions.

- __Automatic memory management__ -> Java manages the memory allocation and de-allocation for creating new objects. Program does not have direct access to the memory. Garbage collector automatically deletes objects to which no active pointer exists.

Java and C++ syntax is similar. 

Java programs are compiled by the Java compiler into bytecode. The Java virtual machine interprets this bytecode and executes the Java program.

Program
|
JVM
|
Operating system
|
Hardware

## Java Runtime Environment vs. Java Development Kit

Java distribution -> 2 
1. Java Runtime Environment (JRE) - consists of the JVM and the Java class libraries. Contain the necessary functionality to start Java programs.
2. Java Development Kit(JDK) - additionally contains the development tools necessary to create Java programs. (Java compiler, the Java virtual machine and the Java class libraries.)

## Development Process with Java

- Source files are written as plain text documents.
- IDE calls Java compiler ( javac ).
- Compiler creates the *bytecode *instructions.
- Instructions are stored in .class files and can be executed by the Java Virtual Machine.

## Garbage collector

- JVM automatically re-collects the memory which is not referred to by other objects.
- Garbage collector checks all object references and finds the objects which can be automatically released.
- Programmer still needs to ensure that he does not keep unneeded object references, otherwise the garbage collector cannot release the associated memory.
- memory leaks -> unneeded object references.

## Classpath

- Defines where the Java compiler and Java runtime look for .class files to load.