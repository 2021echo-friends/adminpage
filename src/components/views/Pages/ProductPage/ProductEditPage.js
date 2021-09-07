import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import EditButton from '../../Button/EditButton';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';

function ProductEditPage(props) {
    const token = localStorage.getItem("token");
    const {num, id, name, price, description, point, ecopoint} = props.location.state;
    const [Id, setId] = useState(num);
    const [Name, setName] = useState(name);
    const [Price, setPrice] = useState(price);
    const [Description, setDescription] = useState(description);
    const [Point, setPoint] = useState(point);
    const [EcoPoint, setEcoPoint] = useState(ecopoint);
    const history = useHistory();

    useEffect(() => {

    }, [])

    const onIdHandler = (e) => {
        setId(e.target.value);
    }

    const onNameHandler = (e) => {
      setName(e.target.value);
    }

    const onPriceHandler = (e) => {
        setPrice(e.target.value);
    }

    const onDescriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const onPointHandler = (e) => {
      setPoint(e.target.value);
    }

    const onEcoPointHandler = (e) => {
      setEcoPoint(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      fetch(`http://54.180.146.9:3001/admin/product?product_id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        return response.json()
      })
      .then(response => {
        history.goBack();
      })
      .catch((err) => console.log(err));
    }

    return (
      <div className="product">
        <Navbar selected={2} />
          <div className="board">
            <Title title="물품 관리" subtitle="물품 정보 수정" />
            <div className="content">
              <table className="edit-table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="td-title">물품 아이디</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="product-id"
                      onChange={onIdHandler}
                      value={Id}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">상품명</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="productName"
                      onChange={onNameHandler}
                      value={Name}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">가격</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="price"
                      onChange={onPriceHandler}
                      value={Price}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">설명</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="description"
                      onChange={onDescriptionHandler}
                      value={Description}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">적립포인트</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="point"
                      onChange={onPointHandler}
                      value={Point}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">에코포인트</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="EcoPoint"
                      onChange={onEcoPointHandler}
                      value={EcoPoint}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="edit-buttons">  
                    <div className="deleteButton">
                      <button onClick={onSubmit}>삭제</button>
                    </div>
                    <CancelButton />
              </div>
            </div>
          </div>
      </div>
    );
}

export default ProductEditPage
