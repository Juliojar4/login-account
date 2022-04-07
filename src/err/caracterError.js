
const caracterError = ( max,res ) => {
    res.status(422).json({ message: `O maximo de caracter é ${max}`})
}

export default caracterError