import {Link} from "react-router-dom";

const EventWritten = ({no, like, date, title, body}) =>{
    return(<Link 
    to={{ pathname: `/eventwritten/${no}`,
        state: {
        no,
        like,
        date,
        title,
        body    
        }
    }}>
        <div className="board_content">
            <div className="sub num">{no}</div>
            <div className="sub subTitle">{title}</div>
            <div className="sub date">{date}</div>
            <div className="sub like">{like}</div>
        </div>
    </Link>
    );
}

export default EventWritten;