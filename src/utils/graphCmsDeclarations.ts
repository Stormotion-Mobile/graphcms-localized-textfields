import {
  FieldExtensionType,
  FieldExtensionFeature,
  FieldExtensionDeclaration,
} from '@graphcms/uix-react-sdk';

export const tableDeclaration: FieldExtensionDeclaration = {
  extensionType: 'field',
  fieldType: FieldExtensionType.JSON,
  name: 'Localized text',
  features: [
    FieldExtensionFeature.FieldRenderer,
    FieldExtensionFeature.TableRenderer,
  ],
};

export type TableDeclarationType = typeof tableDeclaration;
