import {getManager} from "typeorm";
import {User} from "./users/models/users.model";

const entityManager = getManager(); // you can also get it via getConnection().manager
const user = await entityManager.findOne(User, 2);
user.name = "Umed";
user.email = "v.chumakovv@gmail.com";
await entityManager.save(user);