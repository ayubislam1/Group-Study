# Online Group-Study Application

Welcome to the **Online Group-Study** web application! This project is a comprehensive platform designed to allow users to create, complete, and grade assignments collaboratively. Developed using the MERN stack, this application demonstrates proficiency in full-stack web development and modern design principles.

## Purpose

This project was built as part of a job assessment for **BJET Inc.** and showcases my ability to develop a full-stack application with secure user authentication and dynamic data interactions.

## Live URL

[**Client-Site**](https://job-assignment-619c8.web.app/)

## Key Features

### General Features

- **User Authentication:** Secure login and registration using email/password and Google OAuth.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.
- **Theme Toggling:** Light and dark mode toggle functionality for a personalized user experience.
- **Elegant UI:** Modern design with proper alignment, spacing, and color contrast for a polished look.

### Navbar

- Conditional rendering of login/logout buttons.
- Displays user profile picture and name upon successful login.
- Routes for:
  - Assignments
  - Create Assignment
  - My Submitted Assignments
  - Pending Assignments

### Pages

#### Assignments Page (Public)

- Displays all assignments with thumbnails, titles, marks, and difficulty levels.
- Includes filter and search functionalities.
- Buttons to view, update, and delete assignments.

#### Create Assignment Page (Private)

- Form for creating assignments with the following fields:
  - Title
  - Description
  - Marks
  - Thumbnail image URL
  - Difficulty level dropdown
  - Due date (using `react-datepicker`)
- Validation and success/error messages.

#### View Assignment Page (Private)

- Displays assignment details.
- Allows users to submit assignments with a Google Docs link and notes.
- Assignments default to "pending" status upon submission.

#### My Submitted Assignments Page (Private)

- Displays user-specific submitted assignments in a grid/table format, including:
  - Assignment title
  - Status
  - Obtained marks
  - Feedback

#### Pending Assignments Page (Private)

- Displays pending assignments submitted by other users.
- Allows examiners to evaluate assignments and provide marks and feedback.

## Authentication System

- **Registration:** Validates user data with error handling and success messages.
- **Login:** Implements email/password authentication and Google OAuth.
- **JWT Implementation:** Secures private routes with token-based authentication.

## Deployment

- **Client Side:** Hosted on **Firebase**.
- **Server Side:** Hosted on **Vercel**.

### Configurations

- Environment variables secure Firebase and MongoDB credentials.
- CORS, 404, and other error configurations handled appropriately.
- Firebase authorization settings updated for compatibility with Netlify/Surge.

## Additional Functionalities

- **Input Validation:** Ensures proper form data entry across the platform.
- **Animations:** Integrated using **Framer Motion** for smooth animations.
- **Loading State Spinner:** Displays a spinner during data fetching for better user experience.
- **Pagination:** Added pagination to the Assignments page for improved usability.

## Technologies Used

### Frontend

- **React:** For building the user interface.
- **Tailwind CSS:** For styling and layout design.
- **Framer Motion:** For animations and transitions.
- **react-datepicker:** For date selection functionality.

### Backend

- **Node.js:** Server runtime environment.
- **Express.js:** Backend framework for API development.
- **MongoDB:** Database for storing user and assignment data.
- **JWT:** For secure user authentication and authorization.

## How to Run

### Prerequisites

Ensure you have the following installed before running the project:

- **Node.js** (Latest LTS version recommended)
- **MongoDB** (Local or cloud-based, e.g., MongoDB Atlas)
- **Firebase Project** (For authentication)

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repository-link.git
   cd backend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` file** in the `backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```
4. **Start the server:**
   ```bash
   npm start
   ```
   The backend should now be running at `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` file** in the `frontend` directory and add:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_FIREBASE_API_KEY=AIzaSyCQaEHozZ8n57kR_GsSpBJYva2_hwigZXo
   VITE_FIREBASE_AUTH_DOMAIN=job-assignment-619c8.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=job-assignment-619c8
   VITE_FIREBASE_STORAGE_BUCKET=job-assignment-619c8.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=232182970771
   VITE_FIREBASE_APP_ID=1:232182970771:web:6469b902818830be3a9066
   VITE_FIREBASE_MEASUREMENT_ID=G-DYHJBZK24Q

   ```
4. **Start the React development server:**
   ```bash
   npm run dev
   ```
   The frontend should now be accessible at `http://localhost:5173`.

### Running in Production

To deploy the project, follow these steps:

- Deploy the **backend** on **Vercel** or **Render**.
- Deploy the **frontend** on **Firebase Hosting**, **Vercel**, or **Netlify**.


