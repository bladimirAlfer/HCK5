import { useEffect, useState } from "react";
import { fetchTipoGrupo } from "../../api/dataservice"; // Asegúrate de implementar esto
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function TipoGrupoComponent() {
  const [tipoGruposData, setTipoGruposData] = useState([]);

  useEffect(() => {
    fetchTipoGrupo()
      .then((response) => {
        const tipoGrupos = response.data;

        console.log(tipoGrupos);

        setTipoGruposData(tipoGrupos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DataGrid
      dataSource={tipoGruposData}
      showBorders={true}
    >
      <Column dataField="id" width={50} caption="ID" />
      <Column dataField="name" caption="Nombre" />
      {/* Si tuvieras más campos, los agregarías aquí como <Column /> */}
    </DataGrid>
  );
}
