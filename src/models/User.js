import mongoose from '../db/conn.js'
const model = mongoose.model

const { Schema } = mongoose

const Usuario = model(
    'Usuario',
    new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required:true
        },

        password: {
            type: String,
            required:true
        },
    },
    { timeseries:true }
    )
)

export default Usuario
