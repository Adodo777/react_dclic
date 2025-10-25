import style from "./articlesItem.module.css"

function ArticlesItem(props) {
    const { imgURL, month, day, title, text } = props
    return (
        <div className={style.articlesItem}>
            <div className={}>
                <img src={imgURL} alt={title} />
            </div>
            <div className={}>
                <div className={}>
                    <span>{month}</span>
                    <span>{day}</span>
                </div>
                <div className={}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}