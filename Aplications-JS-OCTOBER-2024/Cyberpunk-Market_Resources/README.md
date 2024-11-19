# Cheat Sheet

## Init Project
- [x] - Extract resources
- [x] - Install packages
  - [x] - Install lite-server and add start script
  - [x] - Add server script
- [x] Add init js file
- [x] Setup lit-html lib export 
- [x] Setup page.js lib export
  - [x] Start page.js

## Views & Routing
- [x] Add empty views
- [x] Add page routes
- [x] Modify navigation links

## API
- [x] Add requester function for api module

## User session
- [x] Add user util module
- [x] Add set user data function
- [x] Add clear user data function
- [x] Add get user data function

## Register
- [x] Add template to register view
- [x] Add api reuqest for register
- [x] Handle submit register form
- [x] Add validation with alert
- [x] Add error handling with alert

## Login
- [x] Add template to login view
- [x] Add api request for login
- [x] Handle submit login form
- [x] Add validation with alert
- [x] Add error handling with alert

## Logout
- [x] Add api request for logout

## Navigation
- [x] Add navigation view
- [x] Create navigation middleware
- [x] Add middleware to page.js

## Home page
- [x] Implement homeView

## Market / Dashboard page
- [x] Add HTML to template
- [x] Add items api module
- [x] Add get all items request
- [x] Render items dynamically

## Create 
- [x] Add HTML to template
- [x] Add form submit handler
- [x] Add api request for create

## Details 
- [x] Add details view to page routes with itemId param 
- [x] Add HTML to template
- [x] Add get one api request
- [x] Hide buttons when not owner
- [x] Set href attribute for edit and delete links

## Edit 
- [x] Add HTML to template
- [x] Prepopulate values in the form using getOne request
- [x] Add form submit handler
- [x] Add api request for edit
- [x] Redirect on successfull request

## Delete
- [x] Use delete view without rendering template
- [x] Show confirm dialog
- [x] Add delete reuqest in items api
- [x] redirect on successful deletion

## Notifications
- [x] Setup notifications middleware
- [x] Add middleware to page
- [x] Add showNotification function to ctx
- [x] Setup timeout ti hide notification in 3 seconds
- [x] Replace all places where using alert with showNotifications