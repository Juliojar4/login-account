import validator from "email-validator"
import invalidInformation from "../err/invalidInformation.js"
import genericErr from "./genericErr.js"

const validateEmail = (email, res) => {
   
    if(genericErr(email, 'email', res)) return 
     
    if(!validator.validate(email)) {
        return invalidInformation('email', res)
    }  
    return true
}
export default validateEmail

  