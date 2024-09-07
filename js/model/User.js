class User{
    //getter and setter
    set username(username)
    {
        this._username=username;
    }
    set password(password)
    {
        this._password=password;
    }
    set cpassword(cpassword)
    {
        this._cpassword=cpassword;
    }
    set email(email)
    {
        this._email=email;
    }
    set phoneno(phoneno)
    {
        this._phoneno=phoneno;
    }
    set city(city)
    {
        this._city=city;
    }
    set genre(genre) {

        this._genre = genre;
    }

    get username()
    {
        return this._username;
    }
    get password()
    {
        return this._password;

    }
    get cpassword()
    {
        return this._cpassword;
    }
    get email()
    {
        return this._email;
    }
    get phoneno()
    {
        return this._phoneno;
    }
    get city()
    {
        return this._city;
    }
    get genre(){
        return this._genre;
    }
}

export default User;