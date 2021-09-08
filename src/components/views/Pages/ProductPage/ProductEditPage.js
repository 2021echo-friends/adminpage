import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import DeleteButton from 'components/views/Button/DeleteButton';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';

function ProductEditPage(props) {
    const token = localStorage.getItem("token");
    const {num, id, name, price, description, point, ecopointCO2, ecopointO3, ecopointCH4, cnt} = props.location.state;
    const [Id, setId] = useState(num);
    const [Name, setName] = useState(name);
    const [Price, setPrice] = useState(price);
    const [Description, setDescription] = useState(description);
    const [Point, setPoint] = useState(point);
    const [EcoPointCO2, setEcoPointCO2] = useState(ecopointCO2);
    const [EcoPointO3, setEcoPointO3] = useState(ecopointO3);
    const [EcoPointCH4, setEcoPointCH4] = useState(ecopointCH4);
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

    const onEcoPointCO2Handler = (e) => {
      setEcoPointCO2(e.target.value);
    }
    const onEcoPointO3Handler = (e) => {
      setEcoPointO3(e.target.value);
    }
    const onEcoPointCH4Handler = (e) => {
      setEcoPointCH4(e.target.value);
    }

    const deleteData = (e) => {
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
                    <td className="td-title">에코포인트 CO2</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="EcoPoint"
                      onChange={onEcoPointCO2Handler}
                      value={EcoPointCO2}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">에코포인트 O3</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="EcoPoint"
                      onChange={onEcoPointO3Handler}
                      value={EcoPointO3}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">에코포인트 CH4</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="EcoPoint"
                      onChange={onEcoPointCH4Handler}
                      value={EcoPointCH4}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">판매량</td>
                    <td>
                      <input
                      type="text"
                      size="70"
                      className="count"
                      value={cnt}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="edit-buttons">  
                    <DeleteButton deleteData={deleteData} />
                    <CancelButton />
              </div>
            </div>
          </div>
      </div>
    );
}

export default ProductEditPage
