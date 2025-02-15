import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";
function DeleteBook(){
    let {id} = useParams();
    let navigate= useNavigate();
    let handleClick = async (e)=>{
        e.preventDefault();

        try{
            let response = await axios.delete(`http://localhost:3000/books/${id}`).then(()=>{navigate("/")});
                                    
            //alert(response.data.message);
        }
        catch(error){
            alert(error.message);
        }

        
    }

    return (
        <div className="delete-box d-flex">
            <form action="">
                <h3 className="mb-4">Are You Sure About This?</h3>
                <button  type="button" className="btn btn-danger" onClick={handleClick}>Click Here to Confirm the Delete</button>
            </form>
        </div>
    )
}

export default DeleteBook;