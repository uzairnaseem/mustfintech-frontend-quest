import React, { useState } from "react";

const tabs = [
  { id: 1, name: "기본정보 관리" },
  { id: 2, name: "투자유형 관리" },
  { id: 3, name: "입출금내역 조회" },
  { id: 4, name: "영업내역 조회" },
  { id: 5, name: "투자내역 조회" },
  { id: 6, name: "채권내역 조회" },
  { id: 7, name: "SMS 관리" },
  { id: 8, name: "상담내역 관리" },
  { id: 9, name: "1:1문의내역 조회" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  return (
    <nav className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${tab.id === activeTab ? "active-tab" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
