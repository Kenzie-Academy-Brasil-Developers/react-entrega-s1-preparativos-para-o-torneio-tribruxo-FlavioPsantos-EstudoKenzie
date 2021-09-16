import { useState } from "react";
import StudentsCard from "../StudentsCard";
import './style.css'
function Students({ students }) {
    const [studentUse, setStudentUse] = useState([])
    const [random, setRandomNumber] = useState(0)
    const [handleClick, setHandleClick] = useState(true)

    const takeStudent = () => {
        let student = [...students]
        let arr = [];
        for (let i = 0; i < 3; i++) {
            setRandomNumber(Math.floor(Math.random() * student.length))
            let finded = student[random]
            if(finded === undefined){
               finded = student[1]
            }
            student = student.filter(item => item.name !== finded.name)
            student = student.filter(item => item.house !== finded.house)
            arr.push(finded)

        }
        setStudentUse(arr)
    }


    const handle = ()=>{
        setHandleClick(!handleClick)
        takeStudent()
    }
   

    return (
        <>
            <div>
                <h1>Torneio Tribuxo</h1>
                <p>Clique no Botão para encontrar os fenticeiros</p>

            </div>
            <div className="container">
                <StudentsCard students={studentUse}/>
            </div>
                {handleClick ? 
                <button onClick={handle}>Começar</button> :
                <button onClick={takeStudent}>Tentar Novamente</button>}
               

        </>
    )
}


export default Students;