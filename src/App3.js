import react, { useState } from 'react';
import { Button } from 'react-bootstrap';

function App3(){
    //state
    const[students,setStudents]=useState('')
     
    //function
     let getData=()=>{
        console.log('good night')

        fetch("http://localhost:1337/api/sisters")
        .then((d)=>{
            return d.json()

        }).then((data)=>{
            console.log(data)
            setStudents(data.data)
            console.log('last',data.data)


        }).catch((err)=>{
            console.error("error",err)

        })
     }

    //return

 return(
      <>
      
      
        <h1>App3</h1>
        <Button onClick={()=>{getData()}} variant="outline-success">GET_DATA</Button>{' '}

        {
            students.length >0 && <h1>

                {
                    students.map((cv,idx,arr)=>{
                        return<h1 key={idx}>{cv.attributes.name}</h1>

                    })
                }
            </h1>
        }

      </>
    )
}


export default App3;
