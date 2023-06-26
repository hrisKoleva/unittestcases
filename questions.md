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


*************************
File generation - File names

- Long (256) name
- Special characters
- Starting with special characters
- 






