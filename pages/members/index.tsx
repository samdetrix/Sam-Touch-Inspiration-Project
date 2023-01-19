import type { NextPage } from "next";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Table from "../../components/table/Table";
import FadeLoader from "react-spinners/FadeLoader";
import Backdrop from "@mui/material/Backdrop";

// @ts-ignore
const Members: NextPage = () => {
  const [members, setMembers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMembers = async () => {
    try {
      
      const response = await axios.get(
        `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-apikey": "63be7360969f06502871ad7f",
          },
        }
      );
      setMembers(response.data);
      console.log("MEMBERS!!!!!!", members);
    } catch (error) {
      console.log(error);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getMembers();
    console.log(members);
  }, []);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: false,
        display: true,
        setCellProps: () => ({ style: { align: "center", fontSize: 14, fontFamily: 'Ubuntu', fontWeight: 550, } }),
        // setCellHeaderProps: () => ({ style: { backgroundColor: '#5f6062', color: 'white', fontSize: '0.9rem', } }),
        customHeadRender: (columnMeta: { label: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }, updateDirection: (arg0: number) => void) => (
          <th key={1} style={{ backgroundColor: '#5f6062', color: 'white', fontSize: '0.94rem', fontWeight: 450, lineHeight: 3.2 }}>
            {columnMeta.label}
          </th>
        ),
        customBodyRender: (value: any, tableMeta: any) =>
        <Link href={{
            // @ts-ignore
            pathname: "/members/" + members[tableMeta.rowIndex]._id
            
          }}>
            {value}
            
          </Link>
      }
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
        display: true,
        setCellProps: () => ({ style: { align: "center", fontSize: 14, fontFamily: 'Ubuntu', color: ' #707683', fontWeight: 550, } }),
        // setCellHeaderProps: () => ({ style: { backgroundColor: '#5f6062', color: 'white', fontSize: '0.9rem', } }),
        customHeadRender: (columnMeta: { label: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }, updateDirection: (arg0: number) => void) => (
          <th key={1} style={{ backgroundColor: '#5f6062', color: 'white', fontSize: '0.94rem', fontWeight: 450, lineHeight: 3.2 }}>
            {columnMeta.label}
          </th>
        ),
      }
    },
    {
      name: "occupation",
      label: "Occupation",
      options: {
        filter: true,
        sort: false,
        display: true,
        setCellProps: () => ({ style: { align: "center", fontSize: 14, fontFamily: 'Ubuntu', color: ' #707683', fontWeight: 550, } }),
        // setCellHeaderProps: () => ({ style: { backgroundColor: '#5f6062', color: 'white', fontSize: '0.9rem', } }),
        customHeadRender: (columnMeta: { label: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }, updateDirection: (arg0: number) => void) => (
          <th key={1} style={{ backgroundColor: '#5f6062', color: 'white', fontSize: '0.94rem', fontWeight: 450, lineHeight: 3.2 }}>
            {columnMeta.label}
          </th>
        ),
      }
    },
    {
      name: "bio",
      label: "Bio",
      options: {
        filter: true,
        sort: false,
        display: true,
        setCellProps: () => ({ style: { align: "center", fontSize: 14, fontFamily: 'Ubuntu', color: ' #707683', fontWeight: 550, } }),
        // setCellHeaderProps: () => ({ style: { backgroundColor: '#5f6062', color: 'white', fontSize: '0.9rem', } }),
        customHeadRender: (columnMeta: { label: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }, updateDirection: (arg0: number) => void) => (
          <th key={1} style={{ backgroundColor: '#5f6062', color: 'white', fontSize: '0.94rem', fontWeight: 450, lineHeight: 3.2 }}>
            {columnMeta.label}
          </th>
        ),
      }
    },
  ];

  const options = {
    filter: true,
    filterType: "textField",
    responsive: "standard",
    search: true,
    print: false,
    searchPlaceholder: "Search By Name",
    tableId: "03009226196169874",
    fixedHeader: true,
    fontFamily: "Ubuntu",
    viewColumns: false,
    selectableRows: "none",
    fixedSelectColumn: true,
    tableBodyHeight: "auto",
    enableNestedDataAccess: ".",
    count: 50,
    elevation: 0,

    downloadOptions: {
      separator: ",",
      filename: "Customers Summary.csv",
      filterOptions: {
        useDisplayedColumnsOnly: false, // it was true
        useDisplayedRowsOnly: false, // it was true
      },
    },
    downloadFile: true,
    onDownload: (
      buildHead: any,
      buildBody: any,
      columns: object,
      data: object
    ) => {
      let val = `${buildHead(columns)}${buildBody(data)}`
        .replace(/[^\x00-\x7F]/g, "")
        .toString()
        .trim();
      return val;
    },

    searchOpen: true,
    searchText: " ",

    textLabels: {
      body: {
        noMatch: isLoaded ? (
          "Sorry, no matching records exist in Inspiration"
        ) : (
          <div>
            <Backdrop
              sx={{
                position: "relative",
                height: 600,
                width: 1550,
                backgroundColor: "#E8E9EC",
              }}
              open={true}
            >
              <FadeLoader
                style={{ marginLeft: 45, position: "relative", top: 3 }}
              />
            </Backdrop>
          </div>
        ),
        toolTip: "Sort",
        // columnHeaderTooltip: (column: any) => column`Sort for ${column.label}`
      },
      pagination: {
        next: "Next Page",
        previous: "Previous Page",
        rowsPerPage: "Rows per page:",
        displayRows: "of",
      },
      toolbar: {
        search: "Search",
        downloadCsv: "Download Members Excel List",
        print: "Print members",
        viewColumns: "View Columns",
        filterTable: "Filter Table",
      },
      setFilterChipProps: () => {
        return {
          color: "primary",
          variant: "outlined",
          className: "testClass123",
        };
      },
      viewColumns: {
        title: "Show Columns",
        titleAria: "Show/Hide Table Columns",
      },
      selectedRows: {
        text: "record(s) selected",
        delete: "Delete",
        deleteAria: "Delete Selected Records",
      },
    },
  };

  const getMuiTheme = () =>
    createTheme({
      components: {
        MuiTableCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#FFFFFF",
              fontFamily: "Ubuntu",
              fontWeight: "inherit",
            },
            footer: {
              border: 0,
            },
          },
        },
        //@ts-ignore
        MUIDataTableBodyCell: {
          styleOverrides: {
            root: {
              textAlign: "center",
              alignItems: "center",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              // fontFamily: 'Ubuntu',
              color: "#ffffff",
              justifyContent: "start",
              // fontWeight: 'bold',
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            regular: {
              ["@media (min-width:600px)"]: {
                // eslint-disable-line no-useless-computed-key
                paddingLeft: "0px",
                paddingRight: "0px",
                // minHeight:'3px',
                marginBottom: "2px",
                marginTop: "0px",
              },
            },
          },
        },

        //@ts-ignore
        MUIDataTableSelectCell: {
          styleOverrides: {
            headerCell: {
              backgroundColor: "#5f6062",
              color: "wh",
            },
          },
        },

        MUIDataTable: {
          styleOverrides: {
            responsiveBase: {
              position: "relative",
              height: "auto",
              borderRadius: "18px",
              border: "1px solid #f2f2f2",
              boxShadow: "0 0 6px 4px #efefef",
            },
          },
        },
        MUIDataTablePagination: {
          styleOverrides: {
            navContainer: {
              border: 0,
              boxShadow: "0 ",
            },
          },
        },
        MuiCardHeader: {
          styleOverrides: {
            title: {
              fontFamily: "Ubuntu",
              display: "flex",
            },
            avatar: {
              paddingLeft: 26,
              fontFamily: "Ubuntu",
            },
          },
        },
      },
    });

  return (
    <>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Members</h1>
        {/* <span className="text-7xl">💬</span> */}
        <div className="p-4">
        <ThemeProvider theme={getMuiTheme()}>
          <Table columns={columns} options={options} data={members} />
        </ThemeProvider>
      </div>
      </div>
      
    </>
  );
};

export default Members;
