/**
 * 需要引用的组件封装再次
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