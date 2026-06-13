import { createContext, useState } from "react";
import StudentListPage from "./components/StudentListPage";
import FavouriteStudentPage from "./components/FavouriteStudentPage";
import { BrowserRouter } from "react-router-dom";

const Stucontext = createContext()

function StuContextProvider(data) {
    console.log(data)

    var [student, setStudent] = useState([
        {
            id: 1,
            name: "Sridhar",
            rollNo: 13,
            favourite: false
        },
        {
            id:2,
            name:"Vijay",
            rollNo:23,
            favourite:true
        },
        {
            id:3,
            name:"Ajith",
            rollNo:24,
            favourite:false
        },
         {
            id: 1,
            name: "Dhanush",
            rollNo: 15,
            favourite: false
        }
    ])

    return (
        <Stucontext.Provider value={{ student, setStudent }}>
            {data.children}
        </Stucontext.Provider>
    )

}

export default StuContextProvider
export { Stucontext }