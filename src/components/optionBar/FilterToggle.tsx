import * as React from "react";
import FilterIcon from "../../assets/icons/icon-filter.svg";
import ResetIcon from "../../assets/icons/icon-reset.svg";
import { FilterContextActionTypes } from "../../@interface";
import { useDatagridFilterDispatch } from "../../context/DatagridFilterContext";
import { useDatagridFilterContext } from "../../context/DatagridFilterContext";
interface IPros {
  onClick: () => void;
  setDisplay: () => void;
}

const FilterToggle: React.FC<IPros> = (props, setDisplay) => {
  const { onClick } = props;
  const filterDispatch = useDatagridFilterDispatch();
  const filterContext = useDatagridFilterContext();

  const onClickHandler = (evt) => {
    evt.stopPropagation();
    filterDispatch({
      type: FilterContextActionTypes.SET_FILTER,
      isFiltered: false,
      filteredData: [],
      filteredDataLength: 0,
    });
  };
  return (
    <div className="ac-datagrid--option_bar__filter_togle" onClick={onClick}>
      <div>
        {filterContext._isFiltered && (
          <img src={ResetIcon} alt="icon" onClick={onClickHandler} />
        )}
        <img src={FilterIcon} alt="icon" />
      </div>
      <span>FILTER</span>
    </div>
  );
};

export default React.memo(FilterToggle);
