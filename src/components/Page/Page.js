import React, { useState, useCallback } from "react";
import { Page } from "@shopify/polaris";
import "./Page.css";
import TodoList from "../TodoList/TodoList";
import ModalAddTodo from "../ModalAddTodo/ModalAddTodo";
import { addTodoFunc } from "../../helpers/funcCRUD";
import useFetchData from "../../hooks/useFetchApi";
import { deleteTodoFunc, updateTodoFunc } from "../../helpers/funcCRUD";

function PageTodo() {
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);

  const {
    data: items,
    setData: setItems,
    loading,
    setLoading,
  } = useFetchData({
    url: "http://localhost:5000/api/todos",
  });

  const addTodo = async (text) => {
    setLoading(true);
    const newItem = await addTodoFunc(text);
    setItems([...items, newItem]);
    setLoading(false);
  };

  const completeTodo = async (ids) => {
    let newItems = items;
    const updatedTodo = await updateTodoFunc(ids, {
      isCompleted: true,
    });
    updatedTodo.map(async (item) => {
      newItems = newItems.map((todoItem) => {
        if (item.id === todoItem.id) return { ...todoItem, ...item };
        return todoItem;
      });
    });
    setItems(newItems);
    setLoading(false);
  };

  const removeTodo = async (ids) => {
    setLoading(true);
    await deleteTodoFunc(ids);
    console.log(ids);
    ids.map((id) => {
      const item = items.find((item) => {
        if (item.id === id) return item;
      });

      items.splice(items.indexOf(item), 1);
    });
    setItems([...items]);
    setLoading(false);
  };

  return (
    <Page
      fullWidth
      title="Todoes"
      primaryAction={{
        content: "Create todo",
        onAction: handleChange,
      }}
    >
      <TodoList
        items={items}
        loading={loading}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        setLoading={setLoading}
      />
      {active ? (
        <ModalAddTodo
          handleChange={handleChange}
          active={active}
          addTodo={addTodo}
        />
      ) : (
        ""
      )}
    </Page>
  );
}

export default PageTodo;
