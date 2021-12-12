import React, { useCallback, useEffect, useState } from "react";
import {
  tableDeclaration,
  TableDeclarationType,
} from "../utils/graphCmsDeclarations";
import { useUiExtension, Wrapper } from "@graphcms/uix-react-sdk";
import * as R from "ramda";
import LocalizationItem, { OnChangeTextCallback } from "./LocalizationItem";
import { areLocalizedFieldsValid } from "../utils/localizationsHelpers";

export type LocalizationsListProps = {
  locales: string[];
  isMultiline?: boolean;
};

const LocalizationsList: React.FC<LocalizationsListProps> = ({
  locales,
  isMultiline,
}) => {
  const { onChange, value } = useUiExtension<TableDeclarationType>();

  const [currentValues, onChangeValues] = useState<{ [code: string]: string }>(
    value ?? {}
  );

  const areValuesValid = areLocalizedFieldsValid(currentValues);

  useEffect(() => {
    areValuesValid ? onChange(currentValues) : onChange(undefined);
    // Disable as the onChange callback gets constantly changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areValuesValid, currentValues]);

  const onChangeText = useCallback<OnChangeTextCallback>(
    ({ target: { value: newValue } }, languageCode) =>
      onChangeValues(R.assoc(languageCode, newValue, currentValues)),
    [currentValues, onChangeValues]
  );

  const renderLocalizationItem = useCallback<(code: string) => JSX.Element>(
    (code) => {
      return (
        <LocalizationItem
          isMultiline={isMultiline}
          key={code}
          onChangeText={onChangeText}
          localeCode={code}
          localizedText={currentValues[code] ?? ""}
        />
      );
    },
    [currentValues, isMultiline, onChangeText]
  );

  return (
    <div className="localization-list-container">
      {locales.map(renderLocalizationItem)}
    </div>
  );
};

export default React.memo(LocalizationsList);
