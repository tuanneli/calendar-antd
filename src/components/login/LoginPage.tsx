import React from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <div>
            <Layout>
                <Row justify={"center"} align={"middle"} style={{height: 'calc(100vh - 64px)'}}>
                    <Card>
                        <LoginForm/>
                    </Card>
                </Row>
            </Layout>
        </div>
    );
};

export default LoginPage;