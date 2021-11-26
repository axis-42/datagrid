import * as React from "react";
import { IDatagridOptionBar } from "@interface";
import { useDatagridLayoutContext } from "../../context/DatagridLayoutContext";

const OptionBar: React.FC<IDatagridOptionBar> = () => {
  const layoutContext = useDatagridLayoutContext();
  const { _bodyWidth } = layoutContext;

  const containerStyle = React.useMemo(() => ({ width: _bodyWidth }), [
    _bodyWidth,
  ]);
  return (
    <div className="ac-datagrid--option_bar" style={containerStyle}>
      optionBar
    </div>
  );
};

export default React.memo(OptionBar);
