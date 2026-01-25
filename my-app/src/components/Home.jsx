import TopNavBar from "./TopNavBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { ComboChart } from "./ComboChart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { LineChart } from "./LineChart";
import { TopSaledMango } from "./TopSaledMango";
import { rowData } from "./data";

export const Home = () => {
    return (
        <>
            <TopNavBar />
            <Breadcrumbs aria-label="breadcrumb" sx={{ margin: '16px 0 0 16px' }}>
                <Typography sx={{
                    fontSize: '12px',
                    fontFamily: 'Roboto Serif, serif',
                    fontWeight: '500',
                    color: '#555555',
                }}>
                    Home / Mango Sales Dashboard
                </Typography>
            </Breadcrumbs>
            <Grid container spacing={5} sx={{ padding: '16px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}>
                        <LineChart rowData={rowData} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}>
                        <ComboChart rowData={rowData} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3}>
                        <TopSaledMango rowData={rowData} />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};
