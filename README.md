# QOTD Backend – Question of the Day API

This project implements the backend for a **Question of the Day (QOTD)** feature for an edtech platform.  
Each day, a single DSA question is served to users, who can submit answers and view basic performance statistics.

The focus of this project is **backend architecture, REST API design, data modeling, and scalability**.

---

## 🛠 Tech Stack Used

- **Node.js** – JavaScript runtime  
- **Express.js** – REST API framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB ODM  
- **dotenv** – Environment variable management  

---

## 📡 API Endpoints

### 1️⃣ Health Check
**GET /**

**Response**
```json
{
  "status": "OK",
  "message": "QOTD Backend is running 🚀"
}
```

---

### 2️⃣ Fetch Today’s Question
**GET /api/qotd/today**

**Response (200)**
```json
{
  "title": "Two Sum",
  "difficulty": "Easy",
  "problemStatement": "Given an array of integers...",
  "sampleInput": "nums = [2,7,11,15], target = 9",
  "sampleOutput": "[0,1]",
  "hintsAvailable": true
}
```

**Response (404)**
```json
{
  "message": "No QOTD found for today"
}
```

---

### 3️⃣ Submit Answer
**POST /api/qotd/submit**

**Request Body**
```json
{
  "userId": "user_101",
  "answer": "[0,1]",
  "timeTaken": 42
}
```

**Response**
```json
{
  "result": "correct",
  "message": "Well done!"
}
```

---

### 4️⃣ Get Statistics
**GET /api/qotd/stats**

**Response**
```json
{
  "totalAttempts": 5,
  "successRate": "60%"
}
```

---

## 🗄 Data Model Explanation

### 📘 Question Model
Stores daily Question of the Day data.

**Fields:**
- `date` – Question date (YYYY-MM-DD)  
- `title` – Question title  
- `difficulty` – Easy / Medium / Hard  
- `problemStatement` – Full problem description  
- `sampleInput` – Example input  
- `sampleOutput` – Example output  
- `expectedOutput` – Used for evaluation  
- `hints` – Optional hints array  

---

### 📝 Submission Model
Stores user submissions.

**Fields:**
- `userId` – Identifier for user (authentication not implemented)  
- `questionId` – Reference to Question  
- `answer` – Submitted answer  
- `result` – correct / incorrect / partially correct  
- `timeTaken` – Time taken to solve  
- `submittedAt` – Submission timestamp  

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/qotd_backend.git
cd qotd_backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup environment variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/qotd_db
```

### 4️⃣ Start MongoDB
```bash
mongod
```

### 5️⃣ Run the server
```bash
npm start
```

The server will start at:
```
http://localhost:5000
```

---

## 🚀 What I Would Improve With More Time

- Add **authentication & authorization** using JWT  
- Implement **real code execution** using a judge system (Docker / Judge0)  
- Build an **admin panel** to manage QOTD questions  
- Introduce a **leaderboard API** with ranking logic  
- Add **Redis caching** for frequently accessed endpoints  
- Add a **cron job** for automatic daily question rotation  
- Improve evaluation logic with **multiple test cases**  
- Add **Swagger/OpenAPI documentation**  
- Add **unit and integration tests**  

---

## 📌 Notes

- This is a **backend-only service**; APIs are intended to be tested using Postman, Thunder Client, or similar tools.
- The project prioritizes **clean structure, clarity, and scalability** over feature completeness.
