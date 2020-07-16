import { Form, Checkbox, Button } from "antd";

import { SmileFilled } from "@ant-design/icons";

import Link from "next/link";

const FormItem = Form.Item;

const content = {
  marginTop: "100px",
};

const TEAM = {
  alejandro: {
    fullName: "Alex",
    name: "alejandro",
    defaultChecked: true,
  },
  arnau: {
    fullName: "Arnau",
    name: "arnau",
    defaultChecked: true,
  },
  gaetano: {
    fullName: "Gaetano",
    name: "gaetano",
    defaultChecked: true,
  },
  gianni: {
    fullName: "Gianni",
    name: "gianni",
    defaultChecked: true,
  },
  marta: {
    fullName: "Marta",
    name: "marta",
    defaultChecked: true,
  },
  mohamed: {
    fullName: "Mohamed",
    name: "mohamed",
    defaultChecked: true,
  },
  ignacio: {
    fullName: "Ignacio",
    name: "ignacio",
    defaultChecked: true,
  },
};

const generateCheckbox = (member) => {
  return (
    <FormItem
      key={member.name}
      label={member.fullName}
      name={member.name}
      valuePropName="checked"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <Checkbox checked={member.defaultChecked} />
    </FormItem>
  );
};

export default function Home() {
  const handleOnSubmit = (teamMembers) => {
    const candidates = Object.keys(teamMembers).filter((member) =>
      Boolean(teamMembers[member])
    );
    const candidatesLength = candidates.length;
    const winnerIndex = Math.floor(Math.random() * candidatesLength);
    alert(candidates[winnerIndex]);
  };
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <p className="mb-0 mt-3 text-disabled">
          Welcome to Breaking Ads world!
        </p>
      </div>
      <div>
        <Form
          layout="horizontal"
          labelCol={{ span: 8 }}
          onFinish={handleOnSubmit}
        >
          {Object.values(TEAM).map(generateCheckbox)}
          <FormItem
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
          >
            <Button size="large" type="primary" htmlType="submit">
              Get Random
            </Button>
            <Button size="large" style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
