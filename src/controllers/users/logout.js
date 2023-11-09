module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('secretEzedeth', null,{
        maxAge : -1
    })
    
    return res.redirect('/')
}