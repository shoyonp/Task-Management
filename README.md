Task Nest is a modern web application that allows users to efficiently manage their tasks. Users can add, edit, and delete tasks, all while benefiting from a seamless authentication system with Google Sign-In. The app provides a clean UI.

🌍 Live Links
🔗 Live Website: https://job-task-85fdd.web.app/
🔗 Backend Repository:https://github.com/shoyonp/Task-Management-server

📦 Dependencies
The project uses the following dependencies:
"@hello-pangea/dnd": "^18.0.1",
"@tanstack/react-query": "^5.66.8",
"axios": "^1.7.9",
"firebase": "^11.3.1",
"localforage": "^1.10.0",
"match-sorter": "^8.0.0",
"react": "^19.0.0",
"react-dom": "^19.0.0",
"react-hook-form": "^7.54.2",
"react-hot-toast": "^2.5.2",
"react-icons": "^5.5.0",
"react-router-dom": "^7.2.0",
"sort-by": "^1.2.0"

⚙️ Installation Steps
Follow these steps to set up and run the project locally:

1️⃣ Clone the repository
git clone 
cd task-manager
2️⃣ Install dependencies
npm install
3️⃣ Set up Firebase authentication

Create a Firebase project.
Enable Google Authentication in Firebase Console.
Get the Firebase config and store it in a .env file:
sh
Copy
Edit
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
4️⃣ Run the application

npm run dev
🛠️ Technologies Used
Frontend: React, Tailwind CSS, React Hook Form, React Router
Backend: Node.js, Express.js, MongoDB (for API)
Authentication: Firebase Authentication
State Management: TanStack React Query
Utilities: Axios, LocalForage, React Hot Toast

