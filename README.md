# MongoDB $inc operator error with string value

This example demonstrates an incorrect usage of the MongoDB $inc operator, where a string value is provided for incrementing a numeric field.  The correct usage requires providing a numeric value.

## Bug
The provided code attempts to increment a field with a string value, leading to an error or unexpected results. 

## Solution
The solution is to replace the string value with a numeric value in the $inc operator.