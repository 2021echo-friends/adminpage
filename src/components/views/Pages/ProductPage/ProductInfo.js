import {Link} from "react-router-dom";

const ProductInfo = ({uid, price, name, pointScore, ecopoint}) =>{
    return(<Link 
    to={{ pathname: `/product/edit/${uid}`,
        state: {
            uid,
            price,
            name,
            pointScore,
            ecopoint
        }
    }}>
        <div className="board_content">
            <div className="sub num">{uid}</div>
            <div className="sub subTitle">{name}</div>
            <div className="sub date">{price}</div>
            <div className="sub like">{pointScore}</div>
        </div>
    </Link>
    );
}

export default ProductInfo;