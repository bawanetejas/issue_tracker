# Issue Tracker Lite

A simple and clean Issue Tracker application built to refresh React and Express concepts by creating a real-world workflow management project.

The application allows admins to create teams and issues, while team leads and members can track and update assigned issues.

---

# Features

## Admin

- Create teams
- Create issues
- Assign issues to team members
- View all issues

## Team Lead

- View team issues
- Monitor team workload
- Update issue statuses

## Team Member

- View assigned issues
- Update issue status
- Create own issue

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB

---

# Project Goal

This project was built to:

- Refresh React fundamentals
- Practice Express CRUD APIs
- Improve frontend component structure
- Practice backend route organization
- Build confidence by completing a real-world mini project

---

# Functionalities

- Create Issues
- Update Issue Status
- Delete Issues
- Filter Issues
- Team Management
- Role-Based Dashboard UI
- Responsive Design

---

# Folder Structure

## Frontend

```bash
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── layouts/
 ├── hooks/
```

## Backend

```bash
server/
 ├── routes/
 ├── controllers/
 ├── models/
 ├── middleware/
```

---

# API Routes

## Issues

```bash
GET    /issues
POST   /issues
PUT    /issues/:id
DELETE /issues/:id
```

## Teams

```bash
GET    /teams
POST   /teams
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/bawanetejas/issue_tracker.git
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# Future Improvements

- Authentication
- Drag and Drop
- Notifications
- File Attachments
- Activity Logs
- Role Permissions
- Dashboard Analytics

---

# Learning Outcomes

This project helps practice:

- React component architecture
- State management
- Form handling
- API integration
- CRUD operations
- Express routing
- MongoDB schema design
- Responsive UI development

---

# Author

Built as a React + Express refresher project to strengthen full-stack development fundamentals.
