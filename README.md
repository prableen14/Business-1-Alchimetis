# Alchimetis - ESG Report Project

This project is a web application for generating Environmental, Social, and Governance (ESG) reports. It allows users to upload CSV files, transforms the data, and displays the report in the Global Reporting Initiative (GRI) format. Additionally, users can download both the raw data and the generated report in CSV and PDF formats.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Firebase Configuration](#firebase-configuration)

## Features
- Upload CSV files for data input.
- Transformation of data to create GRI format reports.
- Download raw data and generated reports in CSV and PDF formats.
- User authentication using Firebase.

## Tech Stack
- React.js
- Bootstrap
- Sass
- Firebase (for authentication and data storage)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Business-1-Alchimetis.git
    ```
2. Install dependencies:
    ```bash
    cd Business-1-Alchimetis
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm run start
    ```
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Firebase Configuration
This project uses Firebase for authentication and data storage. To configure Firebase for your project, follow these steps:

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
2. Obtain your Firebase project configuration.
3. Create a file named `.env` in the project root and add your Firebase configuration:
    ```
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```
4. Enable the authentication and Firestore services in your Firebase project.

