import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import CancelButton from '../../Button/CancelButton';
import AddButton from 'components/views/Button/AddButton';
import '../styles.css';

function ProductAddPage() {
    const token = localStorage.getItem("token");
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState(0);
    const [Description, setDescription] = useState("");
    const [Point, setPoint] = useState(0);
    const [EcoPointCO2, setEcoPointCO2] = useState(0);
    const [EcoPointO3, setEcoPointO3] = useState(0);
    const [EcoPointCH4, setEcoPointCH4] = useState(0);
    const history = useHistory();

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

    const addData = (e) => {
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
              eco_value_co2: EcoPointCO2,
              eco_value_o3: EcoPointO3,
              eco_value_ch4: EcoPointCH4
              })
            })
            .then(response => {
                return response.json()
            })
            .then(response => {
                alert('????????? ?????????????????????.')
                history.goBack();
            })
            .catch((err) => console.log(err));
    }

    return (
      <div className="product">
        <Navbar selected={2} />
        <div className="board">
          <Title title="?????? ??????" subtitle="?????? ?????? ??????" />
          <div className="content">
              <table className="edit-table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="td-title">?????????</td>
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
                    <td className="td-title">??????</td>
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
                    <td className="td-title">??????</td>
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
                    <td className="td-title">???????????????</td>
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
                    <td className="td-title">??????????????? CO2</td>
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
                    <td className="td-title">??????????????? O3</td>
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
                    <td className="td-title">??????????????? CH4</td>
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
                </tbody>
              </table>
              <div className="edit-buttons">
                <AddButton addData={addData} />
                <CancelButton />
              </div>
          </div>
        </div>
      </div>
    );
}

export default ProductAddPage
