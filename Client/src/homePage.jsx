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
      <div className="d-flex justify-content-center d-flex mt-5 list-box " >
         <div className="book-list card "> 
            <div className="card-head mb-3 d-flex justify-content-center" ><h2>List of Books</h2></div>
            <div className="card-body list-body">
               {
                  bookData.map((item)=>{
                     return <div className="mb-3 ms-3 me-3  row single-book">
                        <div className="col-md-8 book-title ">
                           <span >{item.title}</span>
                        </div>
                           
                           <div className="delete-book col-md-1 me-3">
                              <svg className="delete-icon" onClick={()=>handleClick(`/delete-book/${item._id}`)} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor"
                              stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                           </div>
                           <div className="edit-book col-md-1">
                              <svg className="edit-icon" xmlns="http://www.w3.org/2000/svg" onClick={()=>handleClick(`/edit-book/${item._id}`)} class="ionicon" viewBox="0 0 512 512"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none"
                               stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"/></svg>
                           </div>
                        
                     </div>
                  })
               }
               
               <div className="add-book">
                  <svg onClick={()=>{handleNavigation("/create-book")}} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
               </div>
               
              
            </div>
            
         </div>
      </div>
      
   )
}
export default HomePage;