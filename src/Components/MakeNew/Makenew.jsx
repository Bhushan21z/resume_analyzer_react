import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Grid,
} from "@mui/material";
import GradingIcon from "@mui/icons-material/Grading";
import { useForm, FormProvider } from "react-hook-form";
import Personal from "./AllPages/Personal";
import Education from "./AllPages/Education";
import WorkExp from "./AllPages/WorkExp";
import Achievements from "./AllPages/Achievements";

function getSteps() {
  return [
    "Personal Information",
    "Education Information",
    "Work Experience",
    "Achievements",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Personal />;
    case 1:
      return <Education />;
    case 2:
      return <WorkExp />;
    case 3:
      return <Achievements />;
    default:
      return "unknown step";
  }
}

const Makenew = () => {
  // const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      Email: "",
      Address: "",
      Phone: "",
      College: "",
      Branch: "",
      Linkedin: "",
      Github: "",
      Company1: "",
      JobDesc1: "",
      Company2: "",
      JobDesc2: "",
      Achievement1: "",
      Achievemetdesc1: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
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
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ display: "block" }}
                  >
                    optional
                  </Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <Typography variant="h3" align="center">
              Thank You
            </Typography>
          ) : (
            <>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                  {getStepContent(activeStep)}

                  <Button
                    // className={classes.button}
                    sx={{ mr: 1 }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    back
                  </Button>
                  {isStepOptional(activeStep) && (
                    <Button
                      // className={classes.button}
                      sx={{ mr: 1 }}
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                    >
                      skip
                    </Button>
                  )}
                  <Button
                    // className={classes.button}
                    sx={{ mr: 1 }}
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </form>
              </FormProvider>
            </>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Makenew;
