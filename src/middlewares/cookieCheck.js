module.exports = (req,res,next) => {
    if(req.cookies.secretEzedeth){
        req.session.userLogin = req.cookies.secretEzedeth
    }
    next()
}