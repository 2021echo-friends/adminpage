import {Link} from "react-router-dom";

const CustomerInfo = ({no, username, email, password, ecopoint}) =>{
    return(<Link 
    to={{ pathname: `/customer/edit/${no}`,
        state: {
        no,
        username,
        email,
        password,
        ecopoint
        }
    }}>
        <div className="board_content">
            <div className="sub num">{no}</div>
            <div className="sub subTitle">{username}</div>
            <div className="sub date">{email}</div>
            <div className="sub like">{password}</div>
        </div>
    </Link>
    );
}

export default CustomerInfo;