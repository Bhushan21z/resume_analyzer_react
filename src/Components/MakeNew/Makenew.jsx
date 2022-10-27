import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
// import makeStyles from "@mui/styles/makeStyles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));

function getSteps() {
  return [
    "Personal Information",
    "Education Information",
    "Work Experience",
    "Achievements",
  ];
}
const PersonalFrom = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Email"
        render={({ field }) => (
          <TextField
            id="email"
            label="EmailId"
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Address"
        render={({ field }) => (
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Adress"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Phone"
        render={({ field }) => (
          <TextField
            id="phone"
            label="PhoneNumber"
            variant="outlined"
            placeholder="Enter Your Mobile Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const EducationFrom = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="College"
        render={({ field }) => (
          <TextField
            id="college"
            label="College"
            variant="outlined"
            placeholder="Enter Your College Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Branch"
        render={({ field }) => (
          <TextField
            id="branch"
            label="Branch"
            variant="outlined"
            placeholder="Enter Your Branch"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Linkedin"
        render={({ field }) => (
          <TextField
            id="linkedin"
            label="Linkedin"
            variant="outlined"
            placeholder="Enter Your LinkedIn Id"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Github"
        render={({ field }) => (
          <TextField
            id="github"
            label="Github"
            variant="outlined"
            placeholder="Enter Your Github Id"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      
    </>
  );
};
const WorkFrom = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="Company1"
        render={({ field }) => (
          <TextField
            id="company1"
            label="Company1"
            variant="outlined"
            placeholder="Enter Company Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="JobDesc1"
        render={({ field }) => (
          <TextField
            id="jobdesc1"
            label="JobDesc1"
            variant="outlined"
            placeholder="Specify Job Description"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Company2"
        render={({ field }) => (
          <TextField
            id="company2"
            label="Company2"
            variant="outlined"
            placeholder="Enter Company Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="JobDesc2"
        render={({ field }) => (
          <TextField
            id="jobdesc2"
            label="JobDesc2"
            variant="outlined"
            placeholder="Specify Job Description"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const AchievementFrom = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="Achievement1"
        render={({ field }) => (
          <TextField
            id="achievement1"
            label="Achievement1"
            variant="outlined"
            placeholder="Enter Your Achievement"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Achievemetdesc1"
        render={({ field }) => (
          <TextField
            id="achievementdesc1"
            label="Achievemetdesc1"
            variant="outlined"
            placeholder="Achievement Description"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalFrom />;

    case 1:
      return <EducationFrom />;
    case 2:
      return <WorkFrom />;
    case 3:
      return <AchievementFrom />;
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
      Email:"",
      Address:"",
      Phone:"",
      College:"",
      Branch:"",
      Linkedin:"",
      Github:"",
      Company1:"",
      JobDesc1:"",
      Company2:"",
      JobDesc2:"",
      Achievement1:"",
      Achievemetdesc1:"",
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
    if (activeStep == steps.length - 1) {
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
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                // className={classes.button}
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
    </div>
  );
};

export default Makenew;
