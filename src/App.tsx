import * as React from "react";
import { IDatagridProps } from "./@interface";
import { DatagridProvider } from "./context/DatagridContext";
import { DatagridLayoutProvider } from "./context/DatagridLayoutContext";
import Datagrid from "./components/Datagrid";
import OptionBar from "./components/optionBar/OptionBar";

const App: React.FC<IDatagridProps> = (props) => {
  return (
    <DatagridProvider>
      <DatagridLayoutProvider>
        <OptionBar />
        <Datagrid {...props} />
      </DatagridLayoutProvider>
    </DatagridProvider>
  );
};

export default App;
