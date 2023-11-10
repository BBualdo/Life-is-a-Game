Life is a Game (LIAG) is an app that let's user set goals and gain XP for it to keep motivation up - just like in game.

### My process

1. I configured my project with **Next.js**, **TypeScript**, **TailwindCSS** and **Framer Motion**.

#### Login/Signup Pages with Authentication

2. I started with the background. I have picture of the entire app in my head and I want it to be Cyberpunk-like style. So I grabbed a animated gif from the internet and put it in the background of the welcome page.
3. Then I built some buttons to look like in Cyberpunk menu interface (that was tricky CSS part) and provided some custom fonts from the internet.
4. Next I wanted to provide some logo on the top of the form. But then I changed my mind and for now, the logo is just title of the page with pretty arcade font and **TypeAnimation** library.
5. After that I imported and customized form from **shadcn/ui** using **Zod** schema. It was time to correctly organize **Next** folder structure to correctly route pages whenevener user want to log in or sign up.
6. Then I brought **Framer Motion** and added some animations and transitions to make login page look more interesting.
7. I deployed my page to test the Performance and Accessibility... and it was horrible. First, I had to switch background gif into a video and loop it to speed up loading page. And then I made necessary improvements to Accessibility, like hiding some arias and give aria-label into buttons like "Sign in with Google".
8. When I've done entire login page I set up routing between /login and /signup pages.
9. I decided to use **Appwrite** in this project. So I configured my project with Appwrite and set up adding new user to Database.
10. I've set up **AppwriteService** class to organize my code. This class has methods for logging in, signing up, etc. Then I'm using these methods in Signup and Login Forms to create or login user.
11. Logging in and signing up routes user into dashboard. But if user is not authenticated, typing exact url in the browser will still route user into Login Page.
