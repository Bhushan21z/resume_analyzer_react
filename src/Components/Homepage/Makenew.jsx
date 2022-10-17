import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "../Footer";
import Appbar from "../Appbar";
import { Divider, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const steps = [
  "Personal",
  "Education",
  "Experience",
  "Skills",
  "Projects",
  "Certifications",
  "Achievements",
  "References",
];

export default function Makenew() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 7;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          padding: "5%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Grid
          sx={{
            padding: "2%",
            // backgroundColor: "#809bce",
            borderRadius: "10px",
            border: "1px solid #809bce",
          }}
        >
          <Stepper
            activeStep={activeStep}
            sx={{
              borderRadius: "10px",
              marginBottom: "2%",
            }}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Divider />
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography
                sx={{
                  mt: 2,
                  mb: 1,
                  // backgroundColor: "#809bce",
                  borderRadius: "10px",
                  // border: "1px solid #809bce",
                  padding: "2%",
                }}
              >
                Step {activeStep + 1}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    mr: 1,
                    backgroundColor: "white",
                    color: "#1982c4",
                    border: "1px solid #1982c4",

                    "&:hover": {
                      backgroundColor: "#1982c4",
                      color: "white",
                    },
                  }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? (
                    "Finish"
                  ) : (
                    <Typography
                      sx={{
                        color: "#1982c4",
                      }}
                    >
                      Next
                      <ArrowForwardIosIcon
                        sx={{
                          fontSize: "small",
                          color: "#1982c4",
                        }}
                      />
                    </Typography>
                  )}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Grid>
      </Box>
    </div>
  );
}
