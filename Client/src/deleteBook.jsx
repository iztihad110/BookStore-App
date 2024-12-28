import axios from "axios";
function DeleteBook(){


    let handleClick = async (e)=>{
        e.preventDefault();

        try{
            let response = await axios.delete("http://localhost:3000/books");
            alert(response.data.message);
        }
        catch(error){
            alert(error.message);
        }
    }

    return (
        <div>
            <form action="">
                <button type="button" onClick={handleClick}>Click Here to Confirm the Delete</button>
            </form>
        </div>
    )
}

export default DeleteBook;