import * as React from "react";
import FilterIcon from "../../assets/icons/icon-triangle.svg";
import ResetIcon from "../../assets/icons/icon-reset.svg";
import { FilterContextActionTypes } from "../../@interface";
import { useDatagridFilterDispatch } from "../../context/DatagridFilterContext";
import { useDatagridFilterContext } from "../../context/DatagridFilterContext";
interface IPros {
  onClick: () => void;
  setDisplay: () => void;
}

const FilterToggle: React.FC<IPros> = (props) => {
  const { onClick } = props;
  const filterDispatch = useDatagridFilterDispatch();
  const filterContext = useDatagridFilterContext();

  const onClickHandler = React.useCallback(
    (evt) => {
      evt.stopPropagation();
      filterDispatch({
        type: FilterContextActionTypes.SET_FILTER,
        isFiltered: false,
        filteredData: [],
        filteredDataLength: 0,
      });
    },
    [filterDispatch]
  );
  return (
    <div className="ac-datagrid--option_bar__filter_togle" onClick={onClick}>
      <div className="ac-datagrid--option_bar__filter_svg_box">
        {filterContext._isFiltered && (
          <img
            className="ac-datagrid--option_bar__reset"
            src={ResetIcon}
            alt="icon"
            onClick={onClickHandler}
          />
        )}
        <img src={FilterIcon} alt="icon" />
      </div>
      <span>FILTER</span>
    </div>
  );
};

export default React.memo(FilterToggle);
