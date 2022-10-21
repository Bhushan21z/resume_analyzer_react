import React from "react";
import { Divider, Grid } from "@mui/material";
import { PieChart } from "recharts";
import { Pie } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

const Analysis = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          backgroundColor: "#00ABF3",
          justifyContent: "center",
          alignItems: "center",
          padding: "1% 3%",
        }}
      >
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            padding: "2%",
            backgroundColor: "white",
            height: "auto",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          }}
        >
          <Grid item xs={12}>
            <h1>Analysis</h1>
            <p>Analysis of your resume</p>
            <Divider />
          </Grid>

          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              padding: "1%",
            }}
          >
            <Grid item xs={4}>
              <PieChart width={500} height={250}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  outerRadius={100}
                  fill="#8884d8"
                />
              </PieChart>
            </Grid>
            <Grid item xs={8}>
              <h1>Overall</h1>
              <p>Overall analysis of your resume</p>
              <p>
                Zoe delivers parcels around London for DHL. She’s working on a
                fixed contract. Completing deliveries is a priority as a porter,
                but no day is the same on the roads. Zoe’s time is often limited
                to take any sort of breaks.
              </p>
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              padding: "1%",
            }}
          >
            <Grid item xs={4}>
              <PieChart width={500} height={250}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  outerRadius={100}
                  fill="#8884d8"
                />
              </PieChart>
            </Grid>
            <Grid item xs={8}>
              <h1>Overall</h1>
              <p>Overall analysis of your resume</p>
              <p>
                Zoe delivers parcels around London for DHL. She’s working on a
                fixed contract. Completing deliveries is a priority as a porter,
                but no day is the same on the roads. Zoe’s time is often limited
                to take any sort of breaks.
              </p>
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              padding: "1%",
            }}
          >
            <Grid item xs={4}>
              <PieChart width={500} height={250}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  outerRadius={100}
                  fill="#8884d8"
                />
              </PieChart>
            </Grid>
            <Grid item xs={8}>
              <h1>Overall</h1>
              <p>Overall analysis of your resume</p>
              <p>
                Zoe delivers parcels around London for DHL. She’s working on a
                fixed contract. Completing deliveries is a priority as a porter,
                but no day is the same on the roads. Zoe’s time is often limited
                to take any sort of breaks.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analysis;
