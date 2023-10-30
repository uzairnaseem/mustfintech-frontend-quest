export const MEMBERS_LIST = [
  {
    id: 1,
    existingType: "소득적격",
    applicationType: "개인전문",
    applicationDateAndTime: "2023-01-10 09:00:00",
    approval: "승인대기",
    rejectionReason: "",
    approvalDateAndTime: "2023-01-10 09:00:00",
    manager: "김관리자",
  },
  {
    id: 2,
    existingType: "소득적격",
    applicationType: "개인전문",
    applicationDateAndTime: "2023-01-10 09:00:00",
    approval: "승인거부",
    rejectionReason:
      "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDateAndTime: "2023-01-10 09:00:00",
    manager: "김관리자",
  },
  {
    id: 3,
    existingType: "소득적격",
    applicationType: "개인전문",
    applicationDateAndTime: "2023-01-10 09:00:00",
    approval: "승인대기",
    rejectionReason: "",
    approvalDateAndTime: "2023-01-10 09:00:00",
    manager: "김관리자",
  },
  {
    id: 4,
    existingType: "소득적격",
    applicationType: "개인전문",
    applicationDateAndTime: "2023-01-10 09:00:00",
    approval: "승인거부",
    rejectionReason:
      "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDateAndTime: "2023-01-10 09:00:00",
    manager: "김관리자",
  },
  {
    id: 5,
    existingType: "소득적격",
    applicationType: "개인전문",
    applicationDateAndTime: "2023-01-10 09:00:00",
    approval: "승인완료",
    rejectionReason: "",
    approvalDateAndTime: "2023-01-10 09:00:00",
    manager: "김관리자",
  },
];

export const STATUS_DROPDOWN_OPTIONS = [
  { value: "승인여부 전체", label: "승인여부 전체" },
  { value: "승인대기", label: "승인대기" },
  { value: "승인완료", label: "승인완료" },
  { value: "승인거부", label: "승인거부" },
  { value: "승인 요청됨", label: "승인 요청됨" },
];

export const DATE_AND_TIME_DROPDOWN_OPTIONS = [
  { value: 1, label: "신청일시순" },
  { value: 2, label: "승인일시순" },
];

export const PAGE_COUNT_DROPDOWN_OPTIONS = [
  { value: 50, label: "50개씩 보기" },
  { value: 100, label: "100개씩 보기" },
];

export const APPROVAL_STATUS_DROPDOWN_OPTIONS = [
  { value: 1, label: "승인상태 변경" },
  { value: 2, label: "승인완료" },
  { value: 3, label: "승인거부" },
];

export const INVESTMENT_TYPE_DROPDOWN_OPTIONS = [
  { value: 1, label: "일반개인" },
  { value: 2, label: "소득적격" },
  { value: 3, label: "개인전문" },
  { value: 4, label: "법인" },
  { value: 5, label: "여신금융" },
  { value: 6, label: "P2P온투" },
];
