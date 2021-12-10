import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  ResourceItem,
  ResourceList,
  TextStyle,
  Badge,
} from "@shopify/polaris";

function TodoList({ items, loading, completeTodo, removeTodo, setLoading }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleDelete = () => {
    removeTodo(selectedItems);
    setSelectedItems([]);
  };
  const handleComplete = () => {
    completeTodo(selectedItems);
    setSelectedItems([]);
  };

  const promotedBulkActions = [
    {
      content: "DELETE",
      onAction: handleDelete,
    },
    {
      content: "Complete",
      onAction: handleComplete,
    },
  ];

  const resourceName = {
    singular: "todo",
    plural: "todos",
  };
  return (
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={items}
        renderItem={renderItem}
        selectedItems={selectedItems}
        onSelectionChange={(val) => {
          setSelectedItems(val);
        }}
        loading={loading}
        promotedBulkActions={promotedBulkActions}
        selectable
      />
    </Card>
  );

  function renderItem(item) {
    const { id, text, isCompleted } = item;

    let ids = [id];

    return (
      <ResourceItem id={id}>
        <h3 style={{ textDecoration: isCompleted ? "line-through" : "" }}>
          <TextStyle variation="strong">{text}</TextStyle>
        </h3>
        <div className="btn-group">
          <ButtonGroup>
            {isCompleted ? (
              <Badge status="success">Done</Badge>
            ) : (
              <Badge status="critical">Pending</Badge>
            )}
            <Button onClick={() => completeTodo(ids)}>Complete</Button>
            <Button destructive onClick={() => removeTodo(ids)}>
              Delete
            </Button>
          </ButtonGroup>
        </div>
      </ResourceItem>
    );
  }
}

export default TodoList;
