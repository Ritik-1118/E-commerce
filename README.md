# E-commerce Web Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)

## Introduction
This is a full-featured E-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to browse products, add them to the cart, and make purchases securely.

## Features
- User Authentication and Authorization
- Product Management
- Advanced Filtering Options (Price, Category, Brand)
- Shopping Cart
- Order Management
- Payment Integration with Stripe

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS
- Redux



## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB
- npm or yarn
- Stripe account for payment integration

### Backend Setup
1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/ecommerce-app.git
    cd ecommerce-app/server
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET_KEY=your_jwt_secret_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. **Run the server:**
    ```sh
    npm run dev
    ```

### Frontend Setup
1. **Navigate to the frontend directory:**
    ```sh
    cd ../client
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the `frontend` directory and add the following:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```

4. **Run the application:**
    ```sh
    npm run dev
    ```

## Usage
Once the setup is complete, you can access the frontend at `http://localhost:5173` and the backend at `http://localhost:8000`.
