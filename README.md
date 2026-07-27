# Redux Shopping Cart

A modern Shopping Cart web application built using **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS**, and **Fake Store API**.

This project demonstrates how global state management can be implemented using Redux Toolkit in a real-world React application. Users can browse products, view product details, add products to the cart, update quantities, remove products, and clear the cart. The project also includes authentication using Local Storage and protected routes.

---

# Live Demo

**Website:**  
(https://redox-lime.vercel.app/signin)
---

---

# Project Overview

Managing state becomes challenging as React applications grow larger. Passing data between multiple components using props can make the application difficult to maintain.

This project solves that problem by using **Redux Toolkit**, which provides a centralized store for managing shared application state.

Instead of passing data through multiple components, every component directly communicates with the Redux Store.

The project demonstrates practical implementation of modern React development practices including:

- Redux Toolkit
- Global State Management
- Protected Routing
- API Integration
- Responsive User Interface

---

# Features

- User Authentication
- Protected Routes
- Product Listing
- Product Details
- Shopping Cart
- Add To Cart
- Remove From Cart
- Increase Quantity
- Decrease Quantity
- Clear Cart
- Live Cart Count
- Total Price Calculation
- Responsive Design
- API Integration

---

# Technologies Used

Frontend

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS

State Management

- Redux Toolkit
- React Redux

Routing

- React Router DOM

API

- Axios
- Fake Store API

Form Handling

- React Hook Form

Icons

- React Icons

Deployment

- Vercel

---

# Project Structure

```
src
│
├── components
│   ├── MainLayout.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── SignIn.jsx
│   └── SignUp.jsx
│
├── Redux
│   ├── store.js
│   └── cartSlice.js
│
├── routes
│   └── AppRoutes.jsx
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Redux Folder Structure

```
Redux

store.js

cartSlice.js
```

### store.js

Creates the Redux Store using `configureStore()`.

### cartSlice.js

Contains:

- Initial State
- Reducers
- Actions
- Slice Configuration

---

# Redux Data Flow

```
User Click

        │

        ▼

dispatch(addToCart())

        │

        ▼

Action

        │

        ▼

Reducer

        │

        ▼

Redux Store Updated

        │

        ▼

React Re-renders

        │

        ▼

Updated User Interface
```

---

# Screenshots

## Login Page

(Add Screenshot Here)

---

## Home Page

(Add Screenshot Here)

---

## Products Page

(Add Screenshot Here)

---

## Product Details Page

(Add Screenshot Here)

---

## Shopping Cart

(Add Screenshot Here)

---

## Redux Folder

(Add Screenshot Here)

---

# Redux Concepts Used

This project implements the following Redux Toolkit concepts:

- configureStore()
- createSlice()
- initialState
- Reducers
- Actions
- Payload
- Dispatch
- useDispatch()
- useSelector()
- Provider
- Global State Management

---

# How Redux Works in This Project

When the user clicks **Add To Cart**, the following sequence takes place.

```
User Clicks Add To Cart

↓

dispatch(addToCart(product))

↓

Action is Sent

↓

Reducer Executes

↓

Redux Store Updates

↓

Navbar Updates

↓

Cart Updates

↓

React Automatically Re-renders
```

The same Redux Store is shared between the Products page, Product Details page, Navbar, and Cart page. Because of this, there is no need to pass data through multiple components using props.

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/redux-shopping-cart.git
```

Move into the project

```bash
cd redux-shopping-cart
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production version

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# Learning Outcomes

Through this project I learned:

- Difference between Local State and Global State
- State Management using Redux Toolkit
- configureStore()
- createSlice()
- Reducers
- Actions
- Payload
- Dispatch
- useDispatch()
- useSelector()
- Provider
- React Router
- API Integration
- Authentication
- Protected Routes
- Shopping Cart Implementation
- Deployment using Vercel

---

# Challenges Faced

During development I faced several practical challenges.

- Understanding the Redux data flow
- Difference between local and global state
- Managing cart quantity updates
- Connecting Provider correctly
- Reading Redux state using useSelector()
- Dispatching actions from multiple pages
- Maintaining synchronized cart count in Navbar
- Deploying the project on Vercel
- Configuring the correct Root Directory during deployment

These challenges helped me gain practical understanding of Redux Toolkit and React application architecture.

---

# Future Improvements

Possible future enhancements include:

- User Profile
- Wishlist
- Product Search
- Category Filter
- Payment Gateway
- Order History
- Dark Mode
- Persistent Redux Store
- Backend Authentication
- Admin Dashboard

---

# References

Official Redux Documentation

https://redux.js.org/

Redux Toolkit Documentation

https://redux-toolkit.js.org/

React Documentation

https://react.dev/

React Router Documentation

https://reactrouter.com/

Axios Documentation

https://axios-http.com/

Fake Store API

https://fakestoreapi.com/

---

# Author

**Shikhar Mishra**

B.Tech Computer Science Engineering

CGC University, Mohali

GitHub:
(Add GitHub Profile Link)

LinkedIn:
(Add LinkedIn Profile Link)

---

Thank you for reviewing this project.
