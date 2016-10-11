/**
 * Created by Michael Yoshimura on 10/10/2016.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});