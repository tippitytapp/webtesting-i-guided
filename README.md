# Hubs Web API

Guided project for **Web Testing I** module.

In this module we will cover the basics of automated testing and use `jest` to write unit tests.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.

Please follow along as the instructor uses _Test Driven Development (TDD)_ to implement the `add()` feature of a simple `calculator`.


- [ ] - install jest `npm i jest -D`
- [ ] - modify test script to say `"test":"jest --watch"`

## User Stories

```
As a `role`
I want feature [a]
    and feature [b]
So tha i can do [a]
    and i can do [b]

Scenarios

Given -- valid username and valid password
When -- user clicks login
Then -- user is logged in
    and a session is created
    and a cookie is sent with the session id

Given -- valid username and incorrect password
When -- user clicks login
Then -- user is NOT logged i
    and a message is sent with http status code 401
    the user is redirected to the login page
    and the user is shown the invalid credentials message

```

# Test Driven Development (TDD)

- [ ] - Write failing test
- [ ] - make it pass
- [ ] - refractor