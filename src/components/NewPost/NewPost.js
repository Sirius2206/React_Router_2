import { NavLink } from "react-router-dom";
import "./NewPost.css"

function NewPost() {
    return (
        <div className="container container__new-post">
            <NavLink className="btn new-post__btn" to="/posts/new">Создать пост</NavLink>
        </div>
    )
}

export default NewPost;