import React from "react";
import { tableDeclaration } from "../utils/graphCmsDeclarations";
import { Wrapper } from "@graphcms/uix-react-sdk";
import LocalizationsList, {
  LocalizationsListProps,
} from "../components/LocalizationsList";

const LocalizedTextPage: React.FC<LocalizationsListProps> = (props) => {
  return (
    <Wrapper declaration={tableDeclaration}>
      <LocalizationsList {...props} />
    </Wrapper>
  );
};

export default React.memo(LocalizedTextPage);
