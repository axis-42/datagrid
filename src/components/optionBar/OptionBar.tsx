import * as React from "react";
import { IDatagridOptionBar } from "@interface";
import FilterToggle from "./FilterToggle";
import FilterSelector from "./FilterSelector";

const OptionBar: React.FC<IDatagridOptionBar> = () => {
  const [display, setDisplay] = React.useState(false);

  const onClick = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <div className="ac-datagrid--option_bar">
      <FilterToggle onClick={onClick} setDisplay={onClick} />
      {display && <FilterSelector setDisplay={onClick} />}
    </div>
  );
};

export default React.memo(OptionBar);
