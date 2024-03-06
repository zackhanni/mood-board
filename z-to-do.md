# Things i need to do to fix up this app

- use new sata format in FeelingQuestionData
- set up username and password login system
- finish fleshing out data in general. many more inputs to make
- have optional text input field at the end
- change contact page tabs to only change when non active tab is selected.
- change "settings" to "account" or something
- change name (in settings) to "what would you like to be called?
- update other routes like posts to find posts from current user

emily- "name of app should be mood board" and "pay me when 50 percent"

## notes

for google authentication basic login - https://www.youtube.com/watch?v=AbUVY16P4Ys

video at 8min 30sec goes over moving to production site for live google auth

## feeling wheel ref

https://feelingswheel.com/

## user database

- added security my changing mongodb network access away from 0.0.0.0/0 (which lets anyone access the server)
- set up way for users to see name change right away
- set up ability to change email and confirm new email

## database next stems

- learn and understand next-auth
  https://next-auth.js.org/getting-started/example

- learn - what is prisma
- learn - getting started with mongo db

## creating a new user with mongo, prisma

https://www.youtube.com/watch?v=JYcOAzs_Q4A

## prisma

i get warnings - warn(prisma-client) This is the 10th instance of Prisma Client being started. Make sure this is intentional.

## Security

change api routes (getEntries, makeEntry, etc) to get data based on userId and not email address.

maybe create a different api route for getUserId to get a user's id based on their email. but would that still have security risks?

maybe find a way to store the database userId in a token or something when the user logs in.
