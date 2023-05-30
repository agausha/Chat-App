import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { User } from "@prisma/client";

import { FullConversationType } from "../types";

const useOtherUser = (
  conversation:
    | FullConversationType
    | {
        users: User[];
      }
) => {
  const session = useSession();

  const otheUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    const otheUser = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    );

    return otheUser[0];
  }, [conversation.users, session?.data?.user?.email]);
  return otheUser;
};

export default useOtherUser;
