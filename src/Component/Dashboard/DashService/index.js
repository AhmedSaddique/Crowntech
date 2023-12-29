import Container from "@/Component/Container";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { Drawer } from "antd";
import Button from "@/Component/Button";
import AddCategory from "../AddCategory";
import AddService from "../AddService";
import ServiceTable from "../ServiceTable";
import ServiceContext from "@/Component/ServiceContext";

const DashService = () => {
  const [visibleDrawer1, setVisibleDrawer1] = useState(false);
  const [visibleDrawer2, setVisibleDrawer2] = useState(false);

  const showDrawer1 = () => {
    setVisibleDrawer1(true);
  };

  const showDrawer2 = () => {
    setVisibleDrawer2(true);
  };

  const onClose1 = () => {
    setVisibleDrawer1(false);
  };

  const onClose2 = () => {
    setVisibleDrawer2(false);
  };
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    { key: "2", name: "Joe Black", age: 42, address: "London No. 1 Lake Park" },
  ];
  return (
    <Container className={""}>
      <div className="mt-10 justify-end flex flex-wrap md:flex-nowrap  gap-3">
        <Button
          className="border-none rounded-md  justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md mr-2 ml-2"
          onClick={showDrawer1}
          text={"Add Category"}
        ></Button>
        <Button
          className="border-none rounded-md  justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md mr-2 ml-2"
          onClick={showDrawer2}
          text={"Add Service"}
        ></Button>
      </div>

      <Drawer
        title="Add Category"
        placement="right"
        closable={false}
        onClose={onClose1}
        open={visibleDrawer1}
        width={500}
        maskStyle={{ backdropFilter: visibleDrawer1 ? "blur(10px)" : "none" }}
      >
        <AddCategory />
      </Drawer>

      <Drawer
        title="Add Service"
        placement="right"
        closable={false}
        onClose={onClose2}
        open={visibleDrawer2}
        width={500}
        maskStyle={{ backdropFilter: visibleDrawer2 ? "blur(10px)" : "none" }}
      >
        <ServiceContext>
        <AddService />
        </ServiceContext>
      </Drawer>

      <ServiceTable data={data} />
    </Container>
  );
};

export default DashService;
