
function StudentsCard({ students}) {
    
    
    return (
        <>
           
            <div className="bruxos">            
            {
                    students.map((item, index) => 
                       
                        <div key={index} className='cardBruxo'> 
                        <img src={item.image} alt={item.name}/>
                        <label>{item.name}</label>
                        <label>{item.house}</label>
                        </div>
                     
                    )
            }
          
            </div>
          </> 
    )
}
export default StudentsCard;