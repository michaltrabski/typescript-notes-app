import { Box, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ComplexCard from "../components/Card/ComplexCard";
import PageWrapper from "../components/PageWrapper";
import { db } from "../firebase/firebase";
import { State } from "../reduxStore/store";
import { UserType } from "../reduxStore/types/authActionsTypes";
import { firebaseSettings, settings, userTemplate } from "../settings/settings";
import moment from "moment";
import { useAuth } from "../firebase/hooks/useAuth";

const UserAccountPage = () => {
  const { singleUser } = useSelector((state: State) => state.authReducer);
  const { logoutUser } = useAuth([]);

  return (
    <PageWrapper title={settings.userAccountPage.title}>
      <>
        <Pre data={singleUser} />

        <p>{`added: ${moment(
          singleUser.registerdAt.seconds * 1000
        ).fromNow()}`}</p>

        <Button
          color="secondary"
          onClick={logoutUser}
          disabled={singleUser.uid ? false : true}
        >
          Logout{singleUser.uid ? "" : ` - you are logged out!`}
        </Button>
      </>
    </PageWrapper>
  );
};

export default UserAccountPage;

const Pre = (props: any) => {
  return (
    <Box>
      <pre style={{ fontSize: "1.4rem" }}>
        {JSON.stringify(props.data, null, 2)}
      </pre>
    </Box>
  );
};
