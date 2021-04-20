/*
能异步发送ajax请求的函数模块
封装axios库
函数的返回值是promise对象

?优化：统一处理请求异常?
?在外层包一个自己创建的promise对象
?在请求出错时不reject(error),而是显示错误提示

?优化2：异步得到的是response.data 而不是response
?在请求成功resolve的时候，把response 换成response.data
*/

import axios from 'axios'
import message from 'antd'

export default function ajax(url, data = {}, type = 'GET') {
        let promise
    
        //!1.执行ajax请求
        if (type === 'GET') { //发get请求
            promise = axios.get(url, { //配置对象
                params: data
            })
        } else { //发post请求
            promise = axios.post(url, data)
        }
        //!2.如果成功了，调用resolve(value)
        promise.then(response => {
            //resolve(response)
            //!3.如果失败了，不调用reject(reason)，而是提示异常信息
        }).catch(error => {
            //reject(error)
            message.error('请求出错了'+error.message)
        })
        
        

    
    
}

