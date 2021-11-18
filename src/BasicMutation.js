import React from "react";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

const GetTodo = gql`
  query MyQuery {
    todolist {
      is_done
      id
      title
    }
  }
`;

const DeleteTodo = gql`
  mutation MyMutation($id: Int!) {
    delete_todolist_by_pk(id: $id) {
      id
    }
  }
`;
export default function BasicMutation() {
  const { data: DataGetTodo, loading, error, refetch } = useQuery(GetTodo);

  const [deleteTodo, { loading: loadingDelete }] = useMutation(DeleteTodo, {
    refetchQueries: [GetTodo],
  });
  const handleDeleteTodo = (idx) => {
    deleteTodo({
      variables: {
        id: idx,
      },
    });
    // console.log("handleDeleteTodo", idx);
  };
  return (
    <div>
      <h1>BasicMutation</h1>
      {DataGetTodo?.todolist.map((x) => (
        <>
          <h4>{x.id}</h4>
          <button onClick={() => handleDeleteTodo(x.id)}>delete</button>
        </>
      ))}
      <div class="mb-3">
        <label for="" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
        <small id="helpId" class="form-text text-muted">
          Help text
        </small>
      </div>
    </div>
  );
}
