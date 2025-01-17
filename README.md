# 2048 Game

This project is a classic implementation of the **2048 game**, built with a focus on smooth user experience.

The primary purpose of this project was to gain hands-on experience in working with **CSS animations**.

[Demo](https://bt-diana.github.io/2048/)

## Gameplay

### Objective
Combine tiles with the same number to create higher-value tiles. There are no limits — reach as high as you can!🚀

### Rules
- **Move Tiles:** Use the arrow keys to slide all tiles in one direction: Up, Down, Left, or Right.
- **Merge Tiles:** When two tiles with the same number collide during a move, they merge into one tile with the sum of their values.
- **Score Points:** Each merge adds the value of the new tile to your score.
- **Game Over:** The game ends if there are no more valid moves (no empty spaces and no adjacent tiles with the same number).

## Getting Started

This project is in active development. To try out the current version locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/bt-diana/2048.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 2048
   ```
3. Install all dependencies:
   ```bash
   npm install
   ```
4. To builds the project and start a local web server run the following commands:
   ```bash
   npm run build
   ```
5. Go to the `dist` directory and open the `index.html` file in your browser.

## Technologies Used

- HTML
- CSS
- JavaScript
- Webpack

## Project Architecture

The project follows the **Model-View-Controller (MVC)** pattern.

## License

This project is licensed under the MIT License.
