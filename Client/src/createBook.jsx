import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateBook(){
    let [bookData, setBookData] = useState({
        title: "",
        author: "",
        publishYear: ""
    })

    let navigate = useNavigate();

    let handleChange = (e) =>{
        let {name, value} = e.target;
        setBookData({...bookData, [name]: value});
    }

    let handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            let response = await axios.post("http://localhost:3000/books", bookData).then(()=>{
                navigate('/');
            });
            
        }
        catch(error){
            
            alert(error.message);
        }
    }

    return (
        <div>
            <form action="">
                <div>
                    <input type="text" id="title" name="title" value={bookData.title} onChange={handleChange} placeholder="Enter Title"/>
                </div>
                <div>
                    <input type="text" id="author" name="author" value={bookData.author} onChange={handleChange} placeholder="Enter Author's Name"/>
                </div>
                <div>
                    <input type="text" id="publishYear" name="publishYear" onChange={handleChange} value={bookData.publishYear}/>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
                
            </form>
        </div>
    )
};

export default CreateBook; 