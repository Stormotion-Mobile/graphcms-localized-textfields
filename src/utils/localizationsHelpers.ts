import {MIN_TEXT_LENGTH, REQUIRED_LOCALE_CODE} from './constants';

export const areLocalizedFieldsValid = (
  obj: {[field: string]: string},
  requiredField: string = REQUIRED_LOCALE_CODE,
) => obj[requiredField]?.length >= MIN_TEXT_LENGTH;
