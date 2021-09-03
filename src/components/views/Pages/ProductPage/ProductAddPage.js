import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import NewButton from 'components/views/Button/NewButton';
import CancelButton from '../../Button/CancelButton';
import EcoPointPage from '../EcoPointPage/EcoPointPage';

function ProductAddPage(props) {
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState(0);
    const [Description, setDescription] = useState("");
    const [Point, setPoint] = useState(0);
    const [Eco, setEco] = useState(0);
    const token = localStorage.getItem("token");
    const history = useHistory();

    useEffect(() => {   
        
    }, [])

    const onNameHandler = (e) => {
        setName(e.target.value);
    }

    const onPointHandler = (e) => {
        setPoint(e.target.value);
    }

    const onEcoHandler = (e) => {
      setEco(e.target.value);
  }
    const onPriceHandler = (e) => {
        setPrice(e.target.value);
    }

    const onDescriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();

      fetch("http://54.180.146.9:3001/admin/product", {
            method: "POST",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: Name,
              price: Price,
              description: Description,
              point_value: Point,
              eco_value: Eco,
              })
            })
            .then(response => {
              // if(response.ok) {
                return response.json()
              // } else {
              //   throw new Error('error');
              // }
            })
            .then(response => {
                console.log(response);
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
                    <td className="td-title">물품 이름</td>
                    <td>
                      <input
                        type="text"
                        size="70"
                        className="product-name"
                        onChange={onNameHandler}
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
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">에코 포인트</td>
                    <td>
                      <input
                        type="text"
                        size="70"
                        className="point"
                        onChange={onPointHandler}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">환경 점수</td>
                    <td>
                      <input
                        type="text"
                        size="70"
                        className="eco"
                        onChange={onEcoHandler}
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
