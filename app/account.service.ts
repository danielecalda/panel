/**
 * Created by manuel on 11/15/16.
 */
import { Account } from './account';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
    public current = new Account();
}