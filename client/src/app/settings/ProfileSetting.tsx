import { Separator } from "@/components/ui/separator";
import React, { useEffect } from "react";
import useUserStore from "../zustand/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdEdit } from "react-icons/md";

function ProfileSetting() {
  const { user, fetchUser } = useUserStore();
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="h-full px-16 py-2">
      <h1 className="text-xl md:text-2xl font-primary">Profile Settings</h1>
      <Separator />
      <div className="grid grid-cols-3 place-items-stretch w-full my-3">
        <div className="flex flex-col justify-center gap-2 items-center">
          <Avatar className="w-56 h-56 ring-2 ring-primary">
            <AvatarImage src={user?.image ?? ""} />
            <AvatarFallback className="text-4xl">
              {user?.name.toUpperCase()[0]}
            </AvatarFallback>
          </Avatar>
          <Button
            size={"default"}
          >
            Edit 
          </Button>
        </div>
        <div className="col-span-2 flex flex-col gap-4 h-full">
          <div>
            <Label className="my-2">Username</Label>
            <Input value={user?.username} disabled />
          </div>
          <div>
            <Label className="my-2">Name</Label>
            <Input value={user?.name} disabled />
          </div>
          <div>
            <Label className="my-2">Email</Label>
            <Input value={user?.email} disabled />
          </div>
          <div className="flex w-full gap-2">
            {user?.role === "USER" && (
              <Button className="w-full">Request for Mod</Button>
            )}
            <Button className="w-full" variant={"secondary"}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;