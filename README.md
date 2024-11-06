



# Gadget Heaven

Welcome to Gadget Heaven! This project is a single-page application designed for gadget enthusiasts, offering a seamless experience to browse, add to cart, and manage a wishlist of various tech gadgets.

[Live Website](https://playful-meerkat-99f2e1.netlify.app/)  
[Requirement Document](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [React Fundamentals](#react-fundamentals)
- [Data Management](#data-management)
- [Setup Instructions](#setup-instructions)

## Overview

Gadget Heaven is built with React and styled using Tailwind CSS. This application provides users with functionalities like adding products to a cart, maintaining a wishlist, and viewing product details—all optimized with efficient data handling.

## Key Features

1. **Product Details View**: Users can view detailed information about each product, including images, specifications, pricing, and availability.
2. **Add to Cart and Wishlist**: Users can add gadgets to their cart and wishlist. Each gadget can be added only once to either list, preventing duplicates.
3. **Cart and Wishlist Management**: Users can view their selected items in a dedicated dashboard, where they can also remove items if needed.
4. **Dynamic Navbar Updates**: The cart and wishlist counts in the navbar dynamically update as items are added, providing real-time feedback.
5. **Persistent UI State**: The app uses Context API to manage the cart and wishlist globally, making the experience consistent across the site.

## Technologies Used

- **React** for building the SPA.
- **Tailwind CSS** for styling.
- **React Router** for routing.
- **React Context API** for global state management.
- **React Toastify** for providing alerts to users when they interact with the cart or wishlist.

## React Fundamentals

This project incorporates various React fundamental concepts:

- **Components**: The app is built using functional components, making each part of the UI modular and reusable.
- **Props**: Data is passed to child components using props for better component composition.
- **State Management**: Managed using `useState` and `useContext` to handle cart, wishlist, and product details.
- **React Router**: Used for navigation and dynamic routing of product details.
- **Context API**: Provides a shared context for cart and wishlist, accessible across the application.

## Data Management

- **Context API**: Used for managing cart and wishlist data globally, allowing any component to access and update these states.


