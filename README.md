# ⭐ Favourite Student List

A React JS application that demonstrates **React Router**, **Context API (useContext)**, and **conditional rendering** by allowing users to add and manage their favourite students.

---

## 📌 Project Overview

The Favourite Student List application allows users to browse a list of students and add their favourite students to a separate favourites page. The application uses React Context API to manage the favourite student list globally, making it accessible across multiple pages without prop drilling.

---

## 🚀 Features

- Display a list of students dynamically using `map()`
- Add students to the favourite list
- Prevent duplicate favourites
- Remove students from favourites
- Global state management using **React Context API**
- Client-side routing using **React Router**
- Navigation without page reload
- Conditional rendering for empty favourite list
- Responsive and clean UI with CSS

---

## 🛠️ Technologies Used

- React JS
- React Router DOM
- Context API (`createContext`, `useContext`)
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── StudentCard.jsx
│
│── context/
│   └── StudentContext.jsx
│
│── pages/
│   ├── StudentList.jsx
│   └── FavouriteStudents.jsx
│
│── data/
│   └── students.js
│
│── App.jsx
│── main.jsx
│── index.css
```

## 📖 How It Works

1. The Student List page displays all students.
2. Click **Add to Favourite** to save a student.
3. Duplicate students cannot be added.
4. Navigate to the **Favourite Students** page.
5. View all favourite students.
6. Click **Remove** to delete a student from favourites.
7. If no favourite students exist, the application displays:

```
No favourite students added yet.
```

---

## 📸 Screens

- Student List Page
- Favourite Students Page

---

## 🎯 Learning Outcomes

This project demonstrates:

- React Functional Components
- React Router Navigation
- Context API
- useContext Hook
- State Management
- Dynamic Rendering with `map()`
- Conditional Rendering
- Component Reusability
- Basic CSS Styling

---

## 🔮 Future Improvements

- Search students
- Filter students
- Store favourites using Local Storage
- Dark Mode
- Student profile page
- Responsive mobile design

---

## 📄 License

This project is created for educational purposes.
