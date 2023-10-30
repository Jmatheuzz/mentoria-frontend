import { Table, TableColumnType } from "antd";
import './style.css'
import React from "react";

type PropsTableData = {
  dataSource: Array<Object>
  columns: TableColumnType<Object>[],
  title: React.ReactNode
}

export default function TableData({dataSource, columns, title}: PropsTableData){
    
    return (
      <div style={{marginTop: '15vh'}}>
        <h1 style={{width: '80%', margin: '0 auto'}}>{title}</h1>
        <Table dataSource={dataSource} columns={columns} style={{width: '80%', margin: '2vh auto'}}
          bordered
          pagination={{pageSize: 5}}
        />

      </div>
        

    )
}
  
  