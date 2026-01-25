import React, { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import {
    AnimationModule,
    CategoryAxisModule,
    ContextMenuModule,
    CrosshairModule,
    FunnelSeriesModule,
    LegendModule,
    ModuleRegistry,
    NumberAxisModule,
} from "ag-charts-enterprise";

ModuleRegistry.registerModules([
    AnimationModule,
    CategoryAxisModule,
    CrosshairModule,
    FunnelSeriesModule,
    LegendModule,
    NumberAxisModule,
    ContextMenuModule,
]);

export const TopSaledMango = () => {
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
        const varieties = ["Alphonso", "Banganapalli", "Totapuri", "Kesar", "Dasheri"];

        for (let i = 0; i < 50; i++) {
            const mangoSales = Math.floor(Math.random() * 400) + 100;
            const revenue = mangoSales * (Math.floor(Math.random() * 5) + 8);
            const profit = Math.floor(revenue * (Math.random() * 0.3 + 0.2));

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

        const varietySales = {};
        data.forEach((item) => {
            varietySales[item.variety] = (varietySales[item.variety] || 0) + item.mangoSales;
        });

        return Object.entries(varietySales)
            .map(([group, value]) => ({ group, value }))
            .sort((a, b) => b.value - a.value);
    }, []);

    const options = useMemo(() => ({
        data: rowData,
        title: {
            text: 'Top Sold Mango Varieties in India',
            fontSize: 12,
            fontFamily: 'Roboto Serif, serif',
          //  textAlign:'left',
        },
        subtitle: {
            text: '(In Tons)',
            fontSize: 10,
            fontFamily: 'Roboto Serif, serif',
           // textAlign:'left',
        },
        width: 400,
        height: 320,
        seriesArea: {
            padding: {
                left: 0,
                right: 10,
            },
        },
        contextMenu: {
            enabled: false
        },
        series: [
            {
                type: "funnel",
                stageKey: "group",
                valueKey: "value",
                fills: ["#05c2f1", "#e96219", "#ffbd23", "#58af16", "#126bb9"],
                tooltip: {
                    enabled: false
                },
                label: {
                    enabled: true,
                    fontSize: 12,
                    formatter: (params) => {
                        return `${new Intl.NumberFormat().format(params.datum.value)} tons`;
                    },
                },
            },
        ],
    }), [rowData]);

    return <AgCharts options={options} />;
};
