import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
export class CreateUserDto {
    [x: string]: any;

    @IsNotEmpty({message: 'Email is required'})
    @IsEmail({}, {message: 'Invalid email'})
    email:string;

    @IsNotEmpty({message: 'Name is required'})
    name:string;

    @IsNotEmpty({message: 'Password is required'})
    @MinLength(6, {message: 'Password must be at least 6 characters'})
    password:string

}
