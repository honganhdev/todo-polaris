import { Modal, TextField } from "@shopify/polaris";
import React, { useState, useCallback } from "react";

export default function ModalAddTodo({ handleChange, active, addTodo }) {
  const [value, setValue] = useState([""]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    handleChange();
  };
  const handleChangeValue = useCallback((newValue) => setValue(newValue), []);
  return (
    <div style={{ height: "500px" }}>
      <Modal
        open={active}
        onClose={handleChange}
        title="Create a new todo"
        primaryAction={{
          content: "Create",
          onAction: handleSubmit,
        }}
        secondaryActions={{
          content: "Close",
          onAction: handleChange,
        }}
        noScroll={true}
      >
        <Modal.Section>
          <TextField
            value={value}
            onChange={handleChangeValue}
            autoComplete="off"
          />
        </Modal.Section>
      </Modal>
    </div>
  );
}
