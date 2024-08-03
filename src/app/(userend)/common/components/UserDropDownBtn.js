"use client";
import { Dropdown } from "flowbite-react";
import Image from "./Image";
import { removeToken } from "../../../../services/token";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import NavLink from "./NavLink";

export default function UserDropDownBtn({ auth }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const userImage = (
    <span className="flex text-sm bg-gray-800 border-2 border-green-500 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
      <Image
        src={
          "https://images.unsplash.com/flagged/photo-1556470234-36a5389f905a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="user photo"
        className="w-8 h-8 rounded-full"
      />
    </span>
  );
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    auth !== null && (
      <Fragment>
        <Dropdown label={userImage} inline arrowIcon={false}>
          <Dropdown.Header>
            <b className="block text-sm text-green-500">{auth.user.userName}</b>
            <span className="block truncate text-sm font-medium">
              {auth?.user.userEmail}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              const token = removeToken("auth_user_token");
              if (token !== null) {
                router.push("/sign-in");
              }
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </Fragment>
    )
  );
}
