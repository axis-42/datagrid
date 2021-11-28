import * as React from "react";
import { IDatagridBody, LayoutContextActionTypes } from "../@interface";
import BodyLeftPanel from "./body/BodyLeftPanel";
import BodyMainPanel from "./body/BodyMainPanel";
import useIsomorphicLayoutEffect from "../lib/useIsomorphicLayoutEffect";
import { useDatagridContext } from "../context/DatagridContext";
import {
  useDatagridLayoutContext,
  useDatagridLayoutDispatch,
} from "../context/DatagridLayoutContext";
import { useDatagridFilterContext } from "../context/DatagridFilterContext";

const DatagridBody: React.FC<IDatagridBody> = (props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const context = useDatagridContext();
  const layoutContext = useDatagridLayoutContext();
  const layoutDispatch = useDatagridLayoutDispatch();
  const filterContext = useDatagridFilterContext();
  const { bodyRowHeight = 20, dataLength } = context;
  const { _filteredDataLength } = filterContext;
  const { _bodyHeight = 1, _scrollTop } = layoutContext;

  const { startRowIndex, endRowIndex, styleTop } = React.useMemo(() => {
    const displayRowCount = Math.floor(_bodyHeight / bodyRowHeight);
    const startRowIndex = Math.floor(_scrollTop / bodyRowHeight);
    const endRowIndex =
      startRowIndex + displayRowCount > dataLength
        ? dataLength
        : startRowIndex + displayRowCount;

    const filterEndIndex =
      startRowIndex + displayRowCount > _filteredDataLength
        ? _filteredDataLength
        : startRowIndex + displayRowCount;

    return {
      startRowIndex,
      endRowIndex: filterContext._isFiltered ? filterEndIndex - 1 : endRowIndex,
      styleTop: -(_scrollTop % bodyRowHeight),
    };
  }, [_bodyHeight, bodyRowHeight, dataLength, _scrollTop, _filteredDataLength]);

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current) {
      const bodyHeight = containerRef.current.clientHeight;
      const bodyWidth = containerRef.current.clientWidth;
      layoutDispatch({
        type: LayoutContextActionTypes.SET_BODY_DIMENSION,
        bodyHeight,
        bodyWidth,
      });
    }
  }, [props.style, context.height, context.headerHeight]);

  return (
    <div ref={containerRef} className="ac-datagrid--body" style={props.style}>
      <BodyLeftPanel />
      <BodyMainPanel
        startRowIndex={startRowIndex}
        endRowIndex={endRowIndex}
        styleTop={styleTop}
      />
      {props.children}
    </div>
  );
};

export default DatagridBody;
