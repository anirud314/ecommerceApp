# 13 Object Relational Mapping (ORM): E-commerce Back End

# UPDATE 
# Dev Journal 8/23/21

I have made the fix to allow for offline and online usage thanks to help from my tutor. I had a couple of issues, one of the issues I found that caused alot of things to break was something that I could only understand as a bug when using sequelize in particular with my product routes. Instead of using product_id sequelize was parsing it as product_i_d and due to that the product api endpoints didnt work. This was very hard to troubleshoot because even now neither my tutor nor I could figure out why It broke like that. 

![Postman final tests](./Assets/finalized.gif)

This is an example of me running the app and using postman to test. I didnt test all of it in one gif due to lack of capacity for screencastify, and lack of time to do so. It does work though.

## Screenshot Gifs

![Postman Test 1.](./Assets/Test1.gif)

![Postman Test 2.](./Assets/Test2.gif)

![Postman Test 3.](./Assets/Test3.gif)

## Dev Journal
Steps:
1) Set up the project based on the GITLAB
2) Parse through the instructions to see what is going on
3) Start and finish setting up the db Models and associations
4) Start and finish setting up the API routes
5) Test with postman.
6) Debug

### Step 1 and 2 details
I pulled the code from gitlab and started working on the files in the develop folder. In order to figure out both the instructions and what I should start with I decided to look through the given code and figure out what I need to build. After doing that and looking through the gitlab, I decided to break the work into 3 parts, building the models, building the routes, and testing with postman and debugging.

### Step 3
To start off with I started building DB models, Doing this allows us to create a template for different sets of data that we are storing and pulling from a database. This is easy enough due to the documentation on the readme instructions. I was able to take the instructions provided to me and the examples I worked with in the activities, tutoring sessions, and the module and build models for the category, product, tag and product tag. After that I had to set up associations/relationships between each table which was done in the index.js in the models folder. Alot of the types of code I needed to use here were given in comments, and I used google and external resources to research to see if I Implemented it correctly.

### Step 4
This is sort of the meat and potatoe's/ the functionality of the project, which is to create an api that can be used to CRUD the data from the mysql database we set up. This required me to do a bit more research to figure out what I was doing, Some parts like setting up the create and delete endpoints were easy, other parts like setting up the findAll, update and findOne endpoints were a bit finicky but with a bit of explanation from a tutor and a bit of exposure from practice from the internet and the modules I was able to make it work for the most part. For this I did get alot of help from the comments and documentation, but also from the tutors because they helped me understand how the data was being manipulated through the api and what exactly was going on. 

### Step 5
I have some prior experience using postman so I decided to work from there and test all of my endpoints. At first it was sort of difficult trying to figure out what was required of me to do in order to use Push, Post, Delete routes, but after looking at the gifs and doing some more experimentation with postman I was able to see results correctly.

### Debug
This is the section where I voice syntactical issues I faced. One of the things I faced was when I was working on setting up the models I defined the variables my way, Like instead of category_names I put categoryNames. I did this because I was inherintly just typing in camel case, I wasnt really thinking about it. But this caused errors when running npm run seed. This is because in the seed files the values are all set up based on the style of category_name, and I wrote all of my variables in camel case. So I had to manually change that to fix it. Another Issue I had is a mysql issue. I have been struggling with mysql as seen on my previous assignment. One of the things I struggled with was interacting with mySQL programatically and through the console. I got some help with my tutor and the internet to figure out what I should do for this project, especially with sequelize and dotenv. The only issue I had was setting up the schema using the commandline. So instead I just opened up the workbench and set up the schema from there. Aside from that alot of the issues I had were more troubleshooting issues on postman and mysql.

### Personal notes
Here I will discuss what I think about this challenge and what struggles I personally had to get this project done. To start off with I did have some struggles balancing my new work life with doing bootcamp projects, For the past two weeks I have been off of my game, which is why I had to use my last skip and take a bad score on one of the challenges. I decided to buckle down and ask for help where I needed my gaps filled. I worked with a tutor and he showed me some of the gaps in my understanding for ORM and for this challenge. Then on my own time when I got stuck on the project I just looked on the internet to see examples and worked from there. The thing about this project that I felt that alleviated my time crunch is that alot of the code was given to us and all I had to do is fill in some gaps that were easy to get done. Alot of the code I had to do was somewhat copy and paste. I could easily reuse and reformat code from one model to another, and it was sort of similar with setting up routes. There were a few things that I didnt get syntactically like res.status(---), for those I just googled it and asked people, I eventually figured out what to use for what and why I should use it.

## Instructions

Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

Your challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

Before you start, clone [the starter code](https://github.com/coding-boot-camp/fantastic-umbrella).


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The following animations show examples of the application's API routes being tested in Insomnia Core.

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core.


## Getting Started

You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

### Database Models

Your database should contain the following four models, including the requirements listed for each model:

* `Category`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `category_name`
    * String
    * Doesn't allow null values

* `Product`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_name`
    * String
    * Doesn't allow null values

  * `price`
    * Decimal
    * Doesn't allow null values
    * Validates that the value is a decimal

  * `stock`
    * Integer
    * Doesn't allow null values
    * Set a default value of 10
    * Validates that the value is numeric

  * `category_id`
    * Integer
    * References the `category` model's `id` 

* `Tag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `tag_name`
    * String

* `ProductTag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_id`
    * Integer
    * References the `product` model's `id`

  * `tag_id`
    * Integer
    * References the `tag` model's `id`

### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.

* `Category` has many `Product` models.

* `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.

* `Tag` belongs to many `Product` models.

**Hint**: Make sure you set up foreign key relationships that match the column we created in the respective models.

### Fill out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

**Note**: The functionality for creating the many-to-many relationship for products is already done for you.

**Hint**: Be sure to look at your module project's code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.


## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
