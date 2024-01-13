import React from "react";
import { PrivacyPolicyContainer, Divider } from "../Main.styled";

function Policy() {
  return (
    <PrivacyPolicyContainer>
      <div id="policies">
        <div className="policy-links">
          <a href="https://www.redditinc.com/policies/user-agreement">User Agreement</a>
          <a href="https://www.redditinc.com/policies/privacy-policy">Privacy Policy</a>
        </div>
        <div className="policy-links">
          <a href="https://www.redditinc.com/policies/content-policy">Content Policy</a>
          <a href="https://www.redditinc.com/policies/moderator-code-of-conduct">Moderator Code Of Conduct</a>
        </div>
      </div>
      <Divider><div></div></Divider>
      <div id="policy-end" >
        Reddit, Inc. © 2024. All rights reserved.
      </div>
    </PrivacyPolicyContainer>
  );
}

export default Policy;
