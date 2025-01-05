import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBook(){
    let [bookData, setBookData] = useState({
        title: "",
        author: "",
        publishYear: ""
    })

    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        let fetchData = async ()=>{
            try{
                let response = await axios.get(`http://localhost:3000/books/${id}`);
                setBookData(response.data);
            }
            catch(error){
                alert(error.message);
            }
        }

        fetchData();
    }, [])

    let handleChange = (e)=>{
        let {name, value} = e.target;
        setBookData({...bookData, [name]: value});
    }

    let handleSubmit = async (e)=>{
        try{
            let response = await axios.put(`http://localhost:3000/books/${id}`, bookData).then(()=>{navigate('/')});

        }
        catch(error){
            alert(error.message);
        }
    }

    return (
        <div>
           <form action="">
                <div>
                    <input type="text" placeholder="Edit Title" id="title" name="title" value={bookData.title} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder="Edit Author" id="author" name="author" value={bookData.author} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder="Edit PublishYear" id="publishYear" name="publishYear" value={bookData.publishYear} onChange={handleChange}/>
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>Update</button>
                </div>
           </form>
        </div>
    )


}
export default EditBook;