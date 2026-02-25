"use client";

import dynamic from "next/dynamic";
import {
  Column,
  Paging,
  Pager,
  Sorting,
  FilterRow,
  SearchPanel,
  LoadPanel,
} from "devextreme-react/data-grid";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

export default function DxGrid({
  data = [],
  columns = [],
  users = "",
  loading = false,
  pageSize = 8,
}) {
  return (
    <div style={{ padding: 20 }}>
      <h1>{users}</h1>
      <DataGrid dataSource={data} keyExpr="id"  showBorders={true}>
        <LoadPanel enabled={loading} />
        <Sorting mode="multiple" />
        <FilterRow visible={true} />
        <SearchPanel visible={true} />
        <Paging defaultPageSize={pageSize} />
        <Pager showPageSizeSelector={true} />

        {columns.map((col) => (
          <Column
            key={col.dataField}
            dataField={col.dataField}
            caption={col.caption}
          />
        ))}
      </DataGrid>
    </div>
  );
}
