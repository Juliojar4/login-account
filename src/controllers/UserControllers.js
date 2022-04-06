import User from '../models/User.js'
import creatToken from '../helpers/creat_token.js'
import getToken from '../helpers/getToken.js'
import getUserByToken from '../helpers/getUserByToken.js'
// import validate from '../helpers/validate.js'
import jwt from 'jsonwebtoken'

export default class userControllers {

    static async register(req, res) {
    
        const { name, email, cpf, password } = req.body

        const usuarioExistente = await User.findOne({ email })
            if(usuarioExistente){
                res.status(422).json({ message: 'Email já existente em nosso banco de dados' })  
                    return               
            }
      
        const user = new User({
            name: name,
            email: email,            
            cpf: cpf,   
            password:password  
        })
        try {
            const newUser = await user.save();
            await creatToken(newUser, req, res) 
        }   catch (err) {
                res.status(500).json({ message: err })
        }
    }

    static async login(req,res) {
        const email = req.body.email
        const senha = req.body.password

        const user = await User.findOne({ email })

        if(!user) {
            res.status(422).json({ message: "Usuario não encontrado"})
            return
        }

        if(senha != user.password) {
            res.status(422).json({ message: "Senha incorreta"})
            return           
        }

        await creatToken({
            id: user.id,
            email: user.email,
        },req,res)
    }

    static async checkUser(req, res) {
        let usercorent

        if (req.headers.authorization) {
            const token = getToken(req)
            const decoded = jwt.verify(token, 'segredo')
            
            usercorent = await User.findById(decoded.id)
            
            usercorent.password = undefined
        }
        else {     
            usercorent = null
        }
        res.status(200).send(usercorent)
    }

    static async updateUser(req,res) {
        const token = getToken(req)

        const user = await getUserByToken(token)

        const name = req.body.name
        const cpf = req.body.cpf
        const email = req.body.email
        const password = req.body.password

        // User.schema.obj.map((value) => {
        //     console.log( value);
        // })
        console.log(typeof User.schema.obj );

        user.name = name
        user.cpf = email
        user.email = email
        user.password = password

    try {
      // returns updated data
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true },
      )
      res.json({
        message: 'Usuário atualizado com sucesso!',
        data: updatedUser,
      })
    } catch (error) {
      res.status(500).json({ message: error })
    }
    }
}