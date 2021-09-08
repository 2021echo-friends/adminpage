import {Link} from "react-router-dom";

const QuizInfo = ({id, no, question, answer}) =>{
    return(<Link 
    to={{ pathname: `/quiz/${no}`,
        state: {
            id,
            no,
            question,
            answer
        }
    }}>
        <div className="board_content">
            <div className="sub num">{no}</div>
            <div className="sub question">{question}</div>
            <div className="sub answer">{answer}</div>
        </div>
    </Link>
    );
}

export default QuizInfo;