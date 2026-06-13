import StudentListPage from "./components/StudentListPage"
import FavouriteStudentPage from "./components/FavouriteStudentPage"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<StudentListPage />}></Route>
          <Route path="/favourite" element={<FavouriteStudentPage />}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
