import * as React from "react";
import PinnedIcon from "../../assets/icons/icon-pinned.svg";
import Dropdown from "./Dropdown";

interface IProps {}
const FreezeTogle: React.FC<IProps> = () => {
  return (
    <>
      <div className="ac-datagrid--option_bar__freeze_togle">
        <img src={PinnedIcon} alt="Pinned Icon" />
        <span>Freeze</span>
      </div>
      <Dropdown
        items={["First Column", "First Row", "Direct Selection"]}
        selectedItem={undefined}
        selectCallBack={undefined}
      />
    </>
  );
};

export default FreezeTogle;
