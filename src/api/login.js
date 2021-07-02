import instance from "./request";

const login = (res) =>{
  return instance({
    url: '/login',
    method: 'post',
    data: res
  }).then(response=>{
    if(response.data.success){
      return response.data;
    }else{
      console.log("出错了");
      return response.data;
    }
  })
}

export {login}