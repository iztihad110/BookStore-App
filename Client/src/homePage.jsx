
import { useNavigate } from "react-router-dom"

function HomePage(){
    let navigate = useNavigate();

    let handleClick = (link)=>{
        navigate(link);
    }
    return (
        <div>
            <button type="button" onClick={()=> handleClick("/create-book")}>Add Book</button>
            <button type="button" onClick={()=> handleClick("/delete-book")}>Delete Book</button>
        </div>
    )
}
export default HomePage;