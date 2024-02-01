import { FieldValues, useController, UseControllerProps} from "react-hook-form";
import {DatePickerProps} from "antd/es/date-picker";
import {DatePicker, Typography} from "antd";
import dayjs from "dayjs";
import React from "react";

export type DatePickerControlProps<T extends FieldValues> =
    UseControllerProps<T> & Omit<DatePickerProps, "value" | "defaultValue">;

function DatePickerControl<T extends FieldValues>({
          name,
          control,
          defaultValue,
          rules,
          shouldUnregister,
          onChange,
          ...props
      }: DatePickerControlProps<T>) {
    const {
        field: { value, onChange: fieldOnChange, onBlur, ...field },
        fieldState,
    } = useController<T>({
        name,
        control,
        defaultValue,
        rules,
        shouldUnregister,
    });

    return (
        <span className={"flex flex-col w-full"}>
            <DatePicker
                value={value ? dayjs(value) : null}
                onChange={(_, dateString) => fieldOnChange(toISOString(dateString))}
                status={fieldState.error?.message ? "error" : undefined}
                onBlur={onBlur}
                {...field}
                {...props}
            />
            <Typography.Text type="danger" style={{whiteSpace: "normal"}}>{fieldState.error?.message}</Typography.Text>
        </span>
    );
}

function toISOString(string: string | null): string | null{
    if (!string) return null;
    else if (string.split("-").length === 1) return string + "-01-01T00:00:00.000Z";
    else if (string.split("-").length === 2) return string + "-01T00:00:00.000Z";
    return string + "T00:00:00.000Z";
}

export default DatePickerControl