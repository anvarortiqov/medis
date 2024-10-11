"use client";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const onClick = () => console.log("ok");
  return <Button onClick={onClick}>Click me</Button>;
};

export default Dashboard;
