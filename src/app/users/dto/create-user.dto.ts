import { Matches, IsEmail, IsNotEmpty } from 'class-validator';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { RegExHelper } from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  firstName: string;

  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  lastName: string;

  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @Matches(RegExHelper.password, {
    message: MessagesHelper.PASSWORD_VALID,
  })
  password: string;
}
