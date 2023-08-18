class PagesController {
    async home(req, res) {
        res.render('index.ejs')
    }
}

module.exports = PagesController