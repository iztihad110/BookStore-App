import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function HomePage(){

   let [bookData, setBookData] = useState([]);
   let [delId, setDelId] = useState();
   let navigate = useNavigate();

   let handleDelete = (Id)=>{
      setDelId(Id);
   }
   let handleNavigation = (link)=>{
      navigate(link);
   }

   // let handleDelete = async (id)=>{
   //    try{
   //       let response = await axios.delete(`http://localhost:3000/books/${id}`);
   //       let newbookData = bookData.filter((item)=> item._id!=id);
   //       setBookData(newbookData);
         
   //    }
   //    catch(error){
   //       alert(error.message);
   //    }
   // }

   let handleClick = (link, id)=>{
      //handleDelete(id);
      handleNavigation(link);
   }

   useEffect(()=>{
      let fetchData = async ()=>{
         try{
            let response = await axios.get("http://localhost:3000/books");
            setBookData(response.data);
         }
         catch(error){
            alert(error.message);
         }
      }

      fetchData();
   }, [])

   return (
      <div>
         
            {
               bookData.map((item)=>{
                  return <div>
                     <span>{item.title}</span>
                     <button type="button" onClick={()=>handleClick(`/delete-book/${item._id}`)}>Delete Book</button>
                  </div>
               })
            }
            <button type="button" onClick={()=>{handleNavigation("/create-book")}}>Add Book</button>
         
      </div>
   )
}
export default HomePage;