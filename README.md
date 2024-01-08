# DemoAPI
Created a API repo for Node JS

1. Open a terminal in the project directory and run: 

npm install

2. Start PostgreSQL Container:

docker run --name postgres-container -e POSTGRES_USER=myUser -e POSTGRES_PASSWORD=password123 -e POSTGRES_DB=myDB -p 5432:5432 -d postgres

3. Run the Application:

npm start

4. Access the API:

http://localhost:3000

5. Stop PostgreSQL Container:

docker stop postgres-container
