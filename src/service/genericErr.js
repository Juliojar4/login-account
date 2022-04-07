
const genericErr = (content,fild,res) => {
    if (!content) {
        res.status(422).json({ message: `O campo ${fild} é obrigatorio` })
    }
}

export default genericErr