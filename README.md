Life is a Game (LIAG) is an app that let's user set goals and gain XP for it to keep motivation up - just like in game.

### My process

1. I configured my project with **Next.js**, **TypeScript**, **TailwindCSS** and **Framer Motion**.

#### Login/Signup Pages

2. I started with the background. I have picture of the entire app in my head and I want it to be Cyberpunk-like style. So I grabbed a animated gif from the internet and put it in the background of the welcome page.
3. Then I built some buttons to look like in Cyberpunk menu interface (that was tricky CSS part) and provided some custom fonts from the internet.
4. Next I wanted to provide some logo on the top of the form. But then I changed my mind and for now, the logo is just title of the page with pretty arcade font and **TypeAnimation** library.
5. After that I imported and customized form from **shadcn/ui** using **Zod** schema. It was time to correctly organize **Next** folder structure to correctly route pages whenevener user want to log in or sign up.
6. Then I brought **Framer Motion** and added some animations and transitions to make login page look more interesting.
7. I deployed my page to test the Performance and Accessibility... and it was horrible. First, I had to switch background gif into a video and loop it to speed up loading page. And then I made necessary improvements to Accessibility, like hiding some arias and give aria-label into buttons like "Sign in with Google".
8. When I've done entire login page I set up routing between /login and /signup pages.
9. First, I implemented Appwrite Auth, but my friend Konrad will take care of the backend and auth providers. Meanwhile, I started building app UI.

#### Home Page

1. I've styled the Navbar with routes, logo and logout button.
2. Came up with fresh game-like main menu idea.
3. Added background to main menu and fixed autoplay of videos.
