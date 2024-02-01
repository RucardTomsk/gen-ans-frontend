import { FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Input, Typography} from "antd";
import React from "react";
import {TextAreaProps} from "antd/lib/input";

export type ITextAreaControlProps<T extends FieldValues> =
    UseControllerProps<T> & Omit<TextAreaProps, "value" | "defaultValue">;


function TextAreaControl <T extends FieldValues>({
         name,
         control,
         defaultValue,
         rules,
         shouldUnregister,
         onChange,
         ...props
     }: ITextAreaControlProps<T>) {
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
            {
           <Input.TextArea
                    value={value}
                    onChange={(value) => fieldOnChange(value)}
                    status={fieldState.error?.message ? "error" : undefined}
                    {...field}
                    {...props}
                />
            }
            <Typography.Text type="danger" style={{whiteSpace: "normal"}}>{fieldState.error?.message}</Typography.Text>
        </span>
    );
}

export default TextAreaControl