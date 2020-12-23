import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import Modal from "./Modal";

export default function SimpleContainer(props: any) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">{props.children}</Container>
      <Modal />
    </React.Fragment>
  );
}
