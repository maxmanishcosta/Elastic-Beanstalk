// Importing React library to use JSX and React features
import React from "react";
// Product component receives a single product object as a prop
export default function Product({ product }) {
  return (
    // Main container for each product card
    <div
      style={{
        border: "1px solid #ccc", // Light border for card
        padding: "16px", // Space inside the card
        margin: "10px", // Space outside the card for spacing Light gray background; line 25 in Products.js
        borderRadius: "8px", // Rounded corners
        background: "#fff", // White background for contrast
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)", // Subtle shadow for depth
        display: "flex", // Use flexbox for vertical layout
        flexDirection: "column", // Stack children vertically
        justifyContent: "space-between", // Space out content and button
        height: "100%", // Make card fill the grid cell
      }}
    >
      {/* Product image at the top of the card */}
      <img
        src={product.image} // Product image URL
        alt={product.name} // alt used for accessibility and SEO
        style={{
          width: "100%", // Image takes full width of card
          height: "220px", // Fixed height for uniformity
          objectFit: "cover", // Crop image to fill area
          borderRadius: "6px 6px 0 0", // Rounded top corners; 6px top-left, 6px top-right, 0 bottom-left, 0 bottom-right
          marginBottom: "12px", // Space below image
        }}
      />
      {/* Product details section */}
      <div>
        {/* Product name as a heading */}
        <h2 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
          {product.name}
        </h2>
        {/* Product price in bold */}
        <p style={{ fontWeight: "bold", margin: 0 }}>Price: {product.price}</p>
        {/* Product rating */}
        <p style={{ margin: "6px 0 0 0" }}>Rating: {product.rating}/5</p>
        {/* Product description for more info */}
        <p style={{ fontSize: "0.95rem", color: "#444", margin: "8px 0" }}>
          {product.description}
        </p>
      </div>
      {/* Add to cart button at the bottom */}
      <button
        style={{
          background: "#1976d2", // Blue background
          color: "#fff", // White text
          border: "none", // No border
          borderRadius: "4px", // Rounded button
          padding: "8px 16px", // Button padding
          cursor: "pointer", // Pointer cursor on hover
          fontWeight: "bold", // Bold text
          marginTop: "auto", // Push button to bottom
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

