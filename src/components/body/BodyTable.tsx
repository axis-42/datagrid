import * as React from "react";
import { useDatagridContext } from "../../context/DatagridContext";
import { IColumn } from "../../@interface";
import BodyTableRow from "./BodyTableRow";
import { arrayFromRange, getDataItem } from "../../lib";
import { useDatagridFilterContext } from "../../context/DatagridFilterContext";

interface IProps {
  columns: IColumn[];
  startRowIndex: number;
  endRowIndex: number;
  lineNumberColumnWidth: number;
}

const BodyTable: React.FC<IProps> = ({
  columns,
  startRowIndex,
  endRowIndex,
  lineNumberColumnWidth,
}) => {
  const context = useDatagridContext();

  const filteredContext = useDatagridFilterContext();

  const tableStyle = React.useMemo(
    () => ({ left: lineNumberColumnWidth }),
    [lineNumberColumnWidth]
  );

  return (
    <table
      className="ac-datagrid--body--main__panel--body__table"
      style={tableStyle}
    >
      <colgroup>
        {columns.map((col, ci) => (
          <col key={ci} style={{ width: col._width }} />
        ))}
        <col />
      </colgroup>
      <tbody>
        {arrayFromRange(startRowIndex, endRowIndex).map((rowIndex) => {
          if (context.data) {
            const rowItem = !filteredContext._isFiltered
              ? getDataItem(context.data, rowIndex)
              : getDataItem(filteredContext._filteredData, rowIndex);

            if (rowItem) {
              return (
                <BodyTableRow
                  key={rowIndex}
                  columns={columns}
                  rowIndex={rowIndex}
                  rowItem={rowItem}
                />
              );
            }
          }
        })}
      </tbody>
    </table>
  );
};

export default React.memo(BodyTable);
