import React from 'react';
import {Layout, Menu, MenuProps, Row} from "antd";
import {Header} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";
import {ERouteNames} from "../../routes/routes";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypeSelector";
import {AuthActionCreators} from "../../store/reducers/auth/authActionCreators";
import {IUser} from "../../types/userTypes";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isAuth, user} = useAppSelector(state => state.authReducer);

    const items1: MenuProps['items'] = [1].map((key) => ({
        key,
        label: !isAuth ? `Login` : 'Logout',
    }));

    const logoutHandler = () => {
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUser({} as IUser));
        navigate(ERouteNames.LOGIN);
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("auth");
    }

    const navigateHandler = () => {
        navigate('/login');
    }

    return (
        <Layout>
            <Header>
                <Row justify={'end'}>
                    {!isAuth ?
                        <Menu style={{width: 80}}
                              selectable={false}
                              theme={'dark'}
                              mode={'horizontal'}
                              items={items1}
                              onClick={navigateHandler}
                              key={1}>
                        </Menu> :
                        <>
                            <div style={{color: "white"}}>
                                {user?.username}
                            </div>
                            <Menu style={{width: 80}}
                                  selectable={false}
                                  theme={'dark'}
                                  mode={'horizontal'}
                                  items={items1}
                                  onClick={logoutHandler}
                                  key={1}>
                            </Menu>
                        </>}
                </Row>
            </Header>
        </Layout>
    );
};

export default Navbar;