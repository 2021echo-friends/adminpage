import {Link} from "react-router-dom";

const ProductInfo = ({num, id, name, price, description, point, ecopointCO2, ecopointO3, ecopointCH4}) =>{
    return(<Link 
    to={{ pathname: `/product/edit/${num}`,
        state: {
            num,
            id,
            name,
            price,
            description,
            point,
            ecopointCO2,
            ecopointO3,
            ecopointCH4
        }
    }}>
        <div className="board_content">
            <div className="sub num">{num}</div>
            <div className="sub name">{name}</div>
            <div className="sub price">{price}</div>
            <div className="sub point">{point}</div>
            <div className="sub ecoPoint">{ecopointCO2 + ecopointO3 + ecopointCH4}</div>
        </div>
    </Link>
    );
}

export default ProductInfo;