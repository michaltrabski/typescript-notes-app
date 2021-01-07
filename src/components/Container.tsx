import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
interface Props {
  children: React.ReactNode;
}

export default function SimpleContainer(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <>{props.children}</>
      </Container>
    </React.Fragment>
  );
}
