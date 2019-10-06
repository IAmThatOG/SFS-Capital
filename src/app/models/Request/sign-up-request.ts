export class SignUpRequest {
  private _firstName: string;
  private _lastName: string;
  private _phoneNumber: string;
  private _email: string;
  private _password: string;
  private _comparePassword: string;

  constructor() { }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(v: string) {
    this._firstName = v;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(v: string) {
    this._lastName = v;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public set phoneNumber(v: string) {
    this._phoneNumber = v;
  }

  public get email(): string {
    return this._email;
  }

  public set email(v: string) {
    this._email = v;
  }

  public get password(): string {
    return this._password;
  }

  public set password(v: string) {
    this._password = v;
  }

  public get comparePassword(): string {
    return this._comparePassword;
  }

  public set comparePassword(v: string) {
    this._comparePassword = v;
  }

}
