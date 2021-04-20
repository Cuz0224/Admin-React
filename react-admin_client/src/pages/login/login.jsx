import React from 'react'
import './login.css'
import logo from './images/avatar.jpg'
import { Form, Input, Button, message } from 'antd';
import reqLogin from '../../api/index'

export default class Login extends React.Component{
    handleSubmit = (event) => {
        console.log('cool')
    }
//todo 有点问题
    async onFinish = (err,values) => {
        console.log('Success:', values);
        if (!err) {
            const { username, password } = values
            const response = await reqLogin(username, password)
            const result = response.data
            if (result.status === 0) {
                message.success('登陆成功')
            //*跳转到管理界面（不需要再退回到登陆）
                this.props.history.replace('/')
            } else {
                //*登陆失败 提示错误信息
                message.error(result.msg)
            }
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    validatePWD = (rule, value, callback) => {
        if (!value) {
            callback('密码必须输入')
        } else if (value.length < 4) {
            callback('密码长度不能小于4')
        } else if (value.length > 12) {
            callback('密码长度不能大于12')
        }
    }

    render() {
        return (
            <div className='login'>
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        name="basic"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                          label="账号"
                            name="username"
                            //声明式验证，直接使用别人定义好的验证规则
                            rules={[{ required: true, message: '用户名不能为空' },
                                    { min:4, message:'用户名至少4位'},
                                    { max: 12, message: '用户名至多12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须由英文、数字或下划线组成'}
                            ]}
                          
                        >
                            <Input
                                placeholder='请输入账号'
                                
                            />
                        </Form.Item>
                        <Form.Item
                          label="密码"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your password!',
                              },
                            {
                                validator:this.validatePWD    
                            }
                          ]}
                        >
                            <Input.Password
                                placeholder='请输入密码'
                            />
                        </Form.Item>
            
                        <Form.Item >
                          <Button type="primary" htmlType="submit" className='button' onClick={this.handleSubmit}>
                            提交
                          </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
