import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { connect } from "react-redux";
import { userAction } from "../../action/userAction";
import { bindActionCreators } from "redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginFormComponent = ({ login }) => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const handleChange = (prop) => (e) => {
    setAccount({ ...account, [prop]: e.target.value });
  };

  const handleSubmit = () => {
    login(account);
  };

  return (
    <Row>
      <div className="login-form">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input onChange={handleChange("username")} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password onChange={handleChange("password")} />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
              className="button"
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
              className="button"
            >
              Login with Facebook
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(userAction.postLogin, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(LoginFormComponent);
