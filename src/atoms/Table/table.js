import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const TableComponent = (props) => {
  return (
    <BootstrapTable
      striped={true}
      hover={true}
      //   bootstrap4
      bordered={false}
      keyField='id'
      data={props?.data}
      columns={props?.columns}
      columnFilter
      search
      pagination={paginationFactory({ sizePerPage: 10 })}
    />
  );
};

export default TableComponent;
