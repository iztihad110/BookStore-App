
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function HomePage(){
    let navigate = useNavigate();

    let [bookData, setBookData] = useState([]);

    let handleClick = (link)=>{
        navigate(link);
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
            <ul>
                {
                    bookData.map((item)=>{
                       return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
            <button type="button" onClick={()=> handleClick("/create-book")}>Add Book</button>
            <button type="button" onClick={()=> handleClick("/delete-book")}>Delete Book</button>
        </div>
    )
}
export default HomePage;