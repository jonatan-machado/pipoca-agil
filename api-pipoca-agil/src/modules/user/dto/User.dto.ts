export class UserDto {
  id: string;
  full_name: string;
  email: string;
  password?: string;
  confirm_password?: string;
  birth_date: Date;
  created_at?: Date;
  updated_at?: Date;
}
