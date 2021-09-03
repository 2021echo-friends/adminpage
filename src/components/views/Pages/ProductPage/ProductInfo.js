import {Link} from "react-router-dom";

const ProductInfo = ({num, name, price, description, point, ecopoint}) =>{
    return(<Link 
    to={{ pathname: `/product/edit/${num}`,
        state: {
            num,
            name,
            price,
            description,
            point,
            ecopoint
        }
    }}>
        <div className="board_content">
            <div className="sub num">{num}</div>
            <div className="sub name">{name}</div>
            <div className="sub price">{price}</div>
            <div className="sub point">{point}</div>
            <div className="sub ecoPoint">{ecopoint}</div>
        </div>
    </Link>
    );
}

export default ProductInfo;