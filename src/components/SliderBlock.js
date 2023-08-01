import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';

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
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={18}>
        <Slider
          min={0}
          max={50}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={2}>
        <InputNumber
          min={0}
          max={50}
          style={{
            margin: '0 16px',
            padding: '0 15px',
            "font-size": '20px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
