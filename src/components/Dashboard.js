import React from "react";
import Conversations from "./Conversations";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div class="d-inline-block flex-fill">
      <div class="d-flex">
        <div className="d-flex" style={{ height: "100vh" }}>
          <Sidebar id={id} />
          {selectedConversation && <OpenConversation />}
        </div>
      </div>
    </div>
  );
}
