import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import "./EventWrittenPage.css";
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import DeleteButton from '../../Button/DeleteButton';
import CancelButton from '../../Button/CancelButton';

const EventWrittenPage = (props) => {
    const {id, no, date, title, body, image} = props.location.state;
    const [isBoardImage, setIsBoardImage] = useState(false);
    const [boardImage, setBoardImage] = useState();
    const token = localStorage.getItem('token');
    const history = useHistory();

    useEffect(() => {
        // fetch(`http://54.180.146.9:3001/auth-non/file?folder_id=${image}&idx=0`, {
        //     method: "GET",
        //     headers: {
        //     }
        // })
        // .then((response) => {
        //     return response.json();
        // })
        // .then((response) => {
        //     console.log(response.data);
        //     setBoardImage(response.data);
        //     setIsBoardImage(true);
        // })
    }, [])

    const deleteData = () => {
        fetch(`http://54.180.146.9:3001/admin/post?post_id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            alert('포스트가 삭제되었습니다.');
            history.goBack();
            console.log(response.data);
        })
    }

    return(
        <div className="event">
            <Navbar selected={3} />
            <div className="board">
                <Title title="행사 관리" subtitle="행사 관리" />
                <div className="content">
                    <div className="body_main_WrittenPage">
                        <div className="board_title">
                            <span>{title}</span>
                        </div>
                        <div className="title_sub">
                            <span>No{no} {date}</span>
                        </div>
                        <div className="board_body">
                            {body}
                        </div>
                        <div className="board_image">
                            <img 
                            src={`http://54.180.146.9:3001/auth-non/file?folder_id=${image}&idx=0`}
                            alt='event-img'
                            width='100%' />
                        </div>
                    </div>
                    <div className="buttons">
                        <DeleteButton deleteData={deleteData} />
                        <CancelButton />
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default EventWrittenPage;