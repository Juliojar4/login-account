import jwt from 'jsonwebtoken'

const creat_token = async (user,req,res) => {

    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, 'segredo')

    res.status(200).json({
        message: "Voce está autenticado",
        token: token,
        userId:user._id
    })

}
export default creat_token