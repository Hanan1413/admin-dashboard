import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link
              to="/users/test"
              style={{ textDecoration: "none", color: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{ textDecoration: "none", color: "none" }} className="link">
          
           Add new
        </Link>
      </div>
      <div style={{ height: 600, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={userRows}
          style={{ lineHeight: "normal" }}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            "& .MuiDataGrid-cell": {
              lineHeight: "normal",
              padding: "10px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Datatable;
