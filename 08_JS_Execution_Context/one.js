// NOTEs:-

/* 1st It will has Global execution context. JS by deafult is a single threaded.
2.Global Execution context can be called with 'this' keyword.
3.Function Execution context.
4.Eval Execution Context.


Code runs in 2 phases:-
1st is memory "creation pahase".
2nd is Execution Phase.

1:- In 1st pahse only allocated the memory.

Complete Flow of code:
  a)Global execution / Global Environment and it will be allocated in this keyword.

  b)Memory creation phase. In this, variable name will be taken and undefined will be stored at ervery variable.
  if there is any function then function defination will be stored.
  then if there is also variable it wil be stored by putting value undefined.

  c)Execution Phase:
    1)In this if there is any value provided in the variable then it will be stored in that varibale by replacing undefined value.
    2)Then after it if there is any function call then it will create the one more new Execution context for that function call.In it new variable environment and execution thread will be there. Then again memory creation pahse and execution phase will be there.
    3)If there is any variables in the function then that variable names will be stored with undefined.
    4)After all variables it will go to the execution phase. and all variables will stored their provided values.
    5)Then function's returning value will be stored in main or parent global execution context.
    6)Then the function's Execution context will be auto deleted.
    7)If there is any more function then from step 2 to step 6 it will be repeated.




    Call Stack:-
    1.Global Execution context will be there at 1st.
    2.If any method will get in the call stack then it follows lifo structure last in 1st out.
    

 * 
 * 
 * 
 * 
 * 
 * 
 */