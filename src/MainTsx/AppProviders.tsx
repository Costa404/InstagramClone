// src/Main/AppProviders.tsx
import React from "react";

import { ErrorProvider } from "../useContext/errorContext/useError";
import { SignupProvider } from "../useContext/useSignupContext/useSignupCredentialsContext";
import { LoginProvider } from "../useContext/useLoginCredentialsContext/useLoginCredentialsContext";
import { FakeUserProvider } from "../useContext/fakeUsers/FakeUsersContext";
import { SelectedUserProvider } from "../useContext/SelectedUserContext";

import { CurrentUserProvider } from "../useContext/currentUserContext/currentUserContext";
import { UserIdProvider } from "../useContext/userContext/userIdContext";
import { FollowUserIdProvider } from "../useContext/FollowUserIdContext/FollowUserIdContext";
import { IsFollowingProvider } from "../useContext/IsFollowingContext/IsFollowingContext";
import { ThemeProvider } from "../useContext/ThemeContext/ThemeContext";
import { ImgUploadProvider } from "../useContext/ImgUploadContext/ImgUploadContext";
import { PostProvider } from "../useContext/PostContext/PostContext";

const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ThemeProvider>
    <ErrorProvider>
      <FakeUserProvider>
        <IsFollowingProvider>
          <FollowUserIdProvider>
            <CurrentUserProvider>
              <SelectedUserProvider>
                <ImgUploadProvider>
                  <PostProvider>
                    <LoginProvider>
                      <UserIdProvider>
                        <SignupProvider>{children}</SignupProvider>
                      </UserIdProvider>
                    </LoginProvider>
                  </PostProvider>
                </ImgUploadProvider>
              </SelectedUserProvider>
            </CurrentUserProvider>
          </FollowUserIdProvider>
        </IsFollowingProvider>
      </FakeUserProvider>
    </ErrorProvider>
  </ThemeProvider>
);

export default AppProviders;
