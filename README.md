# MAT - My Application Transfer

![MAT Home Page](Images/main_page.png)

## About the Project
MAT is a simple file-sharing tool for local networks (LAN). It provides a quick way to upload a file, generate a link, and share it with others on the same network.

## CS50 Final Project 2022
This project was submitted as my final project for **CS50x 2022**. It focuses on backend development with Node.js and database management.

**Video Demo:** [Watch on YouTube](https://www.youtube.com/watch?v=MXoXEOab6wM)

## Core Philosophy
* **No Account Required**
* **Privacy Focused** (no emails, names, or tracking)
* **Simple Workflow:** Upload → Get Link → Share → Download

## Important Clarification
* **No "Fast Search":** This is not a searchable file manager. You need the link to access a file.
* **No "Modify Anything":** Uploaded files cannot be edited inside the app.

## Features
* File upload (up to 500MB)
* Password-protected links
* Download tracking

## Two ways to try MAT

### 1) 🧪 Live Demo
Try the hosted demo here: https://mat-cs50.onrender.com/

**Note:** This demo uses ephemeral storage. Data resets on restarts, so links may stop working.

### 2) 💻 Run locally (LAN)
Run the app on your own network so files persist with MySQL and sharing works within your LAN.

## Local Setup (MySQL)

### Prerequisites
* Node.js
* MySQL Server

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MAT-CS50
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=transfer
   DB_DIALECT=mysql
   ```

4. Initialize the database:
   ```bash
   npm run db:init
   ```

5. Start the server:
   ```bash
   npm start
   ```

## How to Use on LAN
Open the app using your IP address (not localhost):
* Host: http://<YOUR_IP>:3000
* Others: use the generated share link

### Sharing a File
1. Upload a file.
2. Copy the generated link.
3. Share it with others on your Wi-Fi/LAN.

### Troubleshooting
* If others can’t open the link, allow Node.js through your firewall on port 3000.

## Technologies Used
* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Database:** [MySQL](https://www.mysql.com/) + [Sequelize ORM](https://sequelize.org/)
* **Templating:** [EJS](https://ejs.co/)
* **File Handling:** [Multer](https://github.com/expressjs/multer)
* **Security:** [Bcrypt](https://www.npmjs.com/package/bcrypt)
* **Frontend:** HTML5, CSS3, JavaScript

## Security Note
This application was developed as a learning project. Use it within a trusted local network.
