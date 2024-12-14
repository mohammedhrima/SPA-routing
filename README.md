# SPA Routing
This project demonstrates a simple Single Page Application (SPA) using dynamic routing. The server serves static HTML, JavaScript, and CSS files, and dynamically loads content based on the routes selected in the navigation bar.

### Project Structure
```
/static
    /home
        home.js
    /about
        about.js
    /user
        user.js
    style.css
    index.html
    routes.js
package.json
server.js
```
+ `/static/`: This directory contains all static assets for the application, including the HTML, JavaScript, and CSS files.

+ `home.js`: The content for the "Home" page.
+ `about.js`: The content for the "About" page.
+ `user.js`: The content for the "User" page.
+ `index.html`: The main HTML file, which contains the basic structure of the app and includes the navigation bar and script imports.
+ `routes.js`: A JavaScript file that contains the dynamic routing logic for loading the correct content based on the URL.
+ `server.js`: This is the server file that serves the static files and handles requests for dynamic routing.
+ `package.json`: The project’s configuration file, which lists the dependencies and scripts for running the project.

### How to Use:
```
    git clone https://github.com/mohammedhrima/spa-routing.git
```

+ Run the Server This project does not require installation of any dependencies. You can run the server directly using Node.js.
```bash
    cd spa-routing
```
```bash
    npm start 
```

+ to access the Application Open your browser and go to http://localhost:3000. You'll see a navigation bar with links to three pages:

    + Home
    + About
    + User
+ Click on the links, and the corresponding page content will be dynamically loaded into the app without reloading the page.

### How It Works
- Server-Side (server.js):

- The server.js file creates an HTTP server that serves static files and loads pages based on the route.
When a user navigates to a URL, the server checks if the requested file exists. If it does, it serves the file. If it doesn't, it serves index.html.
+ index.html request route.js that handle the dynamic routing:

+ When the user clicks a link (like "/home") or change the url, the JavaScript dynamically loads the corresponding content from files such as home.js, about.js, or user.js. Content Rendering (home.js, about.js, user.js):

+ Each JavaScript file (home.js, about.js, user.js) exports a function that returns HTML content. These functions are dynamically imported and rendered in the div#app element on index.html.
CSS (style.css):
+ The app includes a simple CSS file to style the navigation bar and the content area.
