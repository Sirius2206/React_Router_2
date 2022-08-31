import { useParams } from "react-router-dom";
import formatTimeStamp from "../../functions/formatTimeStamp";

function CardEdit({data}) {
    const param = useParams();
    const {id, content, created} = data.filter(item => item.id == param.id);
    
    return(
        <div className="container container__card">
            <header className="header card__header">
                <div className="avatar header__avatar"></div>
                <div className="card__person">
                    <div className="person__name">Имя Фамилия</div>
                    <div className="person__info">
                        <span className="info__role">Основатель группы</span>
                        <span className="info__time">{formatTimeStamp(created)}</span>
                    </div>
                </div>
            </header>
            <main className="card__main">
                <div className="card__content">
                    <p>{content}</p>
                </div>
                <div className="card__buttons">
                    <button className="card__btn card__like-btn">Нравится</button>
                    <button className="card__btn card__comment-btn">Комментировать</button>
                </div>
            </main>
            <footer className="card__footer card-edit__footer">
                <button className="btn card-edit__btn">Изменить</button>
                <button className="btn card-edit__btn delete-btn">Удалить</button>
            </footer>
        </div>
    )
}

export default CardEdit;
