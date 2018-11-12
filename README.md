# Node.js Nights 2018 - homework #4

Main idea was to implement sign in route "/sessions/user"
I added also "database" for saving users into database/users.json file. Passwords are saved hashed.

##Main usage:
1. Create new user by POST user json to "/users". This creates and saves new user and returns jwt token.
2. Restart server to flush jwt tokens from RAM
3. Sign in with created user by POSTing email, password to "/sessions/user". This creates jwt token.
4. By sending jwt token in header, we can access displaying all dogs on GET "/dogs". We can create new dog
by POST "/dogs" or display specific dog by GET "/dogs/#idNumber"

Test username can be

{
    "email": "jiri4@example.com",
    "password": "hesloKleslo2"
}
on /sessions/user


##Changes made to original STRV 04 branch

    - created new file utils/diskDatabase.js
	- added new route "sessions/user" into routes/index.js
	- added signIn into operations/users
	- added signIn into controllers/users.js
	- added signIn into schemas/users.js
	- modified repositories/user (to work with database)