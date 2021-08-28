import "css/EventWritten.css";

const EventWrittenPage = (props) => {
    const {no, like, date, title, body} = props.location.state;
    return(
    <div className="body_main_WrittenPage">
        <div className="board_title">
            <span>{title}</span>
        </div>
        <div className="title_sub">
            <span>No{no} {date} {like}</span>
        </div>
        <div className="board_body">
            {body}
        </div>
        <div className="like_body">
            <button><span>공 감</span></button>
        </div>
    </div>
    );
}

export default EventWrittenPage;