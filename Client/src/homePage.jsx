import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function HomePage(){

   let [bookData, setBookData] = useState([]);
   let navigate = useNavigate();

   
   let handleNavigation = (link)=>{
      navigate(link);
   }


   let handleClick = (link)=>{
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
                     <button type="button" onClick={()=>handleClick(`/edit-book/${item._id}`)}>Edit Book</button>
                  </div>
               })
            }
            <button type="button" onClick={()=>{handleNavigation("/create-book")}}>Add Book</button>
         
      </div>
   )
}
export default HomePage;