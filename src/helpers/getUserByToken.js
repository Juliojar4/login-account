import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const getUserByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ error: "Acesso negado!" });
  }
  // find user
  const decoded = jwt.verify(token, "segredo");

  const userId = decoded.id;

  const user = await User.findOne({ _id: userId });

  return user;
}

export default getUserByToken