import { Routes, Route } from "react-router-dom"
import HomePage from "./homePage"
import CreateBook from "./createBook"
import DeleteBook from "./deleteBook"
function RouterComponent(){

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create-book" element={<CreateBook/>} />
            <Route path="/delete-book" element={<DeleteBook/>}></Route>
        </Routes>
    )
}

export default RouterComponent;