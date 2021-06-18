import Mock from "mockjs";

export default Mock.mock(
  '/api/login',
  'post',
  (req) =>{
    const {password, username} = JSON.parse(req.body)
    if(username === 'admin' && password === '123456'){
      return {
        success: true
      }
    }else{
      return {
        success: false
      }
    }
  }
)
