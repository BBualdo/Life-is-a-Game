﻿# Life is a Game

This is an application where users can set missions for themselves, track their progress and earn XP and levels based on the mission's difficulty level. The app also features a built-in achievement system.

## Table of contents

- [Overview](#overview)
    - [Screenshots](#-screenshots)
    - [Features](#-features)
- [My process](#my-process)
    - [Built with](#-built-with)
    - [What I have learned](#what-i-have-learned)
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### 📸 Screenshots

#### Desktop
<img src="./screenshots/login-desktop.png" width="500"  alt="" />
<img src="./screenshots/menu-desktop.png" width="500"  alt="" />
<img src="./screenshots/missions-desktop.png" width="500" alt="" />
<img src="./screenshots/achievements-desktop.png" width="500" alt="" />
<img src="./screenshots/profile-desktop.png" width="500" alt="" />

#### Mobile
<img src="./screenshots/login-mobile.png" width="200" alt="" />
<img src="./screenshots/menu-mobile.png" width="200"  alt="" />
<img src="./screenshots/missions-mobile.png" width="200" alt="" />
<img src="./screenshots/achievements-mobile.png" width="200" alt="" />
<img src="./screenshots/profile-mobile.png" width="200" alt="" />

### 🧐 Features

- Slider-like tutorial showing main concepts of an app
- Creating, tracking, updating and deleting missions
- Gaining XP and leveling up
- Earning achievements
- Editing profile information (Avatar, Bio, Current Goal, etc.)
- Authentication and Authorization (soon)
- External Providers Auth (Facebook, Google, GitHub) (soon)

## My process

#### Backend implementation
1. Defined Models with Data Annotations and created ```DbContext``` using **Entity Framework Core** with **ASP.NET Identity**.
2. Ensured that Achievements are created on Database creation.
3. Created DTOs for login, register and reset password purpose.
4. Configured **ASP.NET Identity**.
5. ```AuthService``` implementation to store responsibility for actions like login, logout, registering and password recovery. For now, I only implemented methods responsible for login, register and logout. Wondered what these methods should return, so I created ```AuthOperationResult``` class which purpose is to store results of auth operations.
6. Implemented ```AuthController``` with basic authorization endpoints.
7. Created endpoint to get current logged-in user info (```UserDto```).
8. Refactored login and sign-up **Zod schemas** (like including regex validators in password), created ```UserService``` React class and added methods for login and register, which for now are just sending POST request via **Axios** without error and loading handling or routing. Successful response adds token in Cookies. I also had to provide CORS policy.
9. Now the most difficulty part has begun - refactoring half of an existing Next.js/Redux codebase to handle authentication and authorization and make space for existing real database data and for not implemented yet. I started with auth, because it's the hardest and most important thing. I deleted all Redux files except store and created ```authSlice``` to keep currently logged-in user data, which forced me to consider refactoring ```useUser``` hook and every component which uses user data. Furthermore, I have to handle routing unauthorized users to login page and authorized from login page if they try to reach it directly via URL.
10. Handled routes protection using Next.js ```middleware```.
11. Added fetching current user data to form submit logic and configured **Redux-Persist** to keep user data upon refreshing page without need to make extra requests.
12. Added toasts (snackbars) upon successful registering and errors as well. I have also taken care of loading state until request is performed to prevent user from taking any actions like spamming login button, etc.
13. Introduced **RememberMe** checkbox in login form.

### 🧰 Built with

- Next.js
- .NET
- TailwindCSS
- RadixUI
- Framer-Motion
- Redux Toolkit
- Axios
- React Hook Form
- Zod
- Typescript
- C#
- ASP.NET Identity
- Entity Framework Core
- SQL Server


### What I have learned

#### ASP.NET Identity:

- Difference between ```AddIdentity```

### Useful resources
Coming soon...

## Author
Coming soon...

## Acknowledgments
Coming soon...