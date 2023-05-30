"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
  const slicedUsers = users.slice(0, 4);

  const positionMap = {
    0: "top-0 left-[4px]",
    1: "top-0 right-[3px]",
    2: "bottom-0",
    3: "bottom-0 right-[2px]",
  };

  return (
    <div className="relative h-11 w-11">
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`
            absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${
              positionMap[index as keyof typeof positionMap]
            }
            `}
        >
          <Image
            src={user?.image || "/images/avatar.jpg"}
            alt="Avatar"
            fill
            sizes="20"
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
