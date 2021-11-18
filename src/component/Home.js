import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";

const GetAnggota = gql`
  query MyQuery {
    anggota_mutation {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
const getById = gql`
  query MyQuery($id: Int!) {
    anggota_mutation(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const DeleteData = gql`
  mutation MyMutation($id: Int!) {
    delete_anggota_mutation_by_pk(id: $id) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const InsertData = gql`
  mutation MyMutation($object: anggota_mutation_insert_input!) {
    insert_anggota_mutation_one(object: $object) {
      id
    }
  }
`;

function Home() {
  const [value, setValue] = useState(0);
  const {
    data: allData,
    loading: loadingAllData,
    error: errorAllData,
    refetch,
  } = useQuery(GetAnggota);
  const [deletedata, { loading: loadingDelete }] = useMutation(DeleteData, {
    refetchQueries: [GetAnggota],
  });
  const [getData, { data: dataId, loading: loadId, errorId }] =
    useLazyQuery(getById);
  const [addData, { loading: addLoading }] = useMutation(InsertData, {
    refetchQueries: [GetAnggota],
  });
  const showAllData = () => {
    console.log(allData?.anggota_mutation);
    refetch();
  };
  const hapusPengunjung = (id) => {
    deletedata({
      variables: {
        id: id,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      ...newUser,
    };
    addData({
      variables: {
        object: {
          id: newData.id,
          nama: newData.nama,
          umur: newData.umur,
          jenis_kelamin: newData.jenisKelamin,
        },
      },
    });
  };

  const HandlerId = () => {
    getData({
      variables: {
        id: value,
      },
    });
  };

  if (errorId) {
    console.log(errorId);
    return null;
  }

  if (loadId) {
    return "wait";
  }
  return (
    <div>
      <Header />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button style={{ marginBottom: "20px" }} onClick={HandlerId}>
        Search By ID
      </button>
      <button onClick={showAllData}>Show All</button>
      {(loadingAllData || loadId || addLoading || loadingDelete) && (
        <div className='center'>Waiting ...</div>
      )}
      {!errorAllData && !loadingAllData && !loadId && (
        <ListPassenger
          data={dataId ? dataId?.anggota_mutation : allData?.anggota_mutation}
          hapusPengunjung={hapusPengunjung}
        />
      )}
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}

export default Home;