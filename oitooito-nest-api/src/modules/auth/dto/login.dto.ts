import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsEmail()
    public username: string;

    @IsNotEmpty()
    public password: string;
}