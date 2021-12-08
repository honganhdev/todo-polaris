export async function deleteTodoFunc(ids) {
  const option = { method: "DELETE" };
  const resp = await fetch(
    `http://localhost:5000/api/todos/${ids.toString()}`,
    option
  );
  const todoData = await resp.json();
  return todoData.data;
}

export async function addTodoFunc(text) {
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  };
  const resp = await fetch(`http://localhost:5000/api/todos`, option);
  const todoData = await resp.json();
  return todoData.data;
}

export async function updateTodoFunc(ids, data) {
  console.log(ids);
  const option = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const resp = await fetch(
    `http://localhost:5000/api/todos/${ids.toString()}`,
    option
  );
  const todoData = await resp.json();
  console.log(todoData.data);
  return todoData.data;
}
