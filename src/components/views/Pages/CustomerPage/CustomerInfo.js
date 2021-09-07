import {Link} from "react-router-dom";

const CustomerInfo = ({no, id, username, email, password, ecopoint}) =>{
    return(<Link 
    to={{ pathname: `/customer/edit/${no}`,
        state: {
        no,
        id,
        username,
        email,
        password,
        ecopoint
        }
    }}>
        <div className="board_content">
            <div className="sub num">{no}</div>
            <div className="sub name">{username}</div>
            <div className="sub email">{email}</div>
            <div className="sub password">{password}</div>
            <div className="sub ecoPoint">{ecopoint}</div>
        </div>
    </Link>
    );
}

export default CustomerInfo;