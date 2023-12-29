# Tenzies Game

## Overview

Welcome to the **"Tenzies Game"** – a React project built to enhance my skills in developing React applications. This game involves 10 dice, allowing users to hold dice with the same number. Once the user clicks on a die, the timer starts in the background. The game displays the number of rolls it took the user to win, the time taken to win, and the best time so far. After completing the game, confetti falls on the screen for a festive celebration. Users can start a new game and roll the held dice using the "Rolls" button. Previous game records are stored in local storage for future reference.

# Website

Live Version [here](https://tenziesgame03.netlify.app/)

# Preview

<img src = "public\tenziesGame.gif">

## What I've Learned

This project has expanded my knowledge in React development, particularly in the following areas:

- **Local Storage Usage in React**: Implementing local storage to store and retrieve previous game records.

## Features

- **Interactive Dice**:
  Allows users to hold dice with the same number.

- **Game Stats**: Displays the number of rolls, time taken to win, and the best time so far.

- **Game Stats**: Adds a festive touch with confetti falling on the screen after completing the game.

- **Game Stats**: Records and retrieves previous game data for a personalized gaming experience.

## Getting Started

Embark on the journey of Tenzies Game by following these steps:

1. **Clone the Repository:**
   Open your terminal and run the following command to clone the repository to your local machine:

```
    git clone git@github.com:your-username/tenzies_game.git
```

2. **Navigate to Project Directory:**
   Move into the project directory using the following command:

```
    cd tenzies_game
```

3. **Install Dependencies:**
   Ensure you have all the necessary dependencies by running:

```
    npm install
```

4. **Start the Server:**
   Launch the server with the command:

```
    npm run dev
```

5. **Build and Deploy:**
   If you're ready to deploy, build the app with:

```
    npm run build
```

This will generate the necessary files for deployment.

6. **Open the Game:**
   Open your preferred web browser and navigate to the local host address displayed in your terminal. The default is often http://localhost:3000, but refer to your terminal output for the exact local host address.

Now, you're ready to roll and experience the thrill of Tenzies Game!🍳🎉

## Project Structure

The project is built using Vite and React with the following structure:

- **src**: Contains the source code for the project.
    - **components**: Houses React component files for modular development.
        - **Confetti.jsx**: Defines the Confetti component for the celebratory effect.
        - **Die.jsx**: Implements the Die component for rendering individual dice.
        - **Gamestats.jsx**: Manages the GameStats component to display game statistics.

    - **App.css**: Defines the styling rules for the entire application. 

    - **App.jsx**: Contains the main logic for the Tenzies Game. 

    - **index.css**: Styles the root HTML element. 

    - **main.jsx**: Renders the App component into the root HTML element. 

## Dependencies

Tenzies Game utilizes the following key dependencies to deliver an efficient and delightful user experience:

1. **[React](https://react.dev/):**
   A declarative, efficient, and flexible JavaScript library for building user interfaces.

2. **[Vite](https://vitejs.dev/)**
   A fast, opinionated web dev build tool that aims to provide a smoother development experience.

Feel free to explore each of these technologies to gain a deeper understanding of Tenzies Game's robust foundation.

# Author

Komal | Software Developer | [Portfolio](https://kaurkomal.com/) | [LinkedIn](https://www.linkedin.com/in/hssa03/)
