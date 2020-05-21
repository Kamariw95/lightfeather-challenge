# Lightfeather Full Stack Engineer Challenge

__Overview:__ There are two applications, `client` and `server`.

The `client` uses [GatsbyJS](https://www.gatsbyjs.org/) and the `server` uses [Django](https://docs.djangoproject.com).

## How to run: Client
__Prerequisite:__ Make sure you have either [`npm`](https://www.npmjs.com/) or [`yarn`](https://yarnpkg.com/) installed. 


In your terminal, run: 

__1.__ `npm install gatsby-cli` or `yarn add gatsby-cli`

__2.__ `cd client`

__3.__ `gatsby develop`

For more help, go to the [quick start for Gatsby](https://www.gatsbyjs.org/docs/quick-start).

Once its running, go to [localhost:8000](localhost:8000) in your browser and you should see an application. Check out [this link](localhost:8000/slightly-better-design) to see a slightly better design.

## How to run: Server

__Prerequisite:__ Make sure you have [`python3`](https://realpython.com/installing-python/) installed. 

#### Setting up the virtual environment 

In your terminal: 

__1.__ Pull the project on your local. 

__2.__ `cd` into the project folder and run `python3 -m venv` to create a virtual environment.

__2.__ To start the virtual environment run `source venv/bin/activate`


#### Installing Packages

__Prerequisite:__ Have the virtual environment running and be in the project folder. 

In your terminal, run: `pip install -r requirements.txt`

This installs all of the packages needed to run the server application.


#### Running the application

In your terminal (& in the same folder as before), run: 

__1.__ `python manage.py runserver`

The project should be running on port `23456` and callable via `localhost`. 

To test this, I used `cURL`. Here's an example:

`curl -d '{"Shift":3, "Message":"dad is a test"}' -H "Content-Type: application/json" -X POST http://localhost:23456/api/encode/`.

__NOTE:__ There will be a message about running migrations in the terminal. It adds authentication to the application, so please, avoid it if you can.

