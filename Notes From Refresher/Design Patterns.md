# Design Patterns

- In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design.
- We observe patterns as software engineers because we are essentially solving a problem.

## Reactive Programming

- A design paradigm that relies on asynchronous programming logic to handle real-time updates to otherwise static content. It provides an efficient means -- the use of automated data streams -- to handle data updates to content whenever a user makes an inquiry.

## Event driven Programming

### What is an event?

- An event is any significant occurrence or change in state for system hardware or software.

### What is event driven programming?

- With an event-driven system, the capture, communication, processing, and persistence of events are the core structure of the solution. 

## What is the difference between reactive and event driven programming?

In __reactive programming__, you __hook up to / watch data__ which you know that exist. __Data is crucial here__. Whereas in __event-driven programming__, you __push an event__ in a certain situation that maybe would be received by some other parts of code. Situation is important here, __data does not matter.__

## CQRS

- Command and Query Responsibility Segregation

### What is CQRS?

- The idea of separating read and write operations.

### Data Transfer Object:

- an object that carries data between processes.

### Data Access Object:

-  a pattern that provides an abstract interface to some type of database or other persistence mechanism.

### event-sourcing (event-driven):

- Event-driven Architecture taken all the way to the storage level.

## Data Structures

- A specialized means of organizing and storing data in computers

### A tree based data structure

- A tree is a hierarchical data structure defined as a collection of nodes. Nodes represent value and nodes are connected by edges. A tree has the following properties:

1. The tree has one node called root. The tree originates from this, and hence it does not have any parent.
2. Each node has one parent only but can have multiple children.
3. Each node is connected to its children via edge