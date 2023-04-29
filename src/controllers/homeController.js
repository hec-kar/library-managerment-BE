
const getLoginPage = (req, res) => {
    let indexUrl = __dirname.replace('\\controllers', '\\views')
    return res.sendFile(indexUrl + '/login.html');
}

const getHomePage = (req, res) => {
    console.log(req.session.user)
    if (!req.session.user) {
        return res.redirect('/login');
    }
    let indexUrl = __dirname.replace('\\controllers', '\\views')
    return res.sendFile(indexUrl + '/client-library.html');
}

module.exports = {
    getLoginPage, getHomePage
}