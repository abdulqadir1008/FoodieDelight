# FoodieDelight

FoodieDelight is a comprehensive food delivery application that manages restaurants and their menus. This project includes a backend API, a web application, and a mobile app for iOS and Android.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend (NestJS with GraphQL)](#backend-nestjs-with-graphql)
  - [Web App (ReactJS)](#web-app-reactjs)
  - [Mobile App (React Native Expo)](#mobile-app-react-native-expo)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Project Structure

- `/backend` - NestJS with GraphQL API
- `/webapp` - ReactJS with Bootstrap
- `/mobile` - React Native (Expo) for iOS and Android

## Getting Started

### Backend (NestJS with GraphQL)

1. Navigate to the backend directory:
   ```
   cd foodiedelight-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables in `.env` with your configuration

4. Start the development server:
   ```
   npm run start:dev
   ```

The GraphQL API will be available at `http://localhost:3000/graphql`

### Web App (ReactJS)

1. Navigate to the webapp directory:
   ```
   cd foodiedelight-web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the `REACT_APP_API_URL` with your backend API URL

4. Start the development server:
   ```
   npm start
   ```

The web app will be available at `http://localhost:3000`

### Mobile App (React Native Expo)

1. Navigate to the mobile directory:
   ```
   cd foodiedelight-mobile
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `app.config.js.example` to `app.config.js`
   - Update the `extra.apiUrl` with your backend API URL

4. Start the Expo development server:
   ```
   npm start
   ```

5. To run on a mobile device:
   - Install the Expo Go app on your iOS or Android device
   - Scan the QR code displayed in the terminal or browser with the Expo Go app

6. To run on an emulator/simulator:
   - Press 'a' for Android emulator
   - Press 'i' for iOS simulator (macOS only)

## Features

- Add, modify, and delete restaurants
- List restaurants with pagination
- Search restaurants by name or cuisine
- Manage restaurant menus
- User authentication and authorization
- Responsive design for web app
- Cross-platform mobile app

## API Documentation

The backend uses GraphQL. You can explore the API using GraphQL Playground at `http://localhost:3000/graphql` when running the backend locally.

Key queries and mutations:

- `restaurants`: Get a list of restaurants
- `createRestaurant`: Add a new restaurant
- `deleteRestaurant`: Remove a restaurant

For detailed schema information, refer to the GraphQL schema in the backend code or use the GraphQL Playground's documentation explorer.


## Deployment

### Backend

1. Build the NestJS app:
   ```
   cd backend
   npm run build
   ```

2. Start the production server:
   ```
   npm run start:prod
   ```

### Web App

1. Build the React app:
   ```
   cd webapp
   npm run build
   ```

2. The built files will be in the `build` directory. Serve these files using a static file server.

### Mobile App

1. Build the Expo app:
   ```
   cd mobile
   expo build:android
   expo build:ios
   ```

2. Follow the Expo documentation for publishing to app stores.

## Technologies Used

- Backend: NestJS, GraphQL, TypeORM
- Web App: ReactJS, Bootstrap, Apollo Client
- Mobile App: React Native, Expo, Apollo Client
- Database: PostgreSQL
- Testing: Jest, React Testing Library
- Version Control: Git

## Contributing

We welcome contributions to FoodieDelight! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

For any questions or support, please open an issue in the GitHub repository.
