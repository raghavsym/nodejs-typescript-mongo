import  * as jwt   from 'jsonwebtoken';
import  { secrets }  from '../../config/auth.config';

export const generateJwtToken = async (userData: any) => {
    const expiresIn = secrets.EXPIRES_IN;
    const jwtKey    = secrets.JWT_KEY;
    return await jwt.sign({ userData }, jwtKey, { expiresIn: expiresIn })
};
