# Yelp Camp Workflow

## V1
### Basic Setup
* add landing page
* add campgrounds page that lists all campgrounds
* each campground has a name and image

### Layout and Basic Styling
* create basic header and footer partials
* add bootstrap

### Create New Campgrounds
* setup new campground POST route
* add body-parser
* setup route to show form
* add basic unstyled form

### Style camgrounds page
* add a better header/title
* make campgrounds display in a grid

## V2
### Setup Database
* install MongoDb
* add Mongoose
* setup campground model
* use camground model inside of routes

### Show Page
* review RESTful routes
* add description to campground model
* show db.collection.drop()
* add a show route/template

## V3
### Refactor Mongoose Code
* create models directory
* use module.exports
* require everything correctly
* add comment model

### Drop and Create
* create a seeds file to drop and create data
* data includes campgrounds and comments
* Display comments on page

### Comment New/Create
* add comment new and create routes
* add new comment form

## V4
### Style Show Page
* add sidebar
* display comments nicely

## V5
### Authentication
* install passport packages
* define user model
* configure passport
* add register, login, logout routes and template
* prevent user from commenting to campgrounds unless logged in
* add links to navbar
* show/hide auth links correctly

## V6
### Refactor code
* separate authentication, comments, camgrounds routes into individual files

### User: Comments
* associate users and comments
* save author's username to a comment automatically

### User: Campgrounds
* only registered users can create a campground
* save username and id to campground

## V7
## Update and Destroy
* add method override
* add edit route for campgrounds
* add link, to edit page
* add update, delete route

### Authorization
* only user who created a campground and edit/delete it
* show edit/delete buttons only yo user who created the campground
* same with comments
* refactor middleware

### Flash Messages
* install and configure connect-flash
* add bootstrap alerts to header

## V8
### Slider images on Landing Page
* refactor landing page
* Add landing.css
* include modernizr for cross platform detection and support
* add animation transition to background images

### Add Dynamic Pricing
* add price to campground model as a String datatype
* add price to views/campgrounds/new.ejs, new and edit forms, and campground show page

### UI Improvements
* refactor login/sign up page
* make link active on page
* refactor footer

### Campground Improvements
* make new comments on show page
* allow image upload
* add google maps

### Fuzzy Search

### Google Maps
* sign up to get api key
* enable geocode
* install dotenv
* install node-geocoder
* update camground model, routes, and forms

### Home Link navigation

### Authentication flash messages?

### User Profile

### Display time since posted

### Password reset

### Image Upload

### Pagination on campground index