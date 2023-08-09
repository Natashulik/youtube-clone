import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setQuantityForNewRequest} from '../redux/favoriteSlice';


const SliderBlock = () => (
    <Space
      style={{
        width: '100%',
      }}
      direction="vertical"
    >
      <IntegerStep />
      </Space>
  );
  export default SliderBlock;

const IntegerStep = () => {
  const dispatch = useDispatch();
  const quantityForNewRequest = useSelector(state => state.favorite.quantityForNewRequest);
//  const selectedItem = useSelector(state => state.favorite.selectedItem);
 // const isModalEditOpen = useSelector(state => state.favorite.isModalEditOpen);

   const onChange = (newQuantity) => {
   
   dispatch(setQuantityForNewRequest(newQuantity)); // меняем запрос для новых
  };
  return (
    <Row> 
      <Col span={18}>
        <Slider
          min={0}
          max={50}
          onChange={onChange}
          value={typeof quantityForNewRequest === 'number' ? quantityForNewRequest : 0}
         />
      </Col>
      <Col span={2}>
        <InputNumber
          min={0}
          max={50}
          style={{
            margin: '0 16px',
            padding: '0 15px',
            "fontSize": '20px',
          }}
          value={quantityForNewRequest}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};





