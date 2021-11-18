import { useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";


const GetAnggota = gql`
  query MyQuery {
  anggota {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;
const getById = gql`
  query MyQuery($id: Int!) {
    anggota(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

function Home() {
  const [value, setValue] = useState(0);
  const {
    data: allData,
    loading: loadingAllData,
    error: errorAllData,
  } = useQuery(GetAnggota);
  const [passengers, setPassengers] = useState([]);
  const [getData, { data: dataId, loading: loadId, errorId }] =
    useLazyQuery(getById);
  const showAllData = () => {
    setPassengers(allData?.anggota);
  };
  const hapusPengunjung = (id) => {
    setPassengers({
			passengers: [
				...passengers.filter((item) => {
					return item.id !== id;
				}),
			],
		});
  };

  const tambahPengunjung = (newUser) => {
    const newPassenger = {
			id: uuidv4(),
			...newUser,
		};
		setPassengers({
			passengers: [...passengers, newPassenger],
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
      {errorAllData && <p>Something Went Wrong...</p>}
      {(loadingAllData || loadId) && <div className='center'>Please wait when fetching data</div>}
      {!errorAllData && !loadingAllData && !loadId && (
        <ListPassenger
          data={dataId ? dataId?.anggota : allData?.anggota}
          hapusPengunjung={hapusPengunjung}
        />
      )}
      {console.log(passengers)}
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}

export default Home;