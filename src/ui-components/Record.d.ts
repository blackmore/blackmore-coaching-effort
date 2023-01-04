/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, HeadingProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecordInputValues = {
    Record?: {
        done?: boolean;
        effort?: string;
        billing_month?: string;
        customer?: string;
        title?: string;
        netto?: string;
        date?: string;
        duration?: string;
        note?: string;
    };
};
export declare type RecordValidationValues = {
    Record?: {
        done?: ValidationFunction<boolean>;
        effort?: ValidationFunction<string>;
        billing_month?: ValidationFunction<string>;
        customer?: ValidationFunction<string>;
        title?: ValidationFunction<string>;
        netto?: ValidationFunction<string>;
        date?: ValidationFunction<string>;
        duration?: ValidationFunction<string>;
        note?: ValidationFunction<string>;
    };
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordOverridesProps = {
    RecordGrid?: FormProps<GridProps>;
    Record?: FormProps<HeadingProps>;
    "Record.done"?: FormProps<SwitchFieldProps>;
    "Record.effort"?: FormProps<SelectFieldProps>;
    "Record.billing_month"?: FormProps<TextFieldProps>;
    "Record.customer"?: FormProps<TextFieldProps>;
    "Record.title"?: FormProps<TextFieldProps>;
    "Record.netto"?: FormProps<TextFieldProps>;
    "Record.date"?: FormProps<TextFieldProps>;
    "Record.duration"?: FormProps<TextFieldProps>;
    "Record.note"?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type RecordProps = React.PropsWithChildren<{
    overrides?: RecordOverridesProps | undefined | null;
} & {
    onSubmit: (fields: RecordInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: RecordInputValues) => RecordInputValues;
    onValidate?: RecordValidationValues;
} & React.CSSProperties>;
export default function Record(props: RecordProps): React.ReactElement;
