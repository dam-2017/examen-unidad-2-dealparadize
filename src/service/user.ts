import { Injectable } from "@angular/core";


@Injectable()
export class UserService {

    private _user;

    get user():string {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

}