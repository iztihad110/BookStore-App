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
        <div className="d-flex justify-content-center">
            <div className="card create-book-field">
                <div className="card-header add_book_header d-flex justify-content-center create-book-header"><h2>Add Book</h2></div>
                <div className="form">
                    <form action="">
                        <div className="p-4">
                            <input className="form-control" type="text" id="title" name="title" value={bookData.title} onChange={handleChange} placeholder="Enter Title"/>
                        </div>
                        <div className="ps-4 pe-4">
                            <input className="form-control" type="text" id="author" name="author" value={bookData.author} onChange={handleChange} placeholder="Enter Author's Name"/>
                        </div>
                        <div className="p-4">
                            <input type="text" className="form-control" id="publishYear" name="publishYear" onChange={handleChange} value={bookData.publishYear} placeholder="Enter Publish Year"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success mt-4 mb-4" onClick={handleSubmit}>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CreateBook; 