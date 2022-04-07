import { cpf } from 'cpf-cnpj-validator'
import invalidInformation from "../err/invalidInformation.js"
import genericErr from "./genericErr.js"

const validateCpf = (cpfs, res) => {
   
    if(genericErr(cpfs, 'cpf', res)) return 
     
    if(!cpf.isValid(cpfs)) {
        return invalidInformation('cpf', res)
    }  
    return true
}
export default validateCpf

  