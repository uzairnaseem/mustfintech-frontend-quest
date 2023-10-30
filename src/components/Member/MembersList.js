import React, { useEffect, useState } from "react";

// Custom components
import MuiSelect from "../../@core/components/MuiSelect";
import MuiButton from "../../@core/components/MuiButton";
import MembersTable from "./MembersTable";
import ConfirmModal from "../Common/ConfirmationModal";
import ChangeInvestmentModal from "./ChangeInvestmentModal";
import ApprovalRejectionReasonModal from "./ApprovalRejectionReasonModal";

// Data
import {
  MEMBERS_LIST,
  STATUS_DROPDOWN_OPTIONS,
  DATE_AND_TIME_DROPDOWN_OPTIONS,
  PAGE_COUNT_DROPDOWN_OPTIONS,
  APPROVAL_STATUS_DROPDOWN_OPTIONS,
} from "../../data/members";
import ViewRejectionReasonModal from "./ViewRejectionReasonModal";

const MembersList = () => {
  const [membersList, setMembersList] = useState(MEMBERS_LIST);
  const [status, setStatus] = useState(STATUS_DROPDOWN_OPTIONS[0].value);
  const [selectedDateAndTime, setSelectedDateAndTime] = useState(
    DATE_AND_TIME_DROPDOWN_OPTIONS[0].value
  );
  const [selectedPageCount, setSelectedPageCount] = useState(
    PAGE_COUNT_DROPDOWN_OPTIONS[0].value
  );
  const [selectedApprovalStatus, setSelectedApprovalStatus] = useState(
    APPROVAL_STATUS_DROPDOWN_OPTIONS[0].value
  );
  const [confirmationDialog, setConfirmationDialog] = useState({ show: false });
  const [selectedRows, setSelectedRows] = useState([]);
  const [showChangeInvestmentModal, setShowInvestmentDialog] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [showViewRejectionReasonModal, setShowViewRejectionReasonModal] =
    useState(false);

  const handleCloseConfirmationDialog = () =>
    setConfirmationDialog({ show: false });

  const onRowSelectionChange = (value) => setSelectedRows(value);

  const handleApprovalStatusChange = (e) => {
    if (!selectedRows.length) {
      setConfirmationDialog({
        show: true,
        icon: "info",
        title: "선택된 신청건이 없습니다.",
        buttonConfirmTitle: "확인",
      });
      return;
    }

    setConfirmationDialog({
      show: true,
      icon: "info",
      title: `선택된 ${selectedRows.length}건의 승인상태를 변경하시겠습니까?`,
      buttonConfirmTitle: "확인",
      buttonCancelTitle: "취소",
      onConfirm: () => {
        handleCloseConfirmationDialog();
        setSelectedApprovalStatus(e.value);

        if (e.value === APPROVAL_STATUS_DROPDOWN_OPTIONS[2].value) {
          setShowRejectionModal(true);
        }
      },
    });
  };

  const handleSaveClick = () => {
    setConfirmationDialog({
      show: true,
      icon: "success",
      title: "저장되었습니다.",
      buttonConfirmTitle: "확인",
    });
  };

  const handleRegistrationClick = () => {
    setShowInvestmentDialog(true);
  };

  const handleSaveInvestment = () => {
    setShowInvestmentDialog(false);
    setConfirmationDialog({
      show: true,
      icon: "success",
      title: "저장되었습니다.",
      buttonConfirmTitle: "확인",
    });
  };

  const handleSaveRejectionReason = () => {
    setShowRejectionModal(false);
    setConfirmationDialog({
      show: true,
      icon: "success",
      title: "저장되었습니다.",
      buttonConfirmTitle: "확인",
    });
  };

  useEffect(() => {
    setMembersList(
      MEMBERS_LIST.filter(
        (member) =>
          member.approval === status ||
          status === STATUS_DROPDOWN_OPTIONS[0].value
      )
    );
  }, [status]);

  return (
    <div className="members-list">
      <div className="list-header">
        <div className="first-section">
          <span className="d-flex align-center">
            <h3> 신청 목록 </h3>
            <span className="sub-line">
              (총 100명 | 승인대기{" "}
              <span className="approval-count">{selectedRows.length}</span> 건)
            </span>
          </span>
          <span className="d-flex align-center">
            <MuiSelect
              value={status}
              options={STATUS_DROPDOWN_OPTIONS}
              handleChange={(e) => setStatus(e.value)}
            />
            <MuiSelect
              value={selectedDateAndTime}
              options={DATE_AND_TIME_DROPDOWN_OPTIONS}
              className="ml-2"
              handleChange={(e) => setSelectedDateAndTime(e.value)}
            />
            <MuiSelect
              value={selectedPageCount}
              options={PAGE_COUNT_DROPDOWN_OPTIONS}
              className="ml-2"
              handleChange={(e) => setSelectedPageCount(e.value)}
            />
          </span>
        </div>

        <hr />

        <div className="second-section">
          <MuiButton
            title="등록"
            style={{ paddingLeft: "35px", paddingRight: "35px" }}
            onClick={handleRegistrationClick}
          />
          <span className="d-flex align-center">
            <span className="items-selected-count"> 선택한 0건 </span>
            <MuiSelect
              value={selectedApprovalStatus}
              options={APPROVAL_STATUS_DROPDOWN_OPTIONS}
              className="ml-4"
              handleChange={handleApprovalStatusChange}
            />
            <MuiButton
              title="저장"
              className="ml-2"
              style={{ paddingLeft: "35px", paddingRight: "35px" }}
              onClick={handleSaveClick}
            />
          </span>
        </div>
      </div>

      <MembersTable
        data={membersList}
        showViewModal={(e) => {
          e.stopPropagation();
          setShowViewRejectionReasonModal(true);
        }}
        onRowSelectionChange={onRowSelectionChange}
      />

      {confirmationDialog.show && (
        <ConfirmModal
          show={confirmationDialog.show}
          icon={confirmationDialog.icon}
          title={confirmationDialog.title}
          buttonConfirmTitle={confirmationDialog.buttonConfirmTitle}
          buttonCancelTitle={confirmationDialog.buttonCancelTitle}
          handleConfirm={
            confirmationDialog.onConfirm || handleCloseConfirmationDialog
          }
          handleClose={handleCloseConfirmationDialog}
        />
      )}

      {showRejectionModal && (
        <ApprovalRejectionReasonModal
          handleSave={handleSaveRejectionReason}
          handleClose={() => setShowRejectionModal(false)}
        />
      )}

      {showChangeInvestmentModal && (
        <ChangeInvestmentModal
          handleSave={handleSaveInvestment}
          handleClose={() => setShowInvestmentDialog(false)}
        />
      )}

      {showViewRejectionReasonModal && (
        <ViewRejectionReasonModal
          handleClose={() => setShowViewRejectionReasonModal(false)}
        />
      )}
    </div>
  );
};

export default MembersList;
