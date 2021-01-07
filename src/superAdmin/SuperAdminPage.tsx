import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ComplexCard from "../components/Card/ComplexCard";
import PageWrapper from "../components/PageWrapper";
import { db } from "../firebase/firebase";
import { UserType } from "../reduxStore/types/authActionsTypes";
import { firebaseSettings, settings, userTemplate } from "../settings/settings";

const SuperAdminPage = () => {
  const [allUsers, setAllUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const unsubscribe = db
      .collection(firebaseSettings.users)
      // .where("capital", "==", true)
      .onSnapshot((querySnapshot) => {
        const users: any = [];

        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          const userFromFirestore = doc.data();
          const user: UserType = { ...userTemplate, ...userFromFirestore };
          users.push(user);
        });
        setAllUsers(users);
      });

    return () => unsubscribe();
  }, []);

  return (
    <PageWrapper title={settings.superAdminPage.title}>
      <>
        <Box>
          {allUsers.map((user, index) => (
            <Box key={user.uid} mb={2}>
              {/* {index}) {user.uid} {JSON.stringify(user)} */}
              <ComplexCard />
            </Box>
          ))}
        </Box>
      </>
    </PageWrapper>
  );
};

export default SuperAdminPage;
