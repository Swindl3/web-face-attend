import React, { Component } from 'react'
import { img_url } from "../../Api"
import ReactTable from 'react-table'
import "react-table/react-table.css"
import ExportToExcel from "../table-to-excel/ExportToExcel"
import { withRouter } from 'react-router-dom'
class AttendItem extends Component {
    constructor(props) {
        super(props)

    }
    onEdit(id) {
        console.log("onEdit : ", id)
        this.props.history.push('/user'+id)
    }
    onDelete(id) {
        console.log("onDelete : ", id)
    }
    render() {
        let getImgPath = this.props.attends;
        getImgPath = getImgPath.map((row) => {
            return row.imgpath;
        });
        const { attend_id } = this.props
        // console.log("imgpath", imgpath)
        const columns = [
            {
                Header: "AttenId",
                accessor: "attend_id",
                style: {
                    textAlign: "center"
                },
                width: 100
            },
            {
                Header: "UserId",
                accessor: "user_id",
                style: {
                    textAlign: "center",

                },
                width: 100,
                maxWidth: 100,
                minWidth: 100

            },
            {
                Header: "Image",
                sortable: false,
                Cell: (row) => {
                    return <div><img style={{ width: 80, height: 80 }} src={img_url + row.original.imgpath} alt="" /></div>
                },
                style: {
                    textAlign: "center"
                },
                filterable: false
            },
            {
                Header: "FirstName",
                accessor: "first_name",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "LastName",
                accessor: "last_name",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "RFID",
                accessor: "rfid_num",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Timestamp",
                accessor: "timestamp",
                style: {
                    textAlign: "center"
                },
                sortable: true,
                filterable: false

            },
            {
                Header: "Action",
                Cell: props => {
                    return (
                        <div>


                            <button className="btn btn-warning mt-4" onClick={() => this.onEdit(props.original)}>Edit</button>
                            <span>&nbsp;&nbsp;</span>
                            <button className="btn btn-danger mt-4" onClick={() => this.onDelete(props.original.attend_id)}>Del</button>

                        </div>


                    )
                },
                filterable: false,
                style: {
                    textAlign: "center"
                }
            }
        ]


        return (
            <div className="m-5">

                <ReactTable
                    className="-striped -highlight"
                    columns={columns}
                    data={this.props.attends}
                    filterable
                    defaultPageSize={10}
                    showPaginationTop={false}
                    noDataText={"Data Not Found"}
                >
                    {(state, filtredData, instance) => {
                        this.reactTable = state.pageRows.map(attend => { return attend._original });
                        console.log("state", state)
                        return (
                            <div>
                                {filtredData()}
                                <ExportToExcel attends={this.reactTable} />
                            </div>
                        )
                    }}
                </ReactTable>

            </div>
        )
    }
}

export default withRouter(AttendItem); //ใส่ connect ไว้ข้างใน