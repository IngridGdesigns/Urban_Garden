# Urban_Garden
UrbanGarden MVP app
A barter app where you can exchange food grown in your garden with other urban farmers or  anyone who wants to eat better, reduce food waste and form a community.


Where would it happen?
People could make their own meetups at parks around the city or barter at the community gardens, recreation centers. 

Demographic?
18 - 80 years old people.
Users who are foodies/bee keepers / urban gardeners / fashionistas / thrifters. 

Features
- Browse items
- Add posts - new items 
- Barter - write in individual posts

Styleguide
Bright cool greens, yellow and blue. Usage of icons, Open sans type, user frienldy layout. 


#CREATING ENVIRONMENT AND PROJECT
1. open terminal

2. mkdir - myproject

3. make a folder for backend 

4. cd to backend dir

5. brew install

6. brew install node

7. run npm init  -y    // to create a package json -add name, //github if you want remember to add entry point: (index.js or server.js)

#Express.js & dependencies ---
8. npm install express

9. npm install dotenv 

10. create .gitignore file - add .env to file

11. create .env file

12. add it to .gitignore

13. brew install postgresql - To work with posgres sql db

14. psql postgres // to get it to connect to postgres database - log in

15. postgres=# //Shows your inside psql postgres db and logged in as superuser or root.

16. create role and password, CREATE ROLE me WITH LOGIN�PASSWORD ‘password’;  //(hit return)�then write, ALTER ROLE me CREATEDB //(we want to create db

17. write \d to list all users/roles in postgres 

18. \q to quit postgres

19. Now in terminal, to connect to ‘me’ write: psql -d postgres -U me �//(you are now logged in as me)

20. (run command) CREATE DATABASE sweets;

21. \c mytable //(to connect to sweets database)

22. make a table - use postgresql docs to insert, create, update etc.�example: �CREATE TABLE mytable(id SERIAL PRIMARY KEY, name VARCHAR(20), description VARCHAR(25), order_date DATE;�

23. after creating tables, open new tab in terminal bash

24. Cd backend/  - go to backend folder, (inside)

25. npm install pg  //(node-postgres is a collection of node modules for interacting with PostgresSQL database. read node-postgres.com documentation

26. use express.js documentation to instantiate express connections 

27. go back to .env file and fix according to posgres CRUD passwords, etc.

28. npm install -g nodemon (to be run globally)

29. to start it just write nodemon [your node app, server.js or index.js

30. use port 3001 or 3005, (react app opens http://localhost:3000 )

31. npm install express-jwt-authz 

32. npm install jsonwebtoken 

33. npm install --save jwks-rsa

34. npm install cors 

35. npm install body-parser 

36. npm install morgan

    body-parser: This is a library that you will use to convert the body of incoming requests into JSON objects.

    cors: This is a library that you will use to configure Express to add headers stating that your API accepts requests coming from other origins. This is also known as Cross-Origin Resource Sharing (CORS).

    express: This is Express itself.

    morgan: This is a library that adds some logging capabilities to your Express app.


#front end
make another directory in root folder, call it client and type:

1. npx create-react-app my-cool-app OR yarn create react-app my-app

2. cd my-cool-app and npm start to see that its running on port 3000

3. my-cool-app’s package.json add (make sure it is the last object), ”proxy": "http://localhost:3005”}
.  - this is the express port to get your api’s

4. npm install react-router 

5. npm install react-bootstrap bootstrap -  for styling

5. yarn add popper.js

6. npm install auth0 - Auth0 authentication

7. npm install react-icons - library of Fa icons and Glyphicons

8. npm install react-moment && moment && moment-timezone if needed (see moment.js documentation) - 

9. npm axios (only used to get users from Auth0) - fetch's cool brother

10. create account with Auth0, follow documentation for react SPA & look into securing backend -- see node guidelines in Auth0. 


