# GraphQL Pets 

GraphQL Pets is built to accompany this [Intro to GraphQL Lesson](http://backend.turing.io/module4/lessons/intro-to-graphql). The `master` branch has a starter boilerplate in Express/GraphQL and is hitting a JSON DB to avoid having to worry about database setup. The `completed` branch shows working versions of queries and mutations. 

**To get running on your machine, run the following commands in your terminal:**

```bash
git clone git@github.com:ameseee/graphql-pets.git
npm install 
```

**To run the JSON sever, run:**

```bash
npm run json:server
```
and visit `http://localhost:3000/pets` or `http://localhost:3000/companies` to see the JSON.

<br>

NOTE: For the following set of instructions, you need to have `nodemon` installed globally. If you don't have it, run `npm i -g nodemon`. If you aren't sure, go ahead with the following steps and you will see an error regarding `nodemon` if you don't have it. 

**To run the GraphQL server, run:**

```bash
npm run dev
```
and visit `http://localhost:4000/graphql` to use the GraphiQL application.


![image](https://user-images.githubusercontent.com/25447342/45267495-b7cb9a00-b42a-11e8-892a-c6219719eeb1.png)
