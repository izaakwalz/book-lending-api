# Book Directory api

This is an online book directory api for lending book to a user for a short period of time.

---

## Tasks and Assignment

This is the source code we used in this lesson: https://github.com/OkoyeApps/nodejs_learnable_crashcource, you are required to use the provided source code as the admin part of the system

Your mission, should you choose to accept it, is to add functionalities to this book directory system

## The functionalities include:

1.  The admin is suppose to add a total number of copies available for a particular book
2.  Registration of a user (assume you are to issue them a library id card, so how would you identify them)
3.  The user should be able to request for a book;
4.  When a book is requested by a user, we would want to decrease the count of the available copies for rent
5.  If a book's availability is zero, then we want to respond to the user that this book is not currently available for rent
6.  The user should be able to return the borrowed book.

---

Making use of nodejs and no framework, I was able to assing user a unique id with node <crypto>, hash user password and giving user a unique token on registration and login.

## Running the project

    $ node index.js or npm start

## Route Documentation 🚀

###### <b>DOCS ⚡:</b> <a href="https://documenter.getpostman.com/view/9943864/UVByHppq">read-routes-docs</a>

![screenshot](/booklend.png)
