# Lecture Notes

## Server Side Architecture

### Express Route Handler

    app.get("/", (req, res) => {
        res.send({ hi: "there" });
    });

`app`: which Express App to register the handler.  
`get`: creates a new route handler that watch for incoming requests with this method. Similar methods

* `get`: Get info
* `post`: Send info
* `put`: Update all the properties of something
* `delete`: Delete something
* `patch`: Update one or two properties of something

### Heroku Deployment

Checklist

1. Dynamic Port Binding  
   In `index.js`:
   `const PORT = process.env.PORT || 5000;`
2. Specify Node Environment  
   In `package.json`:  
   `"engines": { "node": "8.1.1", "npm": "5.0.3" },`
3. Specify start script  
   In `package.json`:  
   `"scripts": { "start": "node index.js" },`
4. Create .gitignore file

Sign up Heroku. Install Heroku CLI.
`brew install heroku/brew/heroku`  
`heroku login`  
`heroku create`

Get the <app_url> and <deploy_url> from previous step.  
`git init`  
`git remote add heroku <deploy_url>`  
`git push heroku master`  
Open the app.  
`heroku open`

## Authentication with Google OAuth

OAuth Flow  
Passport.js Library  
passport + passport strategy(specific OAuth provider)

Go to https://console.developers.google.com/
Create project -> Create API(Google+) -> Get credential

ClientID: Identify the App.
ClientSecret: Get info from the App. DON'T SHARE IT! DON'T PUSH TO GITHUB!

Create config/keys.js, store keys there.

Config passport -> Create callback handler -> Config callbackURL on googleAPI

## Adding MongoDB

Using cookie-based authentication.

MongoDB: collections -> records: json/javascript object  
schemeless: with a collection, records can have different structure

Mongoose: Module Class -> collection  
 Module Instance -> record

Create MongoDB instance on https://mlab.com

## Dev vs Prod Environments

## Moving to the Client Side

## Developing the Client Side

## Handling Payments

## Back End to Front End Routing in Production

## Mongoose for Survey Creation

## Back to the Client

## Handling Webhook Data

## The Home Stretch

# TODOs

1. Try to use local MongoDB. Try to deploy the app onto Digtal Ocean.
