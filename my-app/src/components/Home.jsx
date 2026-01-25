import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
    ClientSideRowModelModule,
    RowGroupingModule,
    ModuleRegistry,
} from "ag-grid-enterprise";

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    RowGroupingModule,
]);

export const Home = () => {
    const containerStyle = useMemo(
        () => ({ width: "100%", height: "500px" }),
        []
    );

    const gridStyle = useMemo(
        () => ({ height: "100%", width: "100%" }),
        []
    );

    const columnDefs = [
        {
            field: "year",
           // rowGroup: true,
           // hide: true,
        },
        {
            field: "city",
            headerName: "City",
           // rowGroup: true,
           // hide: true,
        },
        {
            field: "mangoSales",
            headerName: "Mango Sales (Tons)",
            //aggFunc: "sum",
        },
        {
            field: "revenue",
            headerName: "Revenue (₹ Lakhs)",
            //aggFunc: "sum",
        },
        {
            field: "profit",
            headerName: "Profit (₹ Lakhs)",
            //aggFunc: "sum",
        },
    ];


    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            sortable: true,
            filter: true,
            resizable: true,
            cellStyle: { fontWeight: "500" },
        };
    }, []);

    // Generate 50 rows of Mango Sales data
const rowData = useMemo(() => {
  const data = [];

  const years = [2020, 2021, 2022, 2023, 2024];

  const cities = [
    { city: "Chennai", state: "Tamil Nadu" },
    { city: "Bengaluru", state: "Karnataka" },
    { city: "Hyderabad", state: "Telangana" },
    { city: "Mumbai", state: "Maharashtra" },
    { city: "Delhi", state: "Delhi" },
  ];

  const varieties = [
    "Alphonso",
    "Banganapalli",
    "Totapuri",
    "Kesar",
    "Dasheri",
  ];

  for (let i = 0; i < 50; i++) {
    const mangoSales = Math.floor(Math.random() * 400) + 100; // tons
    const revenue = mangoSales * (Math.floor(Math.random() * 5) + 8); // ₹ Lakhs
    const profit = Math.floor(revenue * (Math.random() * 0.3 + 0.2)); // 20–50%

    data.push({
      year: years[i % years.length],
      city: cities[i % cities.length].city,
      state: cities[i % cities.length].state,
      variety: varieties[i % varieties.length],
      mangoSales,
      revenue,
      profit,
    });
  }

  return data;
}, []);


    return (
        <>
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
                Mango Sales Analysis using AG Grid Feature
            </h2>

            <div className="ag-theme-alpine" style={containerStyle}>
                <div style={gridStyle}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        animateRows={true}
                        // groupDisplayType="groupRows"
                        // autoGroupColumnDef={{
                        //     headerName: "Year",
                        //     field: "year",
                        // }}
                    />
                </div>
            </div>
        </>
    );
};
