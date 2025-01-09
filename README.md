# My tailwind passion project

This is my passion project through which I have learned much about React and by doing so proving my technical skills for my learning outcomes.
I used React and Tailwind technologies in an effort to learn something new. This experience has taught me much and I am glad I undertook this task the way I did. Additionally, I am grateful for all the help I received while making it.


# Create a React Application

To create a new React app, run the following commands: 
"npx create-react-app my-tailwind-app
cd my-tailwind-app".

# Make sure Node.js and npm are installed on your device.

Run these commands in your terminal "node -v
nmp -v" to confirm installation.


# Install Tailwind CSS

This command installs Tailwind: "npm install -D tailwindcss postcss autoprefixer".

# Generate Tailwind Configuration Files

This command generates Tailwind configuration: "npx tailwindcss init".

# Configure Tailwind CSS
Edit the tailwind.config.js file to include paths to ALL files that will use Tailwind classes. Update the content property as follows:
"/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
".

# Add Tailwind Directives to your CSS file
Open the index.css file in the src folder and add the following Tailwind directives:

 "@tailwind base;
@tailwind components;
@tailwind utilities;
".

# Start the Development Server
To start your development server, run the command 

"npm start".

# Inspired by: 
https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
