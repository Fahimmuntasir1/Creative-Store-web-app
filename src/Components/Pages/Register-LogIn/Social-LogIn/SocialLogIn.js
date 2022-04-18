import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase.init";
import "./SocialLogIn.css";

const SocialLogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();

  let loginCancelError;
  if (error || githubError) {
    loginCancelError = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {githubError?.message}
        </p>
      </div>
    );
  }
  if (user || githubUser) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex ">
        <div className="div-style" />
        <div>or</div>
        <div className="div-style" />
      </div>
      <div className="social-buttons">
        <div>
          <button onClick={() => signInWithGoogle()} className="social-btn">
            {" "}
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4="
            />{" "}
            Sign in With Google
          </button>
        </div>
        <div>
          <button className="social-btn">
            {" "}
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9IkxkNnNxcnRjeE15Y2tFbDZ4ZURkTWFfdUxXVjVBOXZYSVB1X2dyMSIgeDE9IjkuOTkzIiB4Mj0iNDAuNjE1IiB5MT0iOS45OTMiIHkyPSI0MC42MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyYWE0ZjQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDdhZDkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjTGQ2c3FydGN4TXlja0VsNnhlRGRNYV91TFdWNUE5dlhJUHVfZ3IxKSIgZD0iTTI0LDRDMTIuOTU0LDQsNCwxMi45NTQsNCwyNHM4Ljk1NCwyMCwyMCwyMHMyMC04Ljk1NCwyMC0yMFMzNS4wNDYsNCwyNCw0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNi43MDcsMjkuMzAxaDUuMTc2bDAuODEzLTUuMjU4aC01Ljk4OXYtMi44NzRjMC0yLjE4NCwwLjcxNC00LjEyMSwyLjc1Ny00LjEyMWgzLjI4M1YxMi40NiBjLTAuNTc3LTAuMDc4LTEuNzk3LTAuMjQ4LTQuMTAyLTAuMjQ4Yy00LjgxNCwwLTcuNjM2LDIuNTQyLTcuNjM2LDguMzM0djMuNDk4SDE2LjA2djUuMjU4aDQuOTQ4djE0LjQ1MiBDMjEuOTg4LDQzLjksMjIuOTgxLDQ0LDI0LDQ0YzAuOTIxLDAsMS44Mi0wLjA4NCwyLjcwNy0wLjIwNFYyOS4zMDF6Ij48L3BhdGg+PC9zdmc+"
            />{" "}
            Sign in With Facebook
          </button>
        </div>
        <div>
          <button onClick={()=>signInWithGithub()} className="social-btn">
            {" "}
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw1LjYyMywzLjg3MiwxMC4zMjgsOS4wOTIsMTEuNjNDMTIuMDM2LDI2LjQ2OCwxMiwyNi4yOCwxMiwyNi4wNDd2LTIuMDUxIGMtMC40ODcsMC0xLjMwMywwLTEuNTA4LDBjLTAuODIxLDAtMS41NTEtMC4zNTMtMS45MDUtMS4wMDljLTAuMzkzLTAuNzI5LTAuNDYxLTEuODQ0LTEuNDM1LTIuNTI2IGMtMC4yODktMC4yMjctMC4wNjktMC40ODYsMC4yNjQtMC40NTFjMC42MTUsMC4xNzQsMS4xMjUsMC41OTYsMS42MDUsMS4yMjJjMC40NzgsMC42MjcsMC43MDMsMC43NjksMS41OTYsMC43NjkgYzAuNDMzLDAsMS4wODEtMC4wMjUsMS42OTEtMC4xMjFjMC4zMjgtMC44MzMsMC44OTUtMS42LDEuNTg4LTEuOTYyYy0zLjk5Ni0wLjQxMS01LjkwMy0yLjM5OS01LjkwMy01LjA5OCBjMC0xLjE2MiwwLjQ5NS0yLjI4NiwxLjMzNi0zLjIzM0M5LjA1MywxMC42NDcsOC43MDYsOC43Myw5LjQzNSw4YzEuNzk4LDAsMi44ODUsMS4xNjYsMy4xNDYsMS40ODFDMTMuNDc3LDkuMTc0LDE0LjQ2MSw5LDE1LjQ5NSw5IGMxLjAzNiwwLDIuMDI0LDAuMTc0LDIuOTIyLDAuNDgzQzE4LjY3NSw5LjE3LDE5Ljc2Myw4LDIxLjU2NSw4YzAuNzMyLDAuNzMxLDAuMzgxLDIuNjU2LDAuMTAyLDMuNTk0IGMwLjgzNiwwLjk0NSwxLjMyOCwyLjA2NiwxLjMyOCwzLjIyNmMwLDIuNjk3LTEuOTA0LDQuNjg0LTUuODk0LDUuMDk3QzE4LjE5OSwyMC40OSwxOSwyMi4xLDE5LDIzLjMxM3YyLjczNCBjMCwwLjEwNC0wLjAyMywwLjE3OS0wLjAzNSwwLjI2OEMyMy42NDEsMjQuNjc2LDI3LDIwLjIzNiwyNywxNUMyNyw4LjM3MywyMS42MjcsMywxNSwzeiI+PC9wYXRoPjwvc3ZnPg=="
            />{" "}
            Sign in With GitHub
          </button>
        </div>
      </div>
      {loginCancelError}
    </div>
  );
};

export default SocialLogIn;
