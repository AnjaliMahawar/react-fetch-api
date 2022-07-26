import React, { useEffect, useState } from 'react'

export default function App2() {
    //state/hookV
  
const[students,setStudents]=useState('')

 useEffect(()=>{
 console.log('hello from anjali mhawar')

 fetch("http://localhost:1337/api/sisters"
    
 )
 .then((d)=>{
    return d.json();
 }).then((data)=>{
    
    setStudents(data.data);

   students.map((cv,idx,arr)=>{
        console.log(cv.attributes.name);
    });

 }).catch((err)=>{
    console.log(err)

 })


  },[students])

    //function


    //return
  return (
   students.length >0 &&

   <h1>
      {
        students.map((cv,idx,arr)=>{
            //console.log(cv.attributes.name);
            return <h1 key={idx}>{cv.attributes.name}</h1>

        })
      }
   </h1>
  )
}
