This application is a simple ExpressJs server that implements a password protected route to display a secret page. Here's a breakdown of its functionality.

Overview:
The app is a Node.js server built with the Express framework. It serves static files, processes form data, and uses middleware to check for a password before granting access to a secret page.

Features:
1. Static File Serving:
The app serves static files (e.g., HTML, CSS) from the public directory using express.static.

2. Password Protection:
A middleware function (passwordCheck) checks the password submitted via a POST request.
If the password matches "IFallInLove", the user is authorized to view the secret page.

3. Routes:
GET /: Serves the main page (index.html) where users can input a password.
POST /check: Processes the password input. If the password is correct, the user is redirected to the secret page (secret.html). Otherwise, they are redirected back to the main page.

4. Middleware:
The passwordCheck middleware intercepts requests to check the password and sets a flag (userIsAuthorised) based on its validity.

5. Body Parsing:
The app uses body-parser to parse URL-encoded form data submitted via POST requests.

6. Port:
The server listens on port 3000.

Screenshots:
![ss1](https://github.com/user-attachments/assets/fde9cd7a-3fec-49d8-9687-e4d0c433fddd)
![ss2](https://github.com/user-attachments/assets/ab0a69b5-7750-44c3-acb8-046c40f28256)
