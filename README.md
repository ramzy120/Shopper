# Shopper: Personalized E-Commerce Dashboard

Shopper is a fully personalized e-commerce platform designed to enhance the online shopping experience by tailoring it to individual users' preferences. It includes features such as product recommendations, order tracking, and account management, making it a one-stop solution for online shopping enthusiasts.

## Features

### Landing Page
- Eye-catching Hero section with a call-to-action.
- Featured Products section showcasing popular items.
- Benefits Section highlighting unique selling points.
- Footer with basic information and social media links.

### Authentication
- **User Signup**: Create an account with email and password.
- **User Login**: Secure login functionality.
- **Forgot Password**: Reset password via email.

### Dashboard
- Personalized dashboard displaying user preferences.
- Recommended products based on user interests.
- Order history and tracking.

### Cart and Checkout
- Add, remove, and update items in the cart.
- Secure checkout with multiple payment options.

### Admin Panel
- Product management: Add, edit, and delete products.
- Order management: View and process user orders.
- Analytics: Overview of sales and user activity.

### Additional Features
- Product search and filtering.
- Notifications for order updates and promotions.
- User profile management.

## Technologies Used

### Frontend
- React.js for building a dynamic user interface.
- CSS for styling.

### Backend
- Node.js and Express.js for handling server-side logic.

### Database
- MongoDB for data storage.

### Tools
- Git and GitHub for version control.
- Trello for task management.
- Manual QA for ensuring high-quality code.

## Installation

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB setup.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopper.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shopper
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     ```
5. Start the development server:
   ```bash
   npm start
   ```

### Accessing the App
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Project Structure
```plaintext
shopper/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-specific components
│   ├── context/         # Context API for global state
│   ├── services/        # API services
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── server/              # Backend server files
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Request handlers
│   └── server.js        # Main server file
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── README.md            # Documentation
```

## Roadmap
- [x] Design the UI/UX.
- [x] Implement the landing page.
- [ ] Add user authentication.
- [ ] Create personalized dashboards.
- [ ] Implement cart and checkout functionality.
- [ ] Develop the admin panel.

## Contributors
- **Ramsey Omrore**
- **Oluwafunmilola Aribisala**

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

We’re excited to build Shopper and hope it enhances your e-commerce experience! 🚀
