import {Link} from "react-router-dom";

const EventWritten = ({id, no, date, title, body}) =>{
    return(<Link 
    to={{ pathname: `/eventwritten/${no}`,
        state: {
            id,
            no,
            date,
            title,
            body
        }
    }}>
        <div className="board_content">
            <div className="sub num">{no}</div>
            <div className="sub subTitle">{title}</div>
            <div className="sub date">{date}</div>
        </div>
    </Link>
    );
}

export default EventWritten;