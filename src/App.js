// Import React so we can use JSX and React features
import React from "react";
// Import the Products component to display the list of products
import Products from "./components/Products";

// Array of product objects, each representing a product in the store
const productsData = [
  {
    id: 1,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: "$22.3",
    rating: 4.1,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 2,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    rating: 3.9,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Solid Gold Petite Micropave",
    price: "$168",
    rating: 3.9,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  // The rest of the products are generated with placeholder data and images
  ...Array.from({ length: 27 }, (_, i) => ({
    // ...Array is used to create multiple similar product objects and .from() generates an array of products.
    // length is set to 27 to create a total of 30 products including the first three.
    /* 
    In (_, i) => ..., the underscore _ is just a placeholder for the first argument, which we are not using.
    We use `_` as a variable name when we want to ignore a function argument that we don’t need.  
    JavaScript requires us to include all arguments in the function signature, even if we only use one of them.  
    By convention, `_` signals to other developers that this argument is intentionally unused.
    For example, in `(_, i) => ...`, we only care about `i` (the index), but the function still receives the first argument, so we use `_` as a placeholder.  
    It helps make the code more readable and shows that the first argument is not important in this context.
  */
    // i is used to generate unique values for each product. example: Product 4, Product 5, ...
    id: i + 4,
    name: `Product ${i + 4}`,
    // Generate a price based on the index * 10, starting from $40 for Product 4, $50 for Product 5, $60 for Product 6, ...
    price: `$${(i + 4) * 10}`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    /*
  The expression (Math.random() * 2 + 3).toFixed(1) is used to generate a random number between 3.0 (inclusive) and 5.0 (exclusive).

  The '2' sets the range width (max - min).
  
  Math.random() generates a value from 0.0 (inclusive) up to, but not including, 1.0 (exclusive).
  Math.random() * 2 generates a value from 0.0 (inclusive) up to, but not including, 2.0 (exclusive).
  So, min = 0.0, max = 2.0 (exclusive).

  When we add 3:
  The range becomes from 3.0 (inclusive) up to, but not including, 5.0.
*/
    description: `Description for Product ${
      i + 4
    }. This is a sample product description for demonstration purposes.`,
    image: `https://picsum.photos/300/200?random=${i + 4}`,
    // Using a random image URL from Picsum to simulate product images, example: https://picsum.photos/300/200?random=4, https://picsum.photos/300/200?random=5, ...
  })),
];

// App component is the main/root component of the application
export default function App() {
  return (
    <div>
      {/* Store title with some custom styles */}
      <h1
        style={{
          textAlign: "center", // Center the title
          textDecoration: "underline", // Underline for emphasis
          color: "#1976d2", // Brand color
          fontSize: "2rem", // Larger font size
          margin: "20px 0", // Space above and below; 20px top/bottom, 0 left/right
          background: "#e0f7fa", // Light gray background for the title
          padding: "10px", // Padding around the title for spacing
        }}
      >
        Sagar's Store
      </h1>
      {/* Render the Products component and pass the products data as a prop */}
      <Products products={productsData} />
    </div>
  );
}
