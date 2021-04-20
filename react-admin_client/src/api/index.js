/*
包含应用中所有接口请求函数的模块
!能根据接口文档定义接口需求
*/
import ajax from './ajax'


//*统一暴露
//* export default {
//*    xxx() { }
//*   xxxx(){}
//* }

// export function reqLogin() {
//     ajax('/login', {username,password},'POST')
// }

export const resLogin = (username, password) => ajax('/login', { username, password }, 'POST')

export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST')

