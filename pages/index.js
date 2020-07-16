import { useState } from "react";

import { Form, Checkbox, Button } from "antd";

import { SmileFilled } from "@ant-design/icons";

import Link from "next/link";

const FormItem = Form.Item;

const content = {
  marginTop: "100px",
};

const TEAM = [
  {
    label: "Alex",
    value: "alejandro",
    defaultChecked: true,
  },
  {
    label: "Arnau",
    value: "arnau",
    defaultChecked: true,
  },
  {
    label: "Gaetano",
    value: "gaetano",
    defaultChecked: true,
  },
  {
    label: "Gianni",
    value: "gianni",
    defaultChecked: true,
  },
  {
    label: "Marta",
    value: "marta",
    defaultChecked: true,
  },
  {
    label: "Mohamed",
    value: "mohamed",
    defaultChecked: true,
  },
  {
    label: "Ignacio",
    value: "ignacio",
    defaultChecked: true,
  },
];

export default function Home() {
  const [teamMembersChecked, setTeamMembersChecked] = useState(
    TEAM.map((member) => member.value)
  );
  function handleOnChange(checkedValues) {
    setTeamMembersChecked(checkedValues);
  }
  const handleOnSubmit = () => {
    const candidatesLength = teamMembersChecked.length;
    const winnerIndex = Math.floor(Math.random() * candidatesLength);
    alert(teamMembersChecked[winnerIndex]);
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
          <Checkbox.Group
            options={TEAM}
            defaultValue={teamMembersChecked}
            onChange={handleOnChange}
          ></Checkbox.Group>
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
