# MAT - My Application Transfer

![MAT Home Page](Images/main_page.png)

## CS50 Final Project 2022
This project was submitted as my final project for **CS50x 2022**. It demonstrates the application of web development concepts learned throughout the course, specifically focusing on backend development with Node.js and database management.

**Video Demo:** [Watch on YouTube](https://www.youtube.com/watch?v=MXoXEOab6wM)

## About The Project
MAT is designed as a simple, efficient file sharing solution intended for use on a local network (LAN). It serves as a "common space" for offices or small groups to easily transfer files between machines without the need for external cloud services, accounts, or complex setups.

### Core Philosophy
The goal was to create a tool that is strictly for **transferring** files.
*   **No Account Required:** Users do not need to register or provide personal data.
*   **Privacy Focused:** No emails, names, or tracking.
*   **Simple Workflow:** Upload -> Get Link -> Share -> Download.

### Important Clarification
To manage expectations regarding the scope of this application:
*   **No "Fast Search":** This is not a file management system with a searchable index of all uploaded files. It is a transfer tool where you need the specific link to access a file.
*   **No "Modify Anything":** Once a file is uploaded, it cannot be modified or edited within the app. This ensures the integrity of the transferred data.

## Features
*   **File Upload:** Supports files up to 500MB.
*   **Wide Format Support:** Compatible with a vast array of file types including Videos, Audio, Images, Code files, and Documents (PDF, DOC, etc.).
*   **Password Protection:** Users can optionally secure their uploads with a password.
*   **Security:**
    *   Passwords are **hashed** using `bcrypt` before being stored in the database. They are never stored in plain text.
    *   Files are stored securely on the server's filesystem.
*   **Download Tracking:** Keeps track of how many times a file has been downloaded.

## Technologies Used
This project is built using a robust JavaScript stack:
*   **Runtime:** [Node.js](https://nodejs.org/)
*   **Framework:** [Express.js](https://expressjs.com/) - Handles routing and server logic.
*   **Database:** [MySQL](https://www.mysql.com/) with [Sequelize ORM](https://sequelize.org/) - Used for storing file metadata and hashed passwords.
*   **Templating:** [EJS](https://ejs.co/) - For rendering dynamic HTML views.
*   **File Handling:** [Multer](https://github.com/expressjs/multer) - Middleware for handling `multipart/form-data`.
*   **Security:** [Bcrypt](https://www.npmjs.com/package/bcrypt) - For password hashing.
*   **Frontend:** HTML5, CSS3, JavaScript.

## Installation & Setup (For the Host)
*This section is for the person setting up the application on their computer (the "Host").*

### Prerequisites
*   Node.js installed.
*   MySQL Server installed and running.

### Step-by-Step Installation
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd MAT-CS50
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory with your database configuration:
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_NAME=transfer
    DB_DIALECT=mysql
    ```

4.  **Initialize the Database:**
    Run the initialization script to create the database:
    ```bash
    npm run db:init
    ```

5.  **Start the Server:**
    ```bash
    npm start
    ```

## How to Use MAT
*Once the server is running, follow these steps to share files with others on your network.*

### 1. Accessing the App (Important!)
To share files with others, you must access the app using your computer's **IP Address**, not `localhost`.
*   **Note:** You do **NOT** need to change any code or configuration files. The app automatically detects the address you use in your browser.

**Find your IP Address:**
*   **Windows:** Open Command Prompt (`cmd`) -> type `ipconfig` -> look for **IPv4 Address** (e.g., `192.168.1.15`).
*   **Mac/Linux:** Open Terminal -> type `ifconfig` -> look for `inet` address.

**Open in Browser:**
*   **Host (You):** Go to `http://<YOUR_IP>:3000` (e.g., `http://192.168.1.15:3000`).
*   **Others:** They will use the link you generate, which will look exactly like the one above.

### 2. Sharing a File
1.  **Upload:** Select your file (up to 500MB) and click upload.
2.  **Get Link:** The app generates a unique link.
3.  **Share:** Send this link to anyone on your Wi-Fi/LAN.

### 3. Troubleshooting
*   **Firewall:** If others cannot open the link, check your computer's firewall settings to ensure Node.js is allowed to accept incoming connections on port 3000.

## Security Note
This application was developed as a learning project. While it implements standard security practices like password hashing, it is recommended to use it within a trusted local network environment.
