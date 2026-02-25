"use client";
import DxGrid from "../Components/common/DxGrid";
import { columns, data } from "./constants";

export default function UsersPage() {
  console.log("hello");
  return (
    <>
      <DxGrid data={data} columns={columns} users="Users" />
    </>
  );
}
