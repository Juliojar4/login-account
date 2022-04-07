
import caracterError from "../err/caracterError.js"
import genericErr from "./genericErr.js"

const validateName = (name,res) => {

    if (genericErr(name, 'nome', res)) return

    if (name.length > 13) {
        caracterError(13, res)
    }
 
}

export default validateName 