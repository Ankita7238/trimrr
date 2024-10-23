# Trimrr - URL Shortening Platform

**Trimrr** is a URL shortening application that allows users to create custom or auto-generated shortened links, generate and download QR codes, and track real-time analytics such as clicks and user demographics. The platform offers secure authentication and personalized dashboards for users to manage their shortened URLs efficiently.

## Features

- **Custom and Auto-generated Links**: Shorten URLs with a custom alias or let the app auto-generate one.
- **QR Code Generation**: Automatically generate a QR code for each shortened URL, with the option to download it.
- **Real-time Analytics**: Track clicks, geographic locations, and other user demographics associated with each shortened URL.
- **Personalized Dashboards**: Authenticated users can manage their shortened links, view analytics, and organize URLs.
- **Secure Authentication**: User login and session handling with secure authentication, powered by Supabase.
- **Responsive Design**: A fully responsive design for seamless use across devices.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend & Database**: Supabase
- **Authentication**: Supabase Auth
- **UI Library**: Shadcn UI
- **Notifications**: React Hot Toast for notifications
- **Deployment**: Netlify
  
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ankita7238/trimrr.git
   cd trimrr
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following:

   ```bash
   REACT_APP_SUPABASE_URL=your-supabase-url
   REACT_APP_SUPABASE_KEY=your-supabase-api-key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Sign Up**: Create an account using your email to access the dashboard.
2. **Shorten URLs**: Enter a URL, choose a custom alias or let Trimrr generate one automatically.
3. **Generate QR Codes**: For each shortened link, download a QR code that directs to the link.
4. **View Analytics**: Track how many clicks your shortened URLs receive and view user demographics in your dashboard.
5. **Manage Links**: View and organize your links within the personalized dashboard.

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/50aa829b-0098-46d9-ae93-81cfc95279a2)

### Login/SignUp Page
![image](https://github.com/user-attachments/assets/f1dd8b79-961e-4a73-af3a-193ed7d4ea72)

### Dashboard
![image](https://github.com/user-attachments/assets/91401ee5-26f5-49ce-8808-7b9ce445499b)


