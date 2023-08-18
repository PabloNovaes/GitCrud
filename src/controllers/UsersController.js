const db = require('../database/data')

class UserController {
    async show(req, res) {
        try {
            const data = await db.promise().query('SELECT * FROM users ORDER BY id DESC')
            res.send(data[0])
        } catch (error) {
            console.log(error)
        }
    };

    async showAsOne(req, res) {
        const { id } = req.params
        const query = ("SELECT * FROM users WHERE id = ?");
        try {
            const data = await db.promise().execute(query, [id])
            res.send(data[0])
        } catch (error) {
            res.send(console.log(error))
        }
    }

    async create(req, res) {
        const { nome, idade, avatar_url, date, time } = req.body
        const query = ("INSERT INTO users(nome, idade, avatar_url, created_date, created_time) VALUES (?, ?, ?, ?, ?)");
        try {
            const data = await db.promise().execute(query, [nome, idade, avatar_url, date, time])
            res.send(data)
        } catch (error) {
            res.send(console.log(error))
        }
    }

    async delete(req, res) {
        const { id } = req.params
        const query = ("DELETE FROM users WHERE id = ?")
        try {
            const data = await db.promise().execute(query, [id])
            res.send(data)
        } catch (error) {
            res.send(console.log(error))
        }
    }

    async update(req, res) {
        const { id } = req.params
        const { nome, idade, avatar_url } = req.body
        const query = ("UPDATE users SET nome = ?, idade = ?, avatar_url = ? WHERE users.id = ?;");
        try {
            const data = await db.promise().execute(query, [nome, idade, avatar_url, id])
            res.send(data)
        } catch (error) {
            res.send(console.log(error))
        }
    }
}

module.exports = UserController