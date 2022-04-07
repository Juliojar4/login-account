
import caracterError from "../err/caracterError.js"
import genericErr from "./genericErr.js"

const validatePassword = (password,confirPassword,res) => {

    let erros = []

    const brokenPassword = password.split('') 
    const testFistLetter = brokenPassword[0] == brokenPassword[0].toUpperCase()

    if (genericErr(password, 'password', res)) return
    if (genericErr(confirPassword, 'confirPassword', res)) return

    (password != confirPassword) ? erros.push('As senhas são diferentes') : '' 

    if (password.length < 8) {
        erros.push('A senha deve ter no minimo 8 caracteries')
    } 

    if (!testFistLetter) {
        erros.push('A senha deve ter a primeira letra maiúscula')
    }   

    if (erros.length > 0) {
        res.status(422).json({ message: erros })
        return false
    }
    
    return true
}

export default validatePassword