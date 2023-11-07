import { useEffect, useState } from "react"
import { fetchGroups } from "../../api/dataservice"
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function Group() {
  const [groupsWithPersonCount, setGroupsWithPersonCount] = useState();

  useEffect(() => {
    fetchGroups()
      .then((response) => {
        const groupsData = response.data;

        console.log(groupsData);

        setGroupsWithPersonCount(groupsData.map(group => ({
          id: group.id,
          name: group.name,
          personCount: group.persons ? group.persons.length : 0,
          tipoGrupoId: group.tipoGrupo ? group.tipoGrupo.id : null, // Asume que tienes un objeto tipoGrupo
          tipoGrupoName: group.tipoGrupo ? group.tipoGrupo.name : '' // Asume que tienes un objeto tipoGrupo
        })))
        
      })
      .catch((error) => {
        console.log(error);
      })
  }, []); // El [] como segundo argumento asegura que useEffect se ejecute solo una vez al montar el componente.

  return (
      <DataGrid
        dataSource={groupsWithPersonCount}
        
        showBorders={true}
      >
        {/* Define la primera columna con el campo 'id' y un ancho de 50 píxeles. */}
        <Column dataField="id" width={50} />
        
        {/* Define la segunda columna con el campo 'name'. */}
        <Column dataField="name" />
        
        {/* Define la tercera columna con el campo 'personCount' y un título personalizado 'Number of Persons'. */}
        <Column dataField="tipoGrupoName" caption="Tipo de Grupo" />
      </DataGrid>

  )
}