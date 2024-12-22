import React, { useState } from "react";

function CreateBook(){
    let [bookData, setBookData] = useState({
        title: "",
        author: "",
        publishYear: ""
    })

    let handleChange = (e) =>{
        let {name, value} = e.target;
        setBookData({...bookData, [name]: value});
    }

    let handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            let response = await axois.post("http://localhost:3000/books", bookData);
            alert(response.data.message);
        }
        catch(error){
            
            alert(error.message);
        }
    }

    return (
        <div>
            <form action="">
                <div>
                    <input type="text" id="title" name="title" value={bookData.title} placeholder="Enter Title"/>
                </div>
                <div>
                    <input type="text" id="author" name="author" value={bookData.author} placeholder="Enter Author's Name"/>
                </div>
                <div>
                    <input type="text" id="publishYear" name="publishYear" value={bookData.publishYear}/>
                </div>
            </form>
        </div>
    )
};

export default CreateBook; 