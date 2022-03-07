import {
  HomeOutlined,
  SnippetsOutlined,
  FileWordOutlined,
  FileTextOutlined,
  HeartOutlined,
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
    uKey: "transactions", //unique readable key
    name: "Transactions",
    basePath: null, // If the primary menu has submenu, then the basePath must be null
    icon: <SnippetsOutlined />,

    //submenu
    sub: [
      {
        id: 3,
        uKey: "internal-documents", //unique readable key
        name: "Internal Documents",
        basePath: "/transactions/internal-documents",
      },
      {
        id: 4,
        uKey: "external-documents", //unique readable key
        name: "External Documents",
        basePath: "/transactions/external-documents",
      },
      {
        id: 5,
        uKey: "request-document-info", //unique readable key
        name: "Request Document Info",
        basePath: "/transactions/request-document-info",
        icon: <FileWordOutlined />,
      },
    ],
  },

  {
    id: 6,
    uKey: "Documents", //unique readable key
    name: "Records",
    basePath: null,
    icon: <FileTextOutlined />,

    sub: [
      {
        id: 7,
        uKey: "approve-documents", //unique readable key
        name: "Approved Documents",
        basePath: "/documents/approve-documents",
      },
      {
        id: 8,
        uKey: "archive", //unique readable key
        name: "Archive",
        basePath: "/documents/archive",
      },
    ],
  },

  {
    id: 9,
    uKey: "cdc", //unique readable key
    name: "CDC - Transactions",
    basePath: null,
    icon: <FileTextOutlined />,

    sub: [
      {
        id: 10,
        uKey: "cdc-internal-documents", //unique readable key
        name: "Internal Documents",
        basePath: "/cdc/internal-documents",
      },
      {
        id: 11,
        uKey: "cdc-external-documents", //unique readable key
        name: "External Documents",
        basePath: "/cdc/external-documents",
      },
    ],
  },

  {
    id: 15,
    uKey: "about", //unique readable key
    name: "About",
    basePath: "/about",
    icon: <HeartOutlined />,
  },

  //Add more navigations here
];

export default navigations;
