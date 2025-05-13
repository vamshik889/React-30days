props drilling --> context api is created to avoid prop drilling.

useState, useReducer, context api ---> local statement management.

global state management.

redux---> uni direction.

action---> dispatcher --> store ---> view --->action

dispatch({type:"add", payload:1}) ---> function (reducer function)

store= {counter:0}

install- redux

flux design( uni direction)

1. provider---> redux ( wrap it over entire application)
2. creating store---> legacy_createStore (function, initialValue)
3. useSelector---> to access data from store we need to use this hook.
4. useDispatch---> to make changes in the store.

app--> useDispatch(action.js) ---> store---> useSelect(()=>{})-->app

//day -2 (redux)
store---> what I want to add.

action object

- action.js ( action object function)
- actionType.js ( const names)

store---> add required items.
reducer.js---> write logic for all the actionobject

---

use the store in the places required.
---> useSelect --> to get the date from store.
---> useDispatch ---> to send the data to store.
