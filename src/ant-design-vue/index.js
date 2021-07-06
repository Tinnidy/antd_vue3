/**
 * 按需引用antd-design-vue组件
 */
 import {Form, Button, Input,Layout, Menu, Row, Col} from 'ant-design-vue';
 import 'ant-design-vue/dist/antd.css'

 const components = [
   Form,
   Button,
   Input, 
   Layout,
   Menu,
   Row,
   Col
 ]


export function setupAntd(app){
  components.forEach(item=>{
    app.use(item);
  })
}