# Online Group-Study Application

Welcome to the **Online Group-Study** web application! This project is a comprehensive platform designed to allow users to create, complete, and grade assignments collaboratively. Developed using the MERN stack, this application demonstrates proficiency in full-stack web development and modern design principles.

## Purpose

This project was built as part of a job assessment for **BJET Inc.** and showcases my ability to develop a full-stack application with secure user authentication and dynamic data interactions.

## Live URL

[[Client-Site](https://job-assignment-619c8.web.app/)]

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

