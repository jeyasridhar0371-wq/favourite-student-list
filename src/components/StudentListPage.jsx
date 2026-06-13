import { Link, useNavigate } from "react-router-dom"
import { StaticRouterProvider } from "react-router-dom"
import { useContext } from "react"
import { Stucontext } from "../StuContextProvider"
import { Navigate } from "react-router-dom"


function StudentListPage() {

    const navigate = useNavigate()
    const { student, setStudent } = useContext(Stucontext)
    console.log(student)

    function handleAdd(item) {
        // console.log(student)
        // console.log(item.name)
        // console.log(item.favourite)

        var updateStu = student.map(function (element) {
            if (item.name === element.name) {
                return ({ ...element, favourite: true })
            }
            else {
                return (element)
            }
        })

        setStudent(updateStu)
        // console.log(item.favourite)
        navigate("/favourite")

    }

    return (
        <div>
            <div className="m-5 text-xl border-b-2">
                <Link to={"/favourite"}>Favourite Student Page</Link>
            </div>

            <div className="bg-amber-200 flex justify-center p-5 min-h-[90vh]">
                <div className="bg-white w-[40%] rounded-2xl">
                    <h1 className="text-3xl m-10 text-center font-bold">All Student List</h1>

                    {
                        student.map(function (item, index) {
                            return (
                                <div key={index} className="flex justify-between gap-5 m-5 border-b-2 rounded-xl p-5">
                                    <h1 className="text-3xl">{item.name}</h1>
                                    {
                                        item.favourite ?
                                            (<button onClick={() => { handleAdd(item) }} className="border rounded-md p-1">Added to favourite</button>) :
                                            (<button onClick={() => { handleAdd(item) }} className="border rounded-md p-1">Add to favourite</button>)
                                    }

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default StudentListPage