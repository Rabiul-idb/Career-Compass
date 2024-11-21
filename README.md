# Career Compass

**Career Compass** is a React application and a demo career development platform designed to help individuals discover their strengths, interests, and values, guiding them toward the right career path.

## Features
- **Responsiveness**: Fully responsive design for all devices.
- **Homepage**:
  - **Navbar**:  
    - Fully responsive.  
    - Includes a login button on the right. After login, it displays the user's photo and a private menu list (Dashboard).  
    - Clicking the user icon reveals user info with options to update information or log out.
  - **Banner**: Swiper slider added for interactive visuals.
  - **About Section**:  
    - Brief information about the platform.  
    - A "Learn More" button redirects users to the About page.
  - **Service Section**:  
    - Displays service cards fetched from JSON file.  
    - "View Details" button behavior:
      - Logged-in users: Redirect to the details page for more service info.  
      - Non-logged-in users: Redirect to the login page and then back to the service page upon successful login.
- **Details Page (Private Route)**:  
  1. Users can book services and receive a success toast message.  
  2. Users can provide feedback, displayed below the section.  
  3. Includes a "Go Back" button to return to the homepage.
- **CTA and Footer Sections**:  
  - Static and present across all pages.
- **Dashboard (Private Route)**:  
  - Displays the services selected by the user.
- **Login and Registration**:  
  - Authenticated using Firebase.  
  - Features:
    1. Redirects users to the homepage upon successful login.  
    2. "Login with Google" option available.  
    3. Password reset functionality for users who forgot their credentials.  
    4. Option to update user information.
- **Private Routes**:  
  - Accessible only to logged-in users. Non-logged-in users are redirected to the login page.
- **Error Page**:  
  - Displays an error page when an invalid route is accessed.
- **Environment Variables**:  
  - Used for Firebase configuration.
- **Dynamic Titles**:  
  - Titles are dynamically updated based on the current page.

## Tools and Technologies Used
1. Tailwind CSS Framework
2. daisyUI
3. Firebase Authentication
4. React Toastify
5. Swiper Slider
6. Context API
7. JSON Data

## Live Demo
[Career Compass Live Link](https://career-compass-83813.web.app)

---

Thanks for visiting my project!  
**Best Regards,**  
**MD. Rabiul Islam**

