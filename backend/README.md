# Project Setup and Instructions

## **1. Introduction**
This project is a backend for the "Web Tâm Lý Sức Khỏe" application. It includes APIs for managing users, books, articles, and psychological tests.

---

## **2. Prerequisites**
Before running the project, ensure you have the following installed:
- Node.js (v14 or above)
- MongoDB (Local or Atlas)

---

## **3. Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the root directory and add:
     ```plaintext
     PORT=5000
     DB_CONNECTION=mongodb://localhost:27017/web_tam_ly_suc_khoe
     SECRET_KEY=your_secret_key
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASSWORD=your_email_password
     ```

---

## **4. Running the Project**
1. Start the MongoDB server:
   ```bash
   mongod
   ```

2. Seed the database with initial data:
   ```bash
   node seed.js
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the API at:
   ```plaintext
   http://localhost:5000/api
   ```

---

## **5. API Overview**
### **User Routes**
- **Register User:**
  ```plaintext
  POST /api/users/register
  ```
  Body:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **Login User:**
  ```plaintext
  POST /api/users/login
  ```
  Body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### **Book Routes**
- **Get Books:**
  ```plaintext
  GET /api/books
  ```

- **Create Book:**
  ```plaintext
  POST /api/books
  ```
  Body:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "price": 150000,
    "description": "Description here",
    "coverImage": "/path/to/image.jpg"
  }
  ```

### **Article Routes**
- **Get Articles:**
  ```plaintext
  GET /api/articles
  ```

- **Create Article:**
  ```plaintext
  POST /api/articles
  ```
  Body:
  ```json
  {
    "title": "Article Title",
    "content": "Content here",
    "author": "Author Name"
  }
  ```

### **Test Routes**
- **Get Tests:**
  ```plaintext
  GET /api/tests
  ```

- **Create Test:**
  ```plaintext
  POST /api/tests
  ```
  Body:
  ```json
  {
    "title": "Test Title",
    "description": "Test Description",
    "questions": [
      {
        "questionText": "Question 1",
        "options": [
          { "text": "Option 1", "score": 1 },
          { "text": "Option 2", "score": 2 }
        ]
      }
    ]
  }
  ```

---

## **6. Debugging**
- Check MongoDB connection issues:
  ```bash
  mongoose.connect(process.env.DB_CONNECTION)
  ```
- Use `console.log()` to debug API routes.
- Check `.env` file for correct configurations.

---

## **7. Testing APIs**
Use Postman or similar tools to test API endpoints. Ensure headers and body are correctly set for routes requiring authentication.

---

## **8. Next Steps**
- Add more features for user profile management.
- Enhance security measures (e.g., password reset flows).
- Deploy the backend to a cloud provider (e.g., Heroku, AWS).

---
