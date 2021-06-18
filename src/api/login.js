import instance from "./request";

const login = (res) =>{
  return instance({
    url: '/login',
    method: 'post',
    data: res
  }).then(response=>{
    if(response.data.success){
      console.log(response.data.data);
    }else{
      console.log("出错了")
    }
  })
}

export {login}