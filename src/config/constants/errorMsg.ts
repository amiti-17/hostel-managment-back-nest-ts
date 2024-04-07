import { regExpStr } from '../regexp';

export const errorMsg = {
  incorrectEmail: "Email didn't pass validation",
  passwordLength: 'Password must contain at least 8 characters',
  passwordRichTopSymbolsLimit: 'Password must be 100 characters or less',
  passwordLowerCase: 'Password should contain at least one lowercase character',
  passwordUpperCase: 'Password should contain at least one uppercase character',
  passwordDigit: 'Password should contain at least one digit',
  passwordSpecialSymbols:
    'Password should contain one of special symbols: ' +
    regExpStr.specialSymbol.split('\\').join(''),
  required: 'Required',
  updatedPasswordMatchedWithProvidedOld: 'this two password are the same',
  oldPasswordNotMatched: 'Old password not matched with yours current password',
};
