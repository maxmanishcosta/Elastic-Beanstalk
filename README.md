# React Store

A modern, responsive React web application that displays a grid of products with images, prices, ratings, and descriptions. This project is ideal for learning React fundamentals, component-based architecture, and inline styling.

## Features

- **Product Grid:** Displays a list of 30 products in a visually appealing grid layout.
- **Reusable Components:** Clean separation between `App`, `Products`, and `Product` components.
- **Dynamic Data:** Product data is generated programmatically for demonstration.
- **Responsive Design:** Uses CSS grid and flexbox for a modern look.
- **Sample Images:** Uses both real and placeholder images for products.

## Folder Structure

```
Assignment_1/
  public/
    index.html
  src/
    App.js
    components/
      Products.js
      Product.js
    Photos/
      Product 1/
      Product 2/
      Product 3/
  package.json
  README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app:**
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

## Usage

- Browse the product grid.
- Each card shows an image, name, price, rating, and description.
- Click "Add to cart" (button is for UI only, no cart logic implemented).

## Customization

- Add your own products or images in `src/Photos/` and update the data in `App.js`.
- Style components further as needed.

## Built With

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)

## Author

**Sagar Biswas**

---

Feel free to use, modify, and share this project for learning or as a starter template!
