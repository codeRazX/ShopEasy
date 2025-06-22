# 🛒 React E-commerce App

Web-based online store built with React. It allows users to browse products, add them to the cart, increase or remove quantities, and manage a simulated checkout experience.

## 🚀 Features

- Dynamic product rendering
- Add and remove items from the cart
- Automatic quantity updates
- Shared state using `useOutletContext` across components
- Responsive layout 
- Behavior testing with Vitest + React Testing Library

## 🧪 Testing

The `Item` component is covered by unit tests that validate:

- Button text updates correctly after adding to cart
- Quantity increases if the product already exists in the cart
- Realistic integration using `<Outlet context={...} />` to simulate routing context
