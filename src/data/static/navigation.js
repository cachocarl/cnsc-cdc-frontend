import {
  HomeOutlined,
  SnippetsOutlined,
  FileWordOutlined,
  FileTextOutlined,
  HeartOutlined,
  SettingOutlined
} from "@ant-design/icons/lib/icons";

const navigations = [
  {
    id: 1,
    uKey: "home", //unique readable key
    name: "Home",
    basePath: "/home",
    icon: <HomeOutlined />,
  },

  {
    id: 2,
    uKey: "user-transactions", //unique readable key
    name: "Users - Transactions",
    basePath: null, // If the primary menu has submenu, then the basePath must be null
    icon: <SnippetsOutlined />,

    //submenu
    sub: [
      {
        id: 3,
        uKey: "user-internal-documents", //unique readable key
        name: "Internal Documents",
        basePath: "/user-transactions/internal-documents",
      },
      {
        id: 4,
        uKey: "user-external-documents", //unique readable key
        name: "External Documents",
        basePath: "/user-transactions/external-documents",
      },
      {
        id: 5,
        uKey: "user-request-document-info", //unique readable key
        name: "Request Document Info",
        basePath: "/user-transactions/request-document-info",
      },
    ],
  },

  {
    id: 6,
    uKey: "review-transactions", //unique readable key
    name: "Rewiewing Authority - Transactions",
    basePath: null, // If the primary menu has submenu, then the basePath must be null
    icon: <SnippetsOutlined />,

    //submenu
    sub: [
      {
        id: 7,
        uKey: "review-internal-documents", //unique readable key
        name: "Internal Documents",
        basePath: "/review-transactions/internal-documents",
      },
      {
        id: 8,
        uKey: "review-external-documents", //unique readable key
        name: "External Documents",
        basePath: "/review-transactions/external-documents",
      },
      {
        id: 9,
        uKey: "review-request-document-info", //unique readable key
        name: "Request Document Info",
        basePath: "/review-transactions/request-document-info",
        icon: <FileWordOutlined />,
      },
    ],
  },

  {
    id: 10,
    uKey: "approve-transactions", //unique readable key
    name: "Approving Authority - Transactions",
    basePath: null, // If the primary menu has submenu, then the basePath must be null
    icon: <SnippetsOutlined />,

    //submenu
    sub: [
      {
        id: 11,
        uKey: "approve-internal-documents", //unique readable key
        name: "Internal Documents",
        basePath: "/approve-transactions/internal-documents",
      },
      {
        id: 12,
        uKey: "approve-external-documents", //unique readable key
        name: "External Documents",
        basePath: "/approve-transactions/external-documents",
      },
      {
        id: 13,
        uKey: "approve-request-document-info", //unique readable key
        name: "Request Document Info",
        basePath: "/approve-transactions/request-document-info",
        icon: <FileWordOutlined />,
      },
    ],
  },
  {
    id: 17,
    uKey: "cdc", //unique readable key
    name: "CDC - Transactions",
    basePath: null,
    icon: <FileTextOutlined />,

    sub: [
      {
        id: 18,
        uKey: "cdc-internal-documents", //unique readable key
        name: "Internal Documents",
        basePath: "/cdc/internal-documents",
      },
      {
        id: 19,
        uKey: "cdc-external-documents", //unique readable key
        name: "External Documents",
        basePath: "/cdc/external-documents",
      },
      {
        id: 20,
        uKey: "cdc-controlled-documents", //unique readable key
        name: "Controlled Documents",
        basePath: "/cdc/controlled-documents",
      },
    ],
  },
  {
    id: 14,
    uKey: "Documents", //unique readable key
    name: "Records",
    basePath: null,
    icon: <FileTextOutlined />,

    sub: [
      {
        id: 15,
        uKey: "approve-documents", //unique readable key
        name: "Approved Documents",
        basePath: "/documents/approve-documents",
      },
      {
        id: 16,
        uKey: "archive", //unique readable key
        name: "Archive",
        basePath: "/documents/archive",
      },
    ],
  },
  {
    id: 21,
    uKey: "about", //unique readable key
    name: "About CNSC",
    basePath: "/about",
    icon: <HeartOutlined />,
  },
  {
    id: 21,
    uKey: "systerm-administration", //unique readable key
    name: "User Management",
    basePath: "/administration",
    icon: <SettingOutlined/>,
  },
  //Add more navigations here
];

export default navigations;
