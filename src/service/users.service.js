import NotFound from 'http-errors';
import User from '../entity/users.entity.js';
import Unauthorized from 'http-errors';
import  bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT = process.env.JWT_KEY;
class UserService {
   createUser(payload) {
        const user = new User(payload);
        user.save();
        return this.login(payload.email, payload.password)
    }

   async getUser(id) {
     const user = await User.findById(id, {password: false}).exec();
     if(!user){
        throw new NotFound(`User with is ${id} not found.`)

     }
     return user;
   }

   async getUsers() {
      return User.find({}, {password: false }).exec();
   }

   async updateUser(id, payload) {
      return User.findByIdAndUpdate(id, payload, {new: true});
   }

   async validate(email, password) {
      const user = await User.findOne({email});
      if(!user || !bcrypt.compareSync(password, user.password)){
            throw new Unauthorized(' Invalid email or password')
      };

      return user;
   }

   async login(email, password) {
      const user = await this.validate(email, password);
      return jwt.sign({ userId: user._id, email: email} , JWT) //email is not necessary I just wrote it for my convenience
   }

   validateToken(token) {
      const obj = jwt.verify(token,  JWT , {
         ignoreExpiration: false,
      });
   
      return { userId: obj.userId}
   }
}

const users = new UserService();
export default users;