import * as React from "react";
import { IDatagridOptionBar } from "@interface";
import { useDatagridLayoutContext } from "../../context/DatagridLayoutContext";
import FreezeTogle from "./FreezeTogle";

const OptionBar: React.FC<IDatagridOptionBar> = () => {
  const layoutContext = useDatagridLayoutContext();
  const { _bodyWidth } = layoutContext;

  const containerStyle = React.useMemo(() => ({ width: _bodyWidth }), [
    _bodyWidth,
  ]);
  return (
    <div className="ac-datagrid--option_bar" style={containerStyle}>
      <FreezeTogle />
    </div>
  );
};

export default React.memo(OptionBar);
