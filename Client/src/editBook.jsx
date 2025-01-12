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
        
        <div className="d-flex justify-content-center edit-box">
            <div className="card edit_book_info">
                <div className="card-header edit_book_header d-flex justify-content-center"><h2>Edit Book</h2></div>
                <div className="row">
                    <form action="">
                        <div className="mb-3 mt-3 ms-3 me-3">
                            <input type="text" className="form-control" placeholder="Edit Title" id="title" name="title" value={bookData.title} onChange={handleChange}/>
                        </div>
                        <div className="mb-3 mt-3 ms-3 me-3">
                            <input type="text" className="form-control" placeholder="Edit Author" id="author" name="author" value={bookData.author} onChange={handleChange}/>
                        </div>
                        <div className="mb-3 mt-3 ms-3 me-3">
                            <input type="text" className="form-control" placeholder="Edit PublishYear" id="publishYear" name="publishYear" value={bookData.publishYear} onChange={handleChange}/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-warning" onClick={handleSubmit}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}
export default EditBook;