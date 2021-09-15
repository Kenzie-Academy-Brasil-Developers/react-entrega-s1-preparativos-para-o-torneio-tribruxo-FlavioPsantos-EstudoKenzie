import { useState } from "react";
import StudentsCard from "../StudentsCard";
import './style.css'
function Students({ students, update }) {
    const [useHandle, setHandle] = useState(true)
    const [studentUse, setStudent] = useState([])

    const generateStudenId = () => {
        return Math.floor(Math.random() * students.length)
    }

    const takeStudent = () => {
        for (let i = studentUse.length; i <= 3; i++) {
            const finded = students.find((item, index) => index === generateStudenId())
            filter(finded)
            if (finded !== undefined) {
                setStudent([...studentUse, finded])
            }
        }
    }
    const filter = (finded)=>{
    studentUse.filter(function (elem, i, arr) {
        return arr.indexOf(elem === finded);

    });
    }
    const updateStudent = ()=>{
        window.location.reload();
    }
    if(studentUse.length !== 3){
    takeStudent()
    }

    const handleClick = () => {
        setHandle(!useHandle)
    }

    return (
        <>
            <div>
                <h1>Torneio Tribuxo</h1>
                <p>Clique no Botão para encontrar os fenticeiros</p>

            </div>
            <div className="container">
                {useHandle ? false : <StudentsCard students={studentUse} />}
            </div>
            {useHandle ? 
             <button onClick={handleClick}>Começar!</button>: 
             <button onClick={updateStudent}>Tentar Novamente!</button>}
               

        </>
    )
}

export default Students;