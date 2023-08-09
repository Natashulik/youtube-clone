import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setQuantityForEditRequest} from '../redux/favoriteSlice';


const SliderEditBlock = () => (
    <Space
      style={{
        width: '100%',
      }}
      direction="vertical"
    >
      <IntegerEditStep />
      </Space>
  );
  export default SliderEditBlock;

const IntegerEditStep = () => {
  const dispatch = useDispatch();
  const quantityForEditRequest = useSelector(state => state.favorite.quantityForEditRequest);

  const onChange = (newQuantity) => {
     dispatch(setQuantityForEditRequest(newQuantity)); // меняем запрос для edit
  };
  return (
    <Row> 
      <Col span={18}>
        <Slider
          min={0}
          max={50}
          onChange={onChange}
        //  value={typeof quantityForEditRequest === 'number' ? quantityForEditRequest : 0}
        value={quantityForEditRequest}
     
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
          value={quantityForEditRequest}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

/*
const SliderEditBlock = () => (
    <Space  style={{ width: '100%' }} direction="vertical" >
      <IntegerEditStep />
      </Space>
  );
  export default SliderEditBlock;

const IntegerEditStep = () => {
  const dispatch = useDispatch();
  const quantityForEditRequest = useSelector(state => state.favorite.quantityForEditRequest);

  const onChange = (newQuantity) => {
     dispatch(setQuantityForEditRequest(newQuantity));
  };
  return <Row>  <Col span={18}>
        <Slider  min={0} max={50}  onChange={onChange} value={typeof quantityForEditRequest/>
      </Col>
      <Col span={2}>
        <InputNumber  min={0}  max={50} value={quantityForEditRequest} onChange={onChange} />
      </Col>
    </Row>};

*/

