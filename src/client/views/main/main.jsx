import React from "react";
import { Link } from "react-router-dom";
import { Page, Button } from "@oliasoft-open-source/react-ui-library";
import { Sites } from "client/components/sites/sites";
import { OilRigs } from "client/components/oil-rigs/oil-rigs";

export const Main = ({}) => {
  return (
    <Page left={0}>
      <Sites />
      <Link to="/rigs">
        <Button label="Rigs" width={200} />
      </Link>
    </Page>
  );
};
