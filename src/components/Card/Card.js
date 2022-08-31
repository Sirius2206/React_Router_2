import "./Card.css"
import formatTimeStamp from "../../functions/formatTimeStamp";

function Card({props}) {
    const {id, content, created} = props;

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
            <footer className="card__footer">
            <div className="avatar footer__avatar"></div>
            <input className="card__comment-input" placeholder="Напишите комментарий..." />
            </footer>
        </div>
    )
}


export default Card;

