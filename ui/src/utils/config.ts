export const baseUrl = "https://liagapi.azurewebsites.net/api";
export const externalParams = {
  github: {
    clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    redirectUri: "/github-callback",
  },
  facebook: {
    clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
    redirectUri: "/facebook-callback",
  },
  google: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirectUri: "/google-callback",
  },
};
