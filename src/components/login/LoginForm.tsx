import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypeSelector";
import {AuthActionCreators} from "../../store/reducers/auth/authActionCreators";

const LoginForm = () => {

    const {user, isAuth, isLoading, error} = useAppSelector(state => state.authReducer);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = () => {
        dispatch(AuthActionCreators.login({username, password}));
        dispatch(AuthActionCreators.setError(""));
        setUsername("");
        setPassword("");
    }

    const dispatch = useAppDispatch();

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={submitForm}>
            {error ? <div style={{color: 'red', textAlign: 'center', marginBottom: 15}}>{error}</div> : null}
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button block
                        type="primary"
                        loading={isLoading}
                        htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;