import { Link } from "react-router-dom"
import { useContext } from "react"
import { Stucontext } from "../StuContextProvider"

function FavouriteStudentPage() {

    const { student, setStudent } = useContext(Stucontext)

    let favouriteList = 0

    student.forEach(element => {
        if (element.favourite === true) {
            favouriteList = favouriteList + 1
        }
    });

    function handleRemove(item){
         var updateStu = student.map(function (element) {
                if (item.name === element.name) {
                    return ({ ...element, favourite: false })
                }
                else {
                    return (element)
                }
            })
            
        
        setStudent(updateStu)
    }

    return (
        <div>
            <div className="m-5 text-xl border-b-2">
                <Link to={"/"}>Student List</Link>
            </div>
            <div className="bg-amber-200 flex justify-center p-5 min-h-[90vh]">
                <div className="bg-white w-[40%] rounded-2xl">
                     <h1 className="text-3xl m-10 text-center font-bold">Favourite Students List</h1>

            {
                favouriteList === 0 ? <h1 className="font-bold text-xl text-gray-600 text-center mt-[25%]">No favourite students added yet</h1> :
                    (student.map(function (item, index) {
                        return (
                            <div key={index}>
                                {
                                    item.favourite ? (<div className="flex justify-between gap-5 m-5 border-b-2 rounded-xl p-5">
                                        <h1 className="text-3xl">{item.name}</h1>
                                        <button onClick={()=>{handleRemove(item)}} className="border rounded-md p-1">Remove from favourite</button>
                                    </div>) : ("")
                                }
                            </div>
                        )

                    }))
            }
                </div>
            </div>
            
           
        </div>
    )
}

export default FavouriteStudentPage