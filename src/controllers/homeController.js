
const getLoginPage = (req, res) => {
    let indexUrl = __dirname.replace('\\controllers', '\\views')
    return res.sendFile(indexUrl + '/login.html');
}

const getHomePage = (req, res) => {
    let indexUrl = __dirname.replace('\\controllers', '\\views')
    return res.sendFile(indexUrl + '/client-library.html');
}

module.exports = {
    getLoginPage, getHomePage
}