"use client";

import dynamic from "next/dynamic";
import {
  Column,
  Paging,
  Sorting,
  FilterRow,
  SearchPanel,
  LoadPanel,
} from "devextreme-react/data-grid";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});
// type DxGridProps = {
//   data: T[],
//   columns?: ColumnConfig<T>[],
//   title?: string,
//   loading?: boolean,
//   pageSize?: number,
// };
export default function DxGrid({
  data = [],
  columns,
  users = "",
  loading = false,
  pageSize = 20,
}) {
  const generatedColumns =
    columns && columns.length > 0
      ? columns
      : data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          dataField: key,
          caption: key.replace(/_/g, " ").toUpperCase(),
        }))
      : [];

  return (
    <div className="dx-page">
      {users && <h2 className="dx-title">{users}</h2>}

      <div className="dx-card">
        <DataGrid
          dataSource={data}
          keyExpr="id"
          showBorders={false}
          columnAutoWidth
          rowAlternationEnabled
          hoverStateEnabled
        >
          <LoadPanel enabled={loading} />
          <Sorting mode="multiple" />
          <FilterRow visible />
          <SearchPanel visible highlightCaseSensitive={false} />

          <Paging defaultPageSize={pageSize} />
          {/* <Pager
            visible
            showPageSizeSelector
            allowedPageSizes={[5, 8, 10, 20]}
            showInfo
          /> */}

          {generatedColumns.map((col) => (
            <Column
              key={col.dataField}
              dataField={col.dataField}
              caption={col.caption}
            />
          ))}
        </DataGrid>
      </div>
    </div>
  );
}
