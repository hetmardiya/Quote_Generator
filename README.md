## Het Maradiya

- [@Het_Maradiya](https://www.github.com/hetmardiya)

# Quote Generator [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This is a simple **Quote Generator** web application built using **React** and **Vite**. The app displays random quotes from a JSON dataset and allows users to copy the currently displayed quote to the clipboard.

## Features
- Displays a random quote on button click.
- Copy the currently displayed quote to the clipboard with one click.
- Uses **Tailwind CSS** for styling.

## Technologies Used
- React
- Vite
- Tailwind CSS
- JavaScript
- JSON data

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quote-generator.git


2. Navigate to the project directory:
   ```bash
   cd quote-generator
Navigate to the project directory:

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

5. Open the application in your browser at http://localhost:5173.

# JSON Dataset
The quotes.json file is located in the src/data folder. It contains 100 quotes with the following fields:

- id: Unique ID of the quote.
- quote: The quote text.
- author_name: Name of the author.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
