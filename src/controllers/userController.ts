import User from "../models/userModel";
import { IUser } from "../interfaces/userinterface";
import { generateJwtToken } from "../helpers/jwt/generateSessionToken";
import * as bcrypt from "bcrypt";
import * as authentication from "../middleware/authentication";

export default class UserController {
  constructor() {}
  /**
   * Register user
   * @param req
   * @param res
   */

  public async registerUser(req: any, res: any) {
    // Get user input
    const { name, email, password, phone, address } = req.body;
    const duplicateEmail = await authentication.checkDuplicateUserEmail(email);
    if (duplicateEmail) {
      res.status(400).send("Failed! Email is already in use!");
      return;
    }
    // Encrypt password
    const encryptedPassword: string = await bcrypt.hash(password, 10);

    // Validate user input
    if (!(name && email && password && phone && address)) {
      res.status(400).send("All field is required.");
    }

    const user: IUser = {
      name: name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      phone: phone,
      address: address,
    };

    try {
      // Register user
      const userData: any = await User.create(user);
      const token: string = await generateJwtToken(userData);
      res.status(201).send({
        message: "User registerd successfully.",
        token: token,
      });
    } catch (e) {
      console.log(e);
      res.status(400).send({
        message: "Error occured.",
      });
    }
  }

  /**
   * Login user
   * @param req
   * @param res
   */
  public async login(req: any, res: any) {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All fields is required.");
    }
    try {
      // Validate if user exist in our database
      const user: any = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token: string = await generateJwtToken(user);
        user.token = token;
        res.status(200).send({
          message: "Login successfully.",
          token: token,
        });
      }
    } catch (e) {
      res.status(400).send({
        message: "Error occured.",
      });
    }
  }

  /**
   * Get all users
   * @param req
   * @param res
   */
  public async getAllUser(req: any, res: any) {
    try {
      const users = await User.find();
      console.log('user')
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send({
        message: "Error occured.",
      });
    }
  }
}
