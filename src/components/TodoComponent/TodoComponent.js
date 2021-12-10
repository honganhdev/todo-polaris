import {
  Button,
  ButtonGroup,
  ResourceItem,
  TextStyle,
  Badge,
} from "@shopify/polaris";

function TodoComponent(item, completeTodo, removeTodo) {
  const { id, text, isCompleted } = item;

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

          <Button onClick={() => completeTodo([id])}>Complete</Button>
          <Button destructive onClick={() => removeTodo([id])}>
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </ResourceItem>
  );
}

export default TodoComponent;
