function NewsItem(props) {
    return (
        <div id={`item-${props.key}`} className={props.className}> {/* Usa item-{id} como id de la noticia */}
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={`#item-${props.key}`}>Ver más</a> {/* O cualquier enlace que necesites */}
        </div>
    );
}

export default NewsItem;
