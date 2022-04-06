import mongoose from 'mongoose'
const connect = mongoose.connect

async function main() {
    await connect('mongodb://172.26.0.2:27017/jara?replicaSet=rs0&readPreference=primary')
    console.log('conhectou ao mongoose')
}

main().catch((err) => console.log(err))

export default mongoose