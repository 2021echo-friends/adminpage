import "./EventWrittenPage.css";
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import Searchbar from '../../Searchbar/Searchbar';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';

const EventWrittenPage = (props) => {
    const criteria = [ '행사 아이디' ];
    const {no, like, date, title, body} = props.location.state;
    return(
        <div className="event">
            <Navbar selected={3} />
            <div className="board">
                <Title title="행사 관리" />
                <div className="content">
                    <Searchbar criteria={criteria} />
                    <div className="buttons">
                        <EditButton />
                        <DeleteButton />
                    </div>  
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
                    </div>
                    <div>이전다음</div>
                </div>
            </div>
        </div>
    );
}

export default EventWrittenPage;