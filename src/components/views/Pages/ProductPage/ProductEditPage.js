import React, { useState, useEffect } from 'react';

import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import EditButton from '../../Button/EditButton';
import CancelButton from '../../Button/CancelButton';
import '../styles.css';

function ProductEditPage(props) {
    const [Id, setId] = useState("");
    const [Image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");

    useEffect(() => {
        // axios로 해당 정보 불러오기
    }, [])

    const onIdHandler = (e) => {
        setId(e.target.value);
    }

    const onImageHandler = (e) => {
        setImage(e.target.value);
    }

    const onPriceHandler = (e) => {
        setPrice(e.target.value);
    }

    const onDescriptionHandler = (e) => {
        setDescription(e.target.value);
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
                      <input type="text" size="70" className="product-id" onChange={onIdHandler}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">사진</td>
                    <td>
                      <input type="text" size="70" className="image" onChange={onImageHandler}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">가격</td>
                    <td>
                      <input type="text" size="70" className="price" onChange={onPriceHandler}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">설명</td>
                    <td>
                      <input type="text" size="70" className="description" onChange={onDescriptionHandler}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="edit-buttons">  
                    <EditButton />
                    <CancelButton />
                </div>
            </div>
          </div>
      </div>
    );
}

export default ProductEditPage
