import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./CreatePost.css"

function CreatePost() {
    const textareaRef = useRef(5);
    
    async function handleCreate(e) {
        e.preventDefault();
        if (!textareaRef.current.value) return;
        const request = { id: 0, content: textareaRef.current.value };
        await fetch(`http://localhost:7777/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(request),
        });
        textareaRef.current.value = "";
        window.location.replace("/");
      }
return (
    <div className="container create__container">
        <header className="header create__header">
            <ul className="create__header_list">
                <li className="create__header_element"><a className="create__header_link" href="#">Публикация</a></li>
                <li className="create__header_element"><a className="create__header_link" href="#">Фото/видео</a></li>
                <li className="create__header_element"><a className="create__header_link" href="#">Прямой эфир</a></li>
                <li className="create__header_element"><a className="create__header_link" href="#">Ещё</a></li>
            </ul>
        </header>
        <main className="main create__main">
            <div className="avatar create__avatar"></div>
            <textarea className="textarea create__textarea" ref={textareaRef} placeholder="Оставить комментарий..."/>
        </main>
        <footer className="footer create__footer">
            <button className="btn create__btn" onClick={handleCreate}>Опубликовать</button>
        </footer>
    </div>
)
}

export default CreatePost;

