
const caracterError = (inf, res) => {
    res.status(422).json({ message: `As informações do ${inf} estão invalidas!` })
}

export default caracterError