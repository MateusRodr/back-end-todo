import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto{
    @IsNotEmpty({message: 'name is required'})
    name:string;
}
