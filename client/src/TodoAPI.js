export default {
  getTodo : ()=>{
    return fetch(`/todo`)
    .then(res => res.json())
    .then(data => data);
  },
  updateTodo : (id, todos)=>{
    return fetch(`/todo/${id}`,
      {method : "put",
      body: JSON.stringify(todos),
      headers : {
        "Content-Type" : "application/json"
      }}).then(res => res.json())
      .then(data => data);
    },
    createTodo : (todos)=>{
      return fetch(`/todo`,
        {method : 'POST',
        body: JSON.stringify(todos),
        headers : {
          'Content-Type' : 'application/json'
        }}).then(res => res.json())
        .then(data => data);
      },
      deleteTodo : (_id)=>{
          return fetch(`/todo/${_id}`,
                      {method : 'delete'})
                      .then(res => res.json())
                      .then(data => data);
      }
    }
