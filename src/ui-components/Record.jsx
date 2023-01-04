/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  Heading,
  SelectField,
  SwitchField,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
export default function Record(props) {
  const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } =
    props;
  const { tokens } = useTheme();
  const initialValues = {
    Record: {},
  };
  const [Record, setRecord] = React.useState(initialValues.Record);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRecord(initialValues.Record);
    setErrors({});
  };
  const validations = {
    "Record.done": [],
    "Record.effort": [],
    "Record.billing_month": [],
    "Record.customer": [],
    "Record.title": [],
    "Record.netto": [],
    "Record.date": [{ type: "Required" }],
    "Record.duration": [],
    "Record.note": [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Record,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...rest}
      {...getOverrideProps(overrides, "Record")}
    >
      <Heading
        level={3}
        children="Record"
        {...getOverrideProps(overrides, "Record")}
      ></Heading>
      <SwitchField
        label="Done"
        defaultChecked={false}
        isChecked={Record}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, done: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.done ?? value;
          }
          if (errors["Record.done"]?.hasError) {
            runValidationTasks("Record.done", value);
          }
          setRecord({ ...Record, done: value });
        }}
        onBlur={() => runValidationTasks("Record.done", Record["done"])}
        errorMessage={errors["Record.done"]?.errorMessage}
        hasError={errors["Record.done"]?.hasError}
        {...getOverrideProps(overrides, "Record.done")}
      ></SwitchField>
      <SelectField
        label="Effort"
        placeholder="Please select an option"
        value={Record}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, effort: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.effort ?? value;
          }
          if (errors["Record.effort"]?.hasError) {
            runValidationTasks("Record.effort", value);
          }
          setRecord({ ...Record, effort: value });
        }}
        onBlur={() => runValidationTasks("Record.effort", Record["effort"])}
        errorMessage={errors["Record.effort"]?.errorMessage}
        hasError={errors["Record.effort"]?.hasError}
        {...getOverrideProps(overrides, "Record.effort")}
      >
        <option
          children="Workshop"
          value="Workshop"
          {...getOverrideProps(overrides, "Record.effortoption0")}
        ></option>
        <option
          children="Coaching"
          value="Coaching"
          {...getOverrideProps(overrides, "Record.effortoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Billing month"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, billing_month: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.billing_month ?? value;
          }
          if (errors["Record.billing_month"]?.hasError) {
            runValidationTasks("Record.billing_month", value);
          }
          setRecord({ ...Record, billing_month: value });
        }}
        onBlur={() =>
          runValidationTasks("Record.billing_month", Record["billing_month"])
        }
        errorMessage={errors["Record.billing_month"]?.errorMessage}
        hasError={errors["Record.billing_month"]?.hasError}
        {...getOverrideProps(overrides, "Record.billing_month")}
      ></TextField>
      <TextField
        label="Customer"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, customer: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.customer ?? value;
          }
          if (errors["Record.customer"]?.hasError) {
            runValidationTasks("Record.customer", value);
          }
          setRecord({ ...Record, customer: value });
        }}
        onBlur={() => runValidationTasks("Record.customer", Record["customer"])}
        errorMessage={errors["Record.customer"]?.errorMessage}
        hasError={errors["Record.customer"]?.hasError}
        {...getOverrideProps(overrides, "Record.customer")}
      ></TextField>
      <TextField
        label="Title"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, title: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.title ?? value;
          }
          if (errors["Record.title"]?.hasError) {
            runValidationTasks("Record.title", value);
          }
          setRecord({ ...Record, title: value });
        }}
        onBlur={() => runValidationTasks("Record.title", Record["title"])}
        errorMessage={errors["Record.title"]?.errorMessage}
        hasError={errors["Record.title"]?.hasError}
        {...getOverrideProps(overrides, "Record.title")}
      ></TextField>
      <TextField
        label="Netto"
        placeholder="0.0"
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, netto: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.netto ?? value;
          }
          if (errors["Record.netto"]?.hasError) {
            runValidationTasks("Record.netto", value);
          }
          setRecord({ ...Record, netto: value });
        }}
        onBlur={() => runValidationTasks("Record.netto", Record["netto"])}
        errorMessage={errors["Record.netto"]?.errorMessage}
        hasError={errors["Record.netto"]?.hasError}
        {...getOverrideProps(overrides, "Record.netto")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, date: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.date ?? value;
          }
          if (errors["Record.date"]?.hasError) {
            runValidationTasks("Record.date", value);
          }
          setRecord({ ...Record, date: value });
        }}
        onBlur={() => runValidationTasks("Record.date", Record["date"])}
        errorMessage={errors["Record.date"]?.errorMessage}
        hasError={errors["Record.date"]?.hasError}
        {...getOverrideProps(overrides, "Record.date")}
      ></TextField>
      <TextField
        label="Duration"
        placeholder="0.0"
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, duration: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.duration ?? value;
          }
          if (errors["Record.duration"]?.hasError) {
            runValidationTasks("Record.duration", value);
          }
          setRecord({ ...Record, duration: value });
        }}
        onBlur={() => runValidationTasks("Record.duration", Record["duration"])}
        errorMessage={errors["Record.duration"]?.errorMessage}
        hasError={errors["Record.duration"]?.hasError}
        {...getOverrideProps(overrides, "Record.duration")}
      ></TextField>
      <TextAreaField
        label="Note"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Record: { ...Record, note: value },
            };
            const result = onChange(modelFields);
            value = result?.Record?.note ?? value;
          }
          if (errors["Record.note"]?.hasError) {
            runValidationTasks("Record.note", value);
          }
          setRecord({ ...Record, note: value });
        }}
        onBlur={() => runValidationTasks("Record.note", Record["note"])}
        errorMessage={errors["Record.note"]?.errorMessage}
        hasError={errors["Record.note"]?.hasError}
        {...getOverrideProps(overrides, "Record.note")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
