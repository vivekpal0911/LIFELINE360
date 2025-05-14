# LifeLine360 - Healthcare Management System

A comprehensive healthcare management system that connects patients, doctors, pharmacists, and administrators in one platform.

## Project Structure

```
LifeLine360/
├── frontend/          # React frontend application
├── backend/           # Node.js backend server
└── package.json       # Root package.json for project management
```

## Features

- Multi-role system (Patients, Doctors, Pharmacists, Administrators)
- Appointment scheduling
- Prescription management
- Lab test booking
- Medicine delivery tracking
- Emergency services
- Medical reports management
- Real-time updates

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```

## Running the Application

1. Start both frontend and backend:
   ```bash
   npm start
   ```

2. Start only the backend:
   ```bash
   npm run server
   ```

3. Start only the frontend:
   ```bash
   npm run client
   ```

## Development

- Frontend runs on: http://localhost:5173
- Backend runs on: http://localhost:5000

## Building for Production

```bash
npm run build
```

## Technologies Used

### Frontend
- React.js
- Vite
- React Router
- Framer Motion
- Recharts
- Google Maps API
- Leaflet

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 