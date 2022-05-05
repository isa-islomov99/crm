import {
  STRING,
  UPLOAD,
  SELECT,
  DATE,
  BUTTON,
} from "../../../components/Modal/InputTypes";
import { FieldNumberOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import TabInput from "../../../components/Modal/TabInput/TabInput";

const align = "center";

const CommetsTabTemplate = {
  text: "Izohlar",
  isOpenModal: false,
  name: "general_document",
  CreateObj: {
    rowId: uuidv4(),
    comment: "",
    file: "",
    worker: "",
    vaqti: "",
  },
  scroll: { y: 130 },

  form: [
    {
      grid: {
        columns: "repeat(1, 1fr)",
        rows: "repeat(1, 1fr)",
      },

      inputs: [
        {
          name: "general_info",
          type: STRING,
          placeholder: "Umumiy izoxlar",
          label: "Umumiy izoxlar",
          gridColumn: "1 / 1",
          gridRow: "1 / 2",
        },
      ],
    },
  ],
  columns: [
    {
      title: <FieldNumberOutlined />,
      dataIndex: "number",
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: "Izox",
      dataIndex: "general_info",
      render: (text, record) => (
        <TabInput
          record={record}
          tabName={"general_doc"}
          name={"comment"}
          type={STRING}
        />
      ),
      key: "izox",
      width: "40%",
      align: "center",
    },
    {
      title: "Fayl",
      dataIndex: "file",
      render: (text, record) => (
        <TabInput
          record={record}
          tabName={"general_doc"}
          name={"file"}
          type={UPLOAD}
          filePath={"/projects/image"}
        />
      ),
      key: "file",
      width: "15%",
      align: "center",
    },
    {
      title: "Xodim",
      dataIndex: "worker",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"general_doc"}
          name={"worker"}
          options={"workers"}
          type={SELECT}
        />
      ),
      key: "xodim",
      width: "25%",
      align: "center",
    },
    {
      title: "Vaqti",
      dataIndex: "vaqti",
      render: (text, record, index) => (
        <TabInput
          record={record}
          tabName={"general_doc"}
          name={"vaqti"}
          type={DATE}
        />
      ),
      key: "vaqti",
      width: "15%",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record, index) => (
        <TabInput record={record} tabName={"general_doc"} type={BUTTON} />
      ),
      key: "action",
      width: "10%",
      align: "center",
    },
  ],
};

export default CommetsTabTemplate;
