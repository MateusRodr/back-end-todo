import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { messageHelp } from "src/helps/messages.help";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor (private readonly authService:AuthService){
        super({
            usernameField:'email',
            passwordField:'password'
        
        })
    }

    async validate(email:string, password:string) {

        console.log('Validating user:', email);
        const user = await this.authService.validateUser(email,password)

        if(!user){
            throw new UnauthorizedException(messageHelp.PASSWORD_OR_EMAil_invalid)
        }
        
        return user;
    }
}