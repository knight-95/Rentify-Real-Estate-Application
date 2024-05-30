# Real Estate Web Application Challenge

### Application Deployed Link: https://rentify-estate.netlify.app

Your Journey to a New Home Begins Here Explore a wide range of properties for buying and renting. From cozy apartments to spacious family homes, we have the perfect match for your lifestyle and budget.

![image](https://github.com/knight-95/Rentify-Real-Estate-Application/assets/79582395/a98a8e3f-2db4-489d-b5a6-494ba199d6c3)

## Both Fronted and Backend are Hosted at Netlify and Render respectively

• Application Deployed Link: https://rentify-estate.netlify.app

• Backend Deployed Link: https://rentify-real-estate-application.onrender.com/api/posts?city=Kolkata

• Sample Endpoints: 
  - For fetching all properties in Kolkata Location:
  
<img width="1255" alt="Screenshot 2024-05-27 at 02 15 48" src="https://github.com/knight-95/Rentify-Real-Estate-Application/assets/79582395/f4f238d0-7ca1-48c7-bdbb-3beae3b7a695">

  - https://rentify-real-estate-application.onrender.com/api/posts?city=Kolkata

<img width="1261" alt="Screenshot 2024-05-27 at 02 16 35" src="https://github.com/knight-95/Rentify-Real-Estate-Application/assets/79582395/c3cacd7d-26b7-4743-ac5e-7a922724746a">


## Table of Contents

- [Part I: Basic Application (Mandatory)](#part-i-basic-application-mandatory)
- [Part II: Add-On Features (Advanced)](#part-ii-add-on-features-advanced)
- [Part III: Extra (Optional): Bonus Section](#part-iii-extra-optional-bonus-section)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)

## Overview

The application is divided into three parts:

- **Part I - Basic Application**: The backend and frontend components of the basic application.
- **Part II - Add-On Features**: Implemented additional features to enhance the basic application.
- **Part III - Extra**: Implemented optional bonus features for extra credit.

## Part I: Basic Application (Mandatory)

### Features

- **User Authentication**:
  - Login
  - Register (Seller or Buyer)

- **Property Management for Sellers**:
  - Post properties with details (e.g., place, area, number of bedrooms, bathrooms, nearby hospitals, colleges, etc.)
  - View, update, and delete posted properties

- **Property Browsing for Buyers**:
  - View all posted properties
  - Indicate interest in properties by clicking "Save Property" to view seller details and save property details in profile
  - Apply filters based on property details

## Part II: Add-On Features

Added additional fields such as place, area, number of bedrooms, bathrooms, nearby hospitals, Latitude, Longitude, etc.

## Technology Stack

- **Frontend**: React, HTML, CSS, etc.
- **Backend**:  Node.js, Express.js
- **Database**:  MongoDB

## Installation

**Clone the repository**:
   ```bash
   git clone https://github.com/knight-95/Rentify-Real-Estate-Application.git

For running backend:

   cd api
   npm i
   Start the server by running : nodemon app.js

For running frontend:

   cd client
   npm i
   Start the frontend by running : npm run dev
