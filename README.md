# Life is a Game

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
- Verbose difficulty level system - user adjust slider getting hints in which cases that difficulty would be appropriate
- Gaining XP and leveling up
- Earning achievements
- Editing profile information (Avatar, Bio, Current Goal, etc.)
- Authentication and Authorization
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
14. Updated User to store external providers IDs and deleted **is_unlocked** row from **UserAchievements** table, because record presence is already a sign that achievement is unlocked.
15. Created ```AchievementsRepository```, ```AchievementsService``` and ```AchievementsController``` to get all achievements as well as those unlocked by user, and to unlock specific achievement.
16. Refactored frontend for handling achievements from database. When user logs in and goes into **Achievements** page, React ```useAchievements``` custom hook is calling ```AchievementsService``` for fetching fresh **Achievements** and **UserAchievements** data, saves them in **Redux** state, which is also saved in localStorage. I have mapped **UserAchievements** to JS Map for faster unlocked achievements searching. Then achievements are compared to user achievements to determine, which are unlocked and when. 
17. Created Repository => Service => Controller for **Missions** management. First, I set up assigning missionId Foreign Key in Subtasks manually in Dto object, but then I have made some research about **EF Core Navigation Properties**, so I have added ```public Mission Mission { get; set; }``` into my Subtask Model class. Now it sets missionId automatically. However, I have problem when trying to update Mission with subtasks, probably because lack of subtask management layer, so that's what I was going to do.
18. Assigned empty list to ```List<Subtask>``` in Mission model to avoid nullable checks.
19. When updating mission, I had to insert login to manually determine which subtask exists in mission already, which one is new and which one is missing, so it can be removed. I decided to make subtask ID mandatory for creating new one to simplify the process. I'm going to use **uuid** in React to achieve this.  
20. Created TypeScript ```IMission``` and ```ISubtask``` models as well as DTOs for adding and updating missions purposes, and also ```MissionsService``` class with necessary methods and finally ```useMisssions``` hook to centralize missions data. Then I implemented Redux ```missionsSlice``` and ```selectedMissionSlice``` again. After reworking some variables, filtering and other code parts to fit fresh approach, I've successfully managed displaying missions with all details and selecting missions to work.
21. Refactored ```CreateMissionForm``` and Zod Schema to fit current data expected and returned from API. Adding missions works.
22. Meanwhile, I found out that despite token being present in cookies it can be expired which prevents user from performing authorized operation. Have to keep this in mind and introduce refreshing tokens.
23. Refactored ```EditMissionForm``` and created separate Zod Schema to fit current data expected and returned from API. Updating missions works.
24. Refactored deleting missions.
25. Refactored toggling subtasks' completion.
26. Refactored completing mission.
27. Uncommented mini-modal invoked by click on the avatar in navbar, which lets user log out from any page. However, I had to introduce ```isLoggedOut``` property in Redux ```authSlice``` state, because logging out sets various state as null and in custom hooks I'm checking if specific state is null to decide if request should be made. Without that property, when user was logging out, ```useUser``` hook performed request for getting current user data.

#### NOTE: Every operation sends requests to API and updates the data in Database, however to prevent redundant data fetching after each update I'm using Redux-Persist to update UI. After user logout Redux is clearing all information, so after logging in fresh data is fetched and saved in Redux again.

28. ```ILevelsService``` implementation with method responsible for updating user's xp and level accordingly.
29. Created ```UserController``` with ```AddXp``` endpoint and tested it with **Swagger**.
30. Introduced React ```UserService``` and invoked it's ```addXp``` method into ```completeMission``` function. I also refactored returned data from ```AddXp``` endpoint from entire user object to ```xp```, ```level``` and ```totalXpGained```, which are updated in Redux user state.
31. Taken care of incrementing **Missions Added** and **Missions Completed** stats.
32. Implemented logic for unlocking achievements. ```AchievementsService``` gets user's and achievement's ID and unlocks it for that user. In React, I centralized logic for finding and unlocking achievements if they are not already achieved by using ```useAchievementUnlocker``` custom hook. API endpoint returns ```AchievementUnlockDto``` with ```UserAchievement``` ID, ```Achievement``` title and requirements and updated XP and Level to update values in Redux and affect UI accordingly. For now, I only tested it on 'Complete Tutorial' achievement.
33. I extended ```Achievement``` table with **Key** property to identify achievements safer. Now, ```findAndUnlock``` method in ```useAchievementUnlocker``` hook accepts that key instead of hard coded id which can be changed over time (like migrating from development to production).
34. I have renamed ```findAndUnlock``` method to ```tryUnlockAchievement```, because it's more verbose. Naming is the most difficult part of programming, they say. I also separated achievements for completing missions to ```checkMissionAchievements```, just not to bomb ```missionComplete``` function with a lot of code.
35. Achievements for leveling up has been moved into ```checkLevelAchievements``` function, called in Main Menu, but it should be called in more common place or in multiple places to ensure that user gets the achievement wherever he is. I will come back to that later, because I have to implement profile editing for one of achievements.
36. Created ```IProfileService``` to handle profile edit. In React same procedure - DTO model, ```UserService``` extended with ```updateProfile``` method, accepting **firstName**, **lastName**, **currentGoal** and **bio**, and also Redux reducer function that updates user info locally.
37. At this moment, I realised that ```authSlice``` is actually not a good naming, because in fact, it mainly operates on user object, so I changed it to ```userSlice```.
38. Handled profile updating in React as well as errors by introducing ```OperationResult``` object returned from that endpoint. I also have to return it from ```AuthService``` operations to make error handling easier.
39. Handled avatar updating by updating ```ProfileService```, ```UserController``` and Redux ```userSlice```. Avatar local path is sent to API and updated in DB as AvatarURL. In future user will be able to upload his own profile images.
40. Added remaining achievements checks and centralized achievement unlock check in ```useAchievementUnlocked``` by passing functions into ```useEffect```. Then I invoked that hook in every common component to make sure user unlocks achievement as soon as he meets requirements.
41. Added profile UI for managing linked external providers. It checks if user has Google ID, Facebook ID or GitHub ID to determine if switch should be checked or not. I also modified ```UserDto``` to include those IDs.

### 🧰 Built with

- Next.js
- .NET
- TailwindCSS
- RadixUI
- Framer-Motion
- Redux Toolkit
- Redux-Persist
- Axios
- React Hook Form
- Zod
- Typescript
- C#
- ASP.NET Identity
- Entity Framework Core
- SQL Server


### What I have learned

- Difference between ```AddIdentity```, ```AddIdentityCore``` and ```AddDefaultIdentity```.
- Reminded about using ```Map``` and ```Array.reduce()``` function to sum things up without having to create temporary variable.
- Meaning of **Entity Framework Core** Navigation Properties and that EF is not so good at updating nested objects
- Tokens doesn't disappear from cookies just like in Swagger, they just expire and that has to be handled
- Using ```Set``` to store unique values and manage them easily

### Useful resources
Coming soon...

## Author
Coming soon...

## Acknowledgments
Coming soon...