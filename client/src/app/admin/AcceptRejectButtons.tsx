"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdCheck } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { User } from "../types/User";
import { toast } from "sonner";
import { acceptModRequest, rejectModRequest } from "../register/registerClient";
import useUserStore from "../zustand/store";

const AcceptRejectButtons = ({
  user,
  users,
}: {
  user: User;
  users: User[];
}) => {
  const { token } = useUserStore();
  const handleAccept = () => {
    acceptModRequest(token, user.username)
      .then((data) => {
        toast.success("Accepted");
        const newUsers = users.filter((u) => u.username !== user.username);
        users = newUsers;
      })
      .catch((e: any) => {
        toast.error(e.message);
      });
  };

  const handleReject = () => {
    rejectModRequest(token, user.username)
      .then((data) => {
        toast.success("Rejected");
        const newUsers = users.filter((u) => u.username !== user.username);
        users = newUsers;
      })
      .catch((e: any) => {
        toast.error(e.message);
      });
  };
  return (
    <>
      <Button onClick={() => handleAccept()} size={"icon"}>
        <MdCheck />
      </Button>
      <Button
        onClick={() => handleReject()}
        size={"icon"}
        variant={"destructive"}
      >
        <RxCross1 />
      </Button>
    </>
  );
};

export default AcceptRejectButtons;
