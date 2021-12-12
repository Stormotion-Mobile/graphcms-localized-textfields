import React, { useCallback, useMemo } from "react";
import languages from "../utils/localeToLanguage";

type ChangeTextEvent = { target: { value: string } };

export type OnChangeTextCallback = (
  event: ChangeTextEvent,
  localeCode: string
) => void;

type LocalizationItemProps = {
  localeCode: string;
  localizedText: string;
  onChangeText: OnChangeTextCallback;
  isMultiline?: boolean;
};

const LINES_NUMBER = 4;

const LocalizationItem: React.FC<LocalizationItemProps> = ({
  localeCode,
  localizedText,
  onChangeText,
  isMultiline = false,
}) => {
  const onChange = useCallback<(event: ChangeTextEvent) => void>(
    (event) => onChangeText(event, localeCode),
    [localeCode, onChangeText]
  );

  const inputProps = useMemo(
    () => ({
      className: "localization-item-text",
      value: localizedText,
      onChange,
    }),
    [localizedText, onChange]
  );

  const Input = useMemo(
    () =>
      isMultiline ? (
        <textarea rows={LINES_NUMBER} {...inputProps} />
      ) : (
        <input {...inputProps} />
      ),
    [inputProps, isMultiline]
  );

  return (
    <div className="localization-item-container">
      <p className="localization-item-caption">
        {languages[localeCode] ?? localeCode}
      </p>

      {Input}
    </div>
  );
};

export default React.memo(LocalizationItem);
