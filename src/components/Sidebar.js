import React, { useState } from "react";
import { Tab, Nav, TabContainer, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const CONVERSATION_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATION_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="">
      <img
        src="2chat.jpg"
        class="img-thumbnail"
        alt="Hollywood Sign on The Hill"
        width="100px"
      />
      <button
        type="button"
        class="btn btn-outline-primary"
        data-mdb-ripple-color="dark"
      >
        About Us
      </button>
      <div style={{ width: "250px" }} className="d-flex flex-column border">
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="overflow-auto flex-grow-1 border-right">
            <Tab.Pane eventKey={CONVERSATION_KEY}>
              <Conversations />
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
          <div className="p-2 border-top border-right small">
            Your Id: <span className="text-muted">{id}</span>
          </div>
          <Button onClick={() => setModalOpen(true)} className="rounded-3">
            New {conversationsOpen ? "Conversation" : "Contact"}
          </Button>
        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
          {conversationsOpen ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactModal closeModal={closeModal} />
          )}
        </Modal>
      </div>
    </div>
  );
}
