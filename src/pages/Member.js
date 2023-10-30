import React from "react";
import "../styles/member.scss";

// Custom components
import Navbar from "../components/Member/Navbar";
import MembersList from "../components/Member/MembersList";

const Member = () => {
  return (
    <div className="member-page-cont">
      <div className="heading">
        <h2> 회원상세 </h2>
        <span className="required-text"> 필수항목 </span>
      </div>
      <hr />
      <Navbar />

      <MembersList />
    </div>
  );
};

export default Member;
