import { AgCharts } from 'ag-charts-react';
import 'ag-charts-enterprise';
import { AllEnterpriseModule, ModuleRegistry } from 'ag-charts-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule]);

export const LineChart = ({ rowData }) => {
  const aggregatedData = rowData.reduce((acc, curr) => {
    const year = curr.year;
    const revenue = curr.revenue;
    const profit = curr.profit;
    const existingEntry = acc.find(item => item.year === year);
    if (existingEntry) {
      existingEntry.revenue += revenue;
      existingEntry.profit += profit;
    } else {
      acc.push({ year, revenue, profit });
    }
    return acc;
  }, []);

  return (
    <AgCharts
      options={{
        data: aggregatedData,
        contextMenu: {
          enabled: false
        },
        title: {
          text: 'Revenue vs Profit by Year',
          fontSize: 12,
          fontFamily: 'Roboto Serif, serif',

        },
        width: 400,
        height: 320,
        axes:{
          x: {
            type: 'category',
            title: {
              text: 'Year',
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
            type:'line',
            xKey: 'year',
            yKey: 'revenue',
         },
         {
            type:'line',
            xKey: 'year',
            yKey: 'profit',
         }
        ],

      }}
    />
  );
};
