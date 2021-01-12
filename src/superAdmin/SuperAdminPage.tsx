import { Box } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComplexCard from "../components/Card/ComplexCard";
import PageWrapper from "../components/PageWrapper";
import { db } from "../firebase/firebase";
import { GetAllUsersRealtime } from "../reduxStore/actions/authActions";
import { State } from "../reduxStore/store";
import { UserType } from "../reduxStore/types/authActionsTypes";
import { firebaseSettings, settings, userTemplate } from "../settings/settings";

const SuperAdminPage = () => {
  const { allUsers } = useSelector((state: State) => state.authReducer);
  // const dispatch = useDispatch();
  // const startSubscription = useRef(true);
  // console.log(startSubscription);
  // useEffect(() => {
  //   if (startSubscription.current) {
  //     console.log("dispatch => GetAllUsersRealtime");
  //     startSubscription.current = false;
  //     dispatch(GetAllUsersRealtime());
  //   }
  // }, []);

  return (
    <PageWrapper title={settings.superAdminPage.title}>
      <Box>
        {allUsers.map((user, index) => (
          <Box key={user.uid} mb={2}>
            {index}) <ComplexCard singleUser={user} />
          </Box>
        ))}
      </Box>
    </PageWrapper>
  );
};

export default SuperAdminPage;
