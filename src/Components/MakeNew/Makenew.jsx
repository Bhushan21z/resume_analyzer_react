import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@mui/material";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Exp";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";
import References from "./References";
import Certificates from "./Certificates";
import GradingIcon from "@mui/icons-material/Grading";
const steps = [
  {
    label: "Personal",
    content: <Personal />,
  },
  {
    label: "Education",
    content: <Education />,
  },
  {
    label: "Experience",
    content: <Experience />,
  },
  {
    label: "Skills",
    content: <Skills />,
  },
  {
    label: "Projects",
    content: <Projects />,
  },
  {
    label: "Certifications",
    content: <Certificates />,
  },
  {
    label: "Achievements",
    content: <Achievements />,
  },
  {
    label: "References",
    content: <References />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "5%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#000",
          textAlign: "center",
          marginBottom: "3%",
        }}
      >
        <GradingIcon
          sx={{
            fontSize: "3rem",
            color: "#000",
            marginRight: "10px",
          }}
        />
        Resume Builder
      </Typography>

      <Grid
        sx={{
          padding: "2%",
          // backgroundColor: "#809bce",
          borderRadius: "10px",
          border: "1px solid #809bce",
        }}
      >
        {/* <Box sx={{ maxWidth: 400 }}> */}
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 7 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.content}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Grid>
    </Box>
  );
}
