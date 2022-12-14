import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @MinLength(4)
  @MaxLength(20)
  @IsString()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'passwoord is Weak, shoud contain at least 1 upper case letter, 1 lower case letter, 1 number or special character',
  })
  password: string;
}
