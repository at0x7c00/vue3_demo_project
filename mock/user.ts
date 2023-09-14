function createUserList() {
    return [
        {
            userId: 1,
            username: 'admin',
            password: '111111',
            token: 'token01'
        },
        {
            userId: 2,
            username: 'tom',
            password: '222222',
            token: 'token02'
        }
    ]

}

export default [
    //api for user login
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }) => {
            const { username, password } = body
            console.log('username',username)
            const checkUser = createUserList().find(
                (item) => item.username === username && item.password === password
            )
            if (!checkUser) {
                return { code: 201, data: { message: "账号或密码不正确" } }
            }
            const { token } = checkUser
            return { code: 200, data: { token } }
        }
    },
    {
        url: '/api/user/info',
        method: 'get',
        response: (request) => {
            const token = request.headers.token;
            const checkUser = createUserList().find(
                (item) => item.token === token
            )
            if (!checkUser) {
                return { code: 201, data: { message: "获取用户信息失败" } }
            }
            return { code: 200, data: { checkUser } }
        }
    }
]