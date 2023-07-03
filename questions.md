- Does your method have parameters?
    - What will happen if any of the parameters:
        - Is missing
        - Is null
        - Is mismatched
            - Of different type
            - Of invalid size(length)
- What’s your logic?
    - Can some other code modify your input?
    - Which other code waits for your output?
    - What will happen if you output null?
    - What will happen if your code doesn’t provide its output on time?
    - Does your logic have all possible outputs defined?
    - Are all branches still relevant? 
- Do you interact with data?
    - Do you CRUD data?
        - What will happen if you lose rights to CRUD?
        - What will happen if the data is missing?
        - Can you distinguish between no access and no or corrupted data?
- Do you loop?
    - Are you sure you’ll always exit the loop?
    - Are you sure you need to loop?
    - Do you exit quickly on error?
    - Do you not enter the loop if it’s not necessary?
- Does the control flow runs smoothly or you make unnecessary calls?
- Have we handled and covered the exceptions?

**More questions**

- [Elena Kravchenko](https://www.linkedin.com/in/elena-kravchenko/)

    Input validation is a huge topic by itself:
    You can also add negative and abuse scenarios testing aspects
    - special characters handling ( kind of fuzzing test with different combination of characters to ensure your code can handle them w/o crashing or other misbehavior )
    - encoding and locale aspects
    - invalid business values - wrong dates, negative numbers, inproper file types etc ( depends on the business logic of the unit)
    - unexpected format for formatted input ( XML, JSON etc)
    - embed some security aspects to the test to have the real shift-left action:
    - [OWASP Input Validation Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

- [Micheal Frontner](https://www.linkedin.com/in/michael-fontner-7b8277127/)
    - Will your code lead to unreachable functions somewhere else in the flow?
    - Is every function called? Or is there some dead code?
    - Have you deleted everything that is „test“ code?

- [Wayne Roseberry](https://www.linkedin.com/in/wayneroseberry/)
    - When should the code throw an exception, and what exception should that be?
    - What should the code do if something it calls throws an exception, and which exceptions does it handle specifically?
    - Is there logic using runtime state (e.g current time, current date, random number states, file system states, etc.) Is the test code able to forcibly control that state sufficient to test how the code handles it?
