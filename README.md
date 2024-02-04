# Redux
State management library , makes states global

# Store
Global state that's gonna be accesible. In a store , you will have multiple slices (think interface) for components. EX: CounterState is an interface that defines the types of the data that will be used in a Counter component.

# Action
What you use to interact/change the state

Basic structure of an action 
```
{type: <string>, payload : <data>}

The type would be the name of the action

Note that the payload parameter is optional. You can include the payload field so redux can use it to perform its task.

```

# Reducers
Takes an action, and use the type of the action to perform updates. Reducers will never make changes to the global state directly, instead it makes a copy of the state and perform updates on the copy instead.


