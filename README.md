
# EduNest

## Objective
A robust **Express** application built with **TypeScript** and **MongoDB (Mongoose)** to manage a LMS. The API enables CRUD operations on products (course),

---

- **Website Live Link**: [link](hello)
- **GitHub Client Repo**: [link](hello)
## Features ✨
- **Course Management**: Add, read, update, and delete courses by admin with detailed attributes like etc.
- **User Role** : User can request to admin to be instructor (upcomming)

## Authentication ✨
- **User**: Admin and User role based login
- **Managmet**: Admin can manage all thing like read, add, update and delete.

---


### Admin Credentials ✨
 ```
 Email: "edunestadmin@gmail.com",
 Password: "admin1234"
 ```


## Tech Stack 🛠️
- **Frontend**: Nextjs, Tailwindcss, TypeScript
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB (via Mongoose).
- **Tools**: ESLint, Prettier, Nodemon, TypeScript Compiler

---

## Project API Root

### Bicycle APIs
- **Create Course API**  
  - **Endpoint**: `/api/course`  
  - **Method**: `POST` 
  - **Request Body**: 
    ```json
    {
        "name": "need to write name",
        "author": "ayman sadik",
        "price": 300,
        "type": "speeking",
        "description": "speeking test and performance.",
    }


- **Get All course API**  
  - **Endpoint**: `/api/courses`  
  - **Method**: `GET`  

- **Get Single Bicycle API**  
  - **Endpoint**: `/api/course/:courseId`  
  - **Method**: `GET`  

- **Update Bicycle API**  
  - **Endpoint**: `/api/course/:courseId`  
  - **Method**: `PATCH` 
  - **Request Body**: 
    ```json
    { 
        "price": 350,
        "type": "listening"
    } 

- **Delete Bicycle API**  
  - **Endpoint**: `/api/course/:courseId`  
  - **Method**: `DELETE`  

---

## Project Setup ⚙️

### Prerequisites
1. **Node.js**
2. **MongoDB** (locally or a cloud-based service like MongoDB Atlas)
3. **Package Manager**: npm

### Installation Steps
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/developerFarukk/edunest.git
   cd edunest
   ```

2. **Install Dependencies**  
   -- Right path 
   ```bash
   npm i
   ```

3. **Environment Setup**  
   Create a `.env` or `.env.local` (frontend) file in the root directory. Refer to `.env.example` for guidance:

   ```
  NODE_ENV=development
  DATABASE_URL=<mongodb+srv://<Username>:<password>@****.***.mongodb.net/<database-name>?***=true&w=***&appName=project-name>

  JWT_ACCESS_SECRET=<"Inpute secret key">
  JWT_ACCESS_EXPIRES_IN=<"Inpute time duration, e.g., 2h">
  PORT=5000

  NEXTAUTH_URL=http://localhost:3000
  SALTROUNDS=<"input round number">


   ```

   Refer to `.env.example` for additional configuration options.

4. **Start the Development Server**  
   
    First, run the development server:

    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5000`.

📬 **Contact**  
For issues or inquiries, reach out to [mohibullah mohim](mailto:mohibullahmohim2020@gmail.com). Thank you 💜