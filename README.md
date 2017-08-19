# W3.harness
Test Harness for React Relay + GraphCool for debugging and research

To run the failed Relay Modern Compiler Issue:

1) yarn run schema   // this runs the graphql schema download for account: cj6il7hon3n290110qpmr1zhq
2) yarn run relay    // this attempts to compile the mutation: CreateTest.js and fails even with a simple implementation

Output:
The error from the compiler is as follows:

Kieran-Gullers-MacBook-Pro-1818:W3-React-Relay-GraphCool kieran$ yarn run relay
yarn run v0.27.5
$ relay-compiler --src ./src --schema ./schema.graphql
HINT: pass --watch to keep watching for changes.
Parsed default in 0.02s

Writing default
Error writing modules:
RangeError: Maximum call stack size exceeded
Unchanged: 0 files
Written default in 1.89s
Done in 6.81s.



Possible Cause:
The error occurs as soon as you map a reference field into the Test type or any type then attempt to compile agains tthat table.
