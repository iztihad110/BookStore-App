import { Routes, Route } from "react-router-dom"
import HomePage from "./homePage"
import CreateBook from "./createBook"
import DeleteBook from "./deleteBook"
import EditBook from "./editBook"
function RouterComponent(){

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create-book" element={<CreateBook/>} />
            <Route path="/delete-book/:id" element={<DeleteBook/>} />
            <Route path="/edit-book/:id" element={<EditBook/>}/>
        </Routes>
    )
}

export default RouterComponent;