 import React from "react";
 
 export const generateRowData = () => {
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
    };

 export const rowData = generateRowData();
