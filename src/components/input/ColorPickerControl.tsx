import { FieldValues, useController, UseControllerProps} from "react-hook-form";
import {ColorPicker, ColorPickerProps, Typography} from "antd";
import React from "react";

export type InputNumberControlProps<T extends FieldValues> =
    UseControllerProps<T> & Omit<ColorPickerProps, "value" | "defaultValue">;

function ColorPickerControl<T extends FieldValues>({
                                                       name,
                                                       control,
                                                       defaultValue,
                                                       rules,
                                                       shouldUnregister,
                                                       onChange,
                                                       ...props
                                                   }: InputNumberControlProps<T>) {
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
            <ColorPicker
                value={value}
                onChange={(value) => fieldOnChange(value.toRgbString())}
                {...field}
                {...props}
            />
            <Typography.Text type="danger" style={{whiteSpace: "normal"}}>{fieldState.error?.message}</Typography.Text>
        </span>
    );
}

export default ColorPickerControl