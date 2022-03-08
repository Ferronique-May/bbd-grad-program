# Introduction to Databases and DBMS

## What is a database?

- A collection of information that is organized so that it can be easily accessed, managed and updated. It is typically indexed to make it easier to find relevant information.

There are different types of databases:
- Relational -> Stored in rows and columns. Reliable. Work well with structured data. Examples: Microsoft SQL Server, Oracle Database, MySQL, PostgreSQL and IBM Db2

- Object-oriented -> Can work with complex data objects(Objects that mirror those used in OOP languages)

- Distributed -> Consists of two or more files located in different sites either on the same network or on entirely different networks. Portions of the database are stored in multiple physical locations and processing is distributed among multiple database nodes.

- Hierarchical -> Data is stored in the form of records and organized into a tree-like structure, or parent-child structure, in which one parent node can have many child nodes connected through links.

- Network -> a type of database model wherein multiple member records or files can be linked to multiple owner files and vice versa. The model can be viewed as an upside-down tree.

- Key/Value -> a type of nonrelational database that uses a simple key-value method to store data. Where the key serves as a unique identifier.

- Column Family -> Stores data using a column oriented model. Use a concept called a keyspace. The keyspace contains all the column families (kind of like tables in the relational model), which contain rows, which contain columns.

- Document -> Nonrelational database that is designed to store and query data as JSON-like documents.

- Graph -> Stores nodes and relationships instead of tables, or documents. Data is stored just like you might sketch ideas on a whiteboard. Your data is stored without restricting it to a pre-defined model, allowing a very flexible way of thinking about and using it.

## Database Management Systems (DBMS)

- A Database Management System is a program that allows for the manipulation of our database files and controls the hardware that stores them.

- Structural Rules : Helps keep the data consistent and allows a structured means of data retrieval

- Data Entry : Allows loading data into a managed environment.

- Data Protection : Keeps integrity and security in check to allow for a safe and reliable place to store data

- Retrieving Data : Provides formalised means such as (SQL) of data retrieval

## QUESTIONS

1. What is the difference between a document database and a key-value database? They both store values in a key-value pair manner. So in a real life situation how would you be able to differentiate between the two?

2. Have you ever decided to use a graph database? when and why?





