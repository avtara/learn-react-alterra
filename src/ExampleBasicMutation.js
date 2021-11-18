import React from "react";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

const DeleteTodo = gql`
  mutation MyMutation($id: Int) {
    delete_todolist(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const GetTodo = gql`
  query MyQuery {
    todolist {
      is_done
      id
      title
    }
  }
`;

export default function ExampleBasicMutation() {
  const { data: DataGetTodo, error, loading } = useQuery(GetTodo);
  const [deleteTodo, { data }] = useMutation(DeleteTodo, {
    refetchQueries: [GetTodo],
  });
  console.log(DataGetTodo);

  const handleDeleteTodo = (id) => {
    console.log("handleDeleteTodo", id);
    deleteTodo({ variables: { id: id } });
  };
  return (
    <div>
      <h1>ExampleBasicMutation</h1>
      {DataGetTodo?.todolist.map((e) => (
        <>
          <h1>{e.id}</h1>
          <button onClick={() => handleDeleteTodo(e.id)}>Delete</button>
        </>
      ))}
    </div>
  );
}
