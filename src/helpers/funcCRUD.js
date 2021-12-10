export async function deleteTodoFunc(ids) {
  const option = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: ids }),
  };
  const resp = await fetch(`http://localhost:5000/api/todos`, option);
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
    body: JSON.stringify({ data: data, ids: ids }),
  };
  const resp = await fetch(`http://localhost:5000/api/todos`, option);
  const todoData = await resp.json();
  return todoData.data;
}
