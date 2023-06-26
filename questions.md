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
Text Fields

- Empty string
- Single character
- Maximum allowed/required length
- Long text exceeding the maximum length
- Numbers
- Special characters, incl. Names with hyphens and apostrophes
- Whitespace
- Unicode characters, including non-English characters
- SQL injection: e.g ' OR 1=1; --
- HTML tags - e.g. <script>alert('XSS')</script>.
- Newline characters e.g. (\n or \r\n).
- Emoji-only input
- 

*************************
Numeric Fields

- 0
- Random negative number
- Is it possible to get division by zero?
- Letters
- Min/Max, at and around the boundaries (+/-1, +/-0.01, +/-0.001) of the value requirements
- Min/Max for the type of the field value
- Exceeding Min/Max for the type of the field value
- Missing main digit in a decimal number
- 


*************************
Testing CSV upload

- Non-csv extension
- Empty CSV file
- Header only
- Invalid column header name
- Less or More columns
- Extra comma at the end of the row
- Decimal comma/dot
- Only one comma
- Value with special characters
- Create new record
- Update/Overwrite record


*************************
File generation - File names

- Long (256) name
- Special characters
- Starting with special characters
- 






