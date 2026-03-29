# Task Management (Node.js + Express + MariaDB)

## Project Overview

This project is a **Task Management** built using Node.js and Express, with MariaDB as the database.
It allows users to manage tasks by performing CRUD operations (Create, Read, Update, Delete) and mark tasks as completed.

This project demonstrates:

* Backend development using REST APIs
* Database integration using MariaDB
* Input validation and error handling
* Clean and modular code structure

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MariaDB 
* **Testing Tool:** Postman

---

## Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup Database 

Run the following SQL:

```sql
CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 4️⃣ Configure Database Connection

Update `db.js` with your credentials:

```js
password: 'your_password'
```

---

### 5️⃣ Run Server

```
npm start
```

Server will run at:
```
http://localhost:3000
```

---

## API Endpoints

### ✅ 1. Create Task

* **Method:** POST
* **URL:** `/tasks`
* **Body:**

```json
{
  "title": "Complete assignment",
  "description": "Create APIs using nodejs"
}
```

---

### ✅ 2. Get All Tasks

* **Method:** GET
* **URL:** `/tasks`

---

### ✅ 3. Update Task

* **Method:** PUT
* **URL:** `/tasks/:id`
* **Body:**

```json
{
  "title": "Updated Task",
  "description": "Updated description"
}
```

---

### ✅ 4. Delete Task

* **Method:** DELETE
* **URL:** `/tasks/:id`

---

### ✅ 5. Mark Task as Completed

* **Method:** PUT
* **URL:** `/tasks/complete/:id`

---

## ✅ Validation Rules

* Task title **cannot be empty**
* Cannot mark a task as completed **if already completed**
* Proper error messages returned for invalid operations

---

## How to Test

Use **Postman** to test all API endpoints:

* Create task → POST
* View tasks → GET
* Update task → PUT
* Delete task → DELETE

---
