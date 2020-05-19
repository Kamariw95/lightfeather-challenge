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

## How to run: Server
__Prerequisite:__ Make sure you have [`python3`](https://realpython.com/installing-python/) installed. 

I suggest using python's virtual environment, but.. some people like to go for it. 


#### Setting up the virtual environment 

In your terminal: 

__1.__ Pull the project on your local. 

__2.__ `cd` into the folder and run `python3 -m venv` to create a virtual environment.

__2.__ To start the virtual environment run `source venv/bin/activate`


#### Installing Django 

__Prerequisite:__ Have the virtual environment running. 


In your terminal, run: `python -m pip install Django`

Here's more [information on installing Django](https://docs.djangoproject.com/en/3.0/intro/install/) if you didn't use a virtual environment.


#### Running the application

In your terminal, run: 

__1.__ `python3 manage.py runserver`

The project should be running on port `23456` and callable via `localhost`. 
