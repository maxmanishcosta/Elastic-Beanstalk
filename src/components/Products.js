// Importing React so we can use JSX and React features
import React from "react";
// Import the Product component to display individual products
import Product from "./Product";

// Products component receives an array of products and displays them in a grid
export default function Products({ products }) {
  return (
    // Grid container for all product cards
    <div
      style={{
        display: "grid", // used to create a grid layout
        gridTemplateColumns: "repeat(3, 1fr)", // Define the grid structure with 3 equal columns. 1fr (fractional unit) for equal width of each column; fractional unit is a flexible unit that divides the available space in the grid equally among the columns.
        gap: "24px", // Space between grid items
        marginTop: "24px", // Space above the grid
        alignItems: "stretch", // Make all grid items the same height; stretch to fill the available space of the grid cell
        padding: "12px", // Padding around the grid container for spacing
        background: "#e0f7fa", // Background color for the grid container; light cyan color for a fresh look.
      }}
    >
      {/* Map through the products array and render each product inside a wrapper */}
      {products.map((product) => (
        <div
          style={{
            height: "90%", // Make wrapper fill most of the grid cell
            background: "#f5f5f5", // Light gray background for contrast
            borderRadius: "10px", // Rounded corners for a modern look
          }}
          key={product.id} // Unique key for each product
        >
          {/* Render the Product component and pass product data as a prop */}
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
