import { AgCharts } from 'ag-charts-react';
import 'ag-charts-enterprise';
import { AllEnterpriseModule, ModuleRegistry } from 'ag-charts-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule]);

export const ComboChart = ({ rowData }) => {
  const aggregatedData = rowData.reduce((acc, curr) => {
    const city = curr.city;
    const revenue = curr.revenue;
    const profit = curr.profit;
    const existingEntry = acc.find(item => item.city === city);
    if (existingEntry) {
      existingEntry.revenue += revenue;
      existingEntry.profit += profit;
    } else {
      acc.push({ city, revenue, profit });
    }
    return acc;
  }, []);

  // Sort by revenue in descending order
  aggregatedData.sort((a, b) => b.revenue - a.revenue);

  return (
    <AgCharts
      options={{
        data: aggregatedData,
        contextMenu: {
          enabled: false
        },
        title: {
          text: 'Revenue vs Profit by City',
          fontSize: 12,
          fontFamily: 'Roboto Serif, serif',
        },
        width: 510,
        height: 320,
        axes: {
          x: {
            type: 'category',
            title: {
              text: 'City',
              fontSize: 10,
              fontFamily: 'Roboto Serif, serif',
              color: '#555555',
            },
          },
          y: {
            type: 'number',
            title: {
              text: 'Revenue (₹ Lakhs)',
              fontSize: 10,
              fontFamily: 'Roboto Serif, serif',
              color: '#555555',
            },
          },
        },
        series: [
          {
            type: 'bar',
            xKey: 'city',
            yKey: 'revenue',
            fill: '#f5b800',
            tooltip: {
              enabled: false  
            },
            label: {
              enabled: true,
              fontSize: 12,
              fontFamily: 'Roboto Serif, serif',
              formatter: ({ value }) =>
                new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: 'INR',
                  maximumFractionDigits: 0,
                }).format(value),
            },
          },
          {
            type:'line',
            xKey: 'city',
            yKey: 'profit',
            stroke: '#ff0000',  
            strokeWidth: 2,
            marker: {
              shape: 'circle',
              size: 6,
              fill: '#ff0000',
            },
            tooltip: {
              enabled: true
            },
          }
        ],
      }}
    />
  );
};
