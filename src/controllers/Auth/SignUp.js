const main = require('../../services/Email')

module.exports = async (req, res) => {
    const {to, type} = req.body;
    console.log(req.body)
    if (type === 'PRO'){
        main(to, 'Cadastro Directu', 'Bem Vindo à Directu!!! Entre nesse link para continuar o cadastro da sua conta Pro https://www.google.com')
        return res.status(200).send('PRO', {to, type})
    }else {
        main(to, 'Cadastro Directu', 'Bem Vindo à Directu!!! Entre nesse link para continuar o cadastro da sua conta https://www.google.com')
        return res.status(200).send( {to, type})
    }   
}