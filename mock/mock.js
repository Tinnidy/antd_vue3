import Mock from "mockjs";

export default Mock.mock(
    '/api/login',
    'post',
    (req) => {
        console.log("请求参数", JSON.parse(req.body));
        const { password, username } = JSON.parse(req.body)
        if (username === 'tinnidy' && password === 'cly17894310') {
            return {
                success: true
            }
        } else {
            return {
                success: false
            }
        }
    }
)