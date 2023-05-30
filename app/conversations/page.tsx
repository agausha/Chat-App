"use client";

import clsx from "clsx";

import useConversation from "../hooks/useConvsersation";
import EmptySate from "../components/emptyState/EmptySate";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptySate />
    </div>
  );
};

export default Home;
