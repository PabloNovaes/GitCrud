const mysql = require('mysql2');

function conn(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gitcrud'
    });
    
    connection.connect((err)=>{
        if(err){
            console.log(`Erro de conexão: ${err}`)
            return
        }
        console.log("Conexão criada!")
    })
    return connection
}

module.exports = conn()

