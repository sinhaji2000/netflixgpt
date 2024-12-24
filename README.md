# create-react-app netflix-gpt using yarn
1. Initialize the project using Create React App with Yarn:
    ```sh
    yarn create react-app netflix-gpt
    ```

2. Configure Tailwind CSS:
    - Install Tailwind CSS and its dependencies:
      ```sh
      yarn add tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      ```
    - Add the paths to all of your template files in the `tailwind.config.js` file:
      ```js
      module.exports = {
         content: [
            "./src/**/*.{js,jsx,ts,tsx}",
         ],
         theme: {
            extend: {},
         },
         plugins: [],
      }
      ```
    - Add the Tailwind directives to your CSS file:
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
   