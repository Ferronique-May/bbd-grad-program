/**
Things to remember:
- The name of a Java source file must always equal the class name (within the source code) and end with the .java extension.

HelloWorld example below:

To run this file we would open the command line in this directory and use 'javac HelloWorld.java' Which will complie java source file into a class file.(Converts source code into bytecode.)

A new file HelloWorld.class should now be in the directory.

NB: By default, the compiler puts each class file in the same directory as its source file. You can specify a separate destination directory with the -d compiler flag

You can now run the complied java program by running 'java HelloWorld'

Expected output should be "Hello World"

To use the class in a different directory use: 
'java -classpath "mydirectory" HelloWorld'

 */

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}