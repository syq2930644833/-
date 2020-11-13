module.exports = class testController  {
    static async findTest(ctx){
        try{
            await console.log('ctx.session.logged:', ctx)
            return ctx.body = {
                "data": null,
                "message": '账号或密码错误',
                "resultCode": 0
            }
        }catch(error) {
            console.log('error: ', error);
        }
    }
}
