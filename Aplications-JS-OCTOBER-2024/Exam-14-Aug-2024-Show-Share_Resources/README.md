# Cheat Sheet

## Init Project
- [x] - Extract resources
- [x] - Install packages
  - [x] - Install lite-server and add start script
  - [x] - Add server script
- [x] Add init js file
- [x] Setup lit-html lib export 
- [] Setup page.js lib export
  - [] Start page.js

## Views & Routing
- [] Add empty views
- [] Add page routes
- [] Modify navigation links

## API
- [] Add requester function for api module

## User session
- [] Add user util module
- [] Add set user data function
- [] Add clear user data function
- [] Add get user data function

## Register
- [] Add template to register view
- [] Add api reuqest for register
- [] Handle submit register form
- [] Add validation with alert
- [] Add error handling with alert

## Login
- [] Add template to login view
- [] Add api request for login
- [] Handle submit login form
- [] Add validation with alert
- [] Add error handling with alert

## Logout
- [] Add api request for logout

## Navigation
- [] Add navigation view
- [] Create navigation middleware
- [] Add middleware to page.js

## Home page
- [] Implement homeView

## Market / Dashboard page
- [] Add HTML to template
- [] Add items api module
- [] Add get all items request
- [] Render items dynamically

## Create 
- [] Add HTML to template
- [] Add form submit handler
- [] Add api request for create

## Details 
- [] Add details view to page routes with itemId param 
- [] Add HTML to template
- [] Add get one api request
- [] Hide buttons when not owner
- [] Set href attribute for edit and delete links

## Edit 
- [] Add HTML to template
- [] Prepopulate values in the form using getOne request
- [] Add form submit handler
- [] Add api request for edit
- [] Redirect on successfull request

## Delete
- [] Use delete view without rendering template
- [] Show confirm dialog
- [] Add delete reuqest in items api
- [] redirect on successful deletion

## Notifications
- [] Setup notifications middleware
- [] Add middleware to page
- [] Add showNotification function to ctx
- [] Setup timeout ti hide notification in 3 seconds
- [] Replace all places where using alert with showNotifications