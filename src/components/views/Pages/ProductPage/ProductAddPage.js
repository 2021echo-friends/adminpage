import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';

function ProductAddPage() {
    const token = localStorage.getItem("token");
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState(0);
    const [Description, setDescription] = useState("");
    const [Point, setPoint] = useState(0);
    const [EcoPoint, setEcoPoint] = useState(0);
    const history = useHistory();

    useEffect(() => {   
        
    }, [])

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
      fetch("http://54.180.146.9:3001/admin/product", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: Name,
              price: Price,
              description: Description,
              point_value: Point,
              eco_value: EcoPoint,
              })
            })
            .then(response => {
                return response.json()
            })
            .then(response => {
                alert('등록이 완료되었습니다.')
                history.goBack();
            })
            .catch((err) => console.log(err));
    }

    return (
      <div className="product">
        <Navbar selected={2} />
        <div className="board">
          <Title title="물품 관리" subtitle="물품 신규 등록" />
          <div className="content">
            <form onSubmit={onSubmit}>
              <table className="edit-table">
                <thead></thead>
                <tbody>
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
                <button onClick={onSubmit}>등록</button>
              </div>
            </form>
            <CancelButton />
          </div>
        </div>
      </div>
    );
}

export default ProductAddPage
