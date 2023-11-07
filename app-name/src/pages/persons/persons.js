import { useEffect, useState } from "react"
import { fetchPersons } from "../../api/dataservice" // You need to implement this
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function Person() {
  // Se declara un estado llamado 'personsData' utilizando useState.
  const [personsData, setPersonsData] = useState([]);

  // Utiliza useEffect para realizar la solicitud a la API cuando el componente se monta.
  useEffect(() => {
    fetchPersons() 
      .then((response) => {
        const persons = response.data;

        console.log(persons);

        setPersonsData(persons);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <DataGrid
      dataSource={personsData}
      
      showBorders={true}
    >
      <Column dataField="id" width={50} />
      <Column dataField="name" caption="Nombre" />
      <Column dataField="lastName" caption="Apellido" />
      <Column dataField="career" caption="Carrera" />
    </DataGrid>
  );
}
