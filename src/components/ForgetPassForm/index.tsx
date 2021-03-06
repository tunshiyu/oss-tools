/*
 * @文件描述: 忘记密码的表单
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-26 16:31:35
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-04-26 16:34:13
 */
import React from 'react';
import { Form, Button, Input } from 'antd';
import { Store } from 'antd/lib/form/interface';

export default function ForgetPassForm() {
  const handleFinish = (values: Store) => {
    console.log(values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
}
