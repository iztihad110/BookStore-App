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
      <div className="d-flex justify-content-center d-flex mt-5">
         <div className="book-list card"> 
            <div className="card-head mb-3 d-flex justify-content-center" ><h2>List of Books</h2></div>
            <div className="card-body">
               {
                  bookData.map((item)=>{
                     return <div className="mb-3">
                        <span className="me-3">{item.title}</span>
                        <button className="me-3" type="button" onClick={()=>handleClick(`/delete-book/${item._id}`)}>Delete Book</button>
                        <button type="button" onClick={()=>handleClick(`/edit-book/${item._id}`)}>Edit Book</button>
                     </div>
                  })
               }
               
               <svg className="add-book" onClick={()=>{handleNavigation("/create-book")}} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
              
            </div>
            
         </div>
      </div>
      
   )
}
export default HomePage;