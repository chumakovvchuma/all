const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "mySecret",
  baseURL: "http://[::1]:4000/graphql",
  clientID: "wa7YlIlg1VPDFzaNpAWfvF23YrESlFYU",
  issuerBaseURL: "https://chumakovv.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
