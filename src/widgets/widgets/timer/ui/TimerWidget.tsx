import React from "react";
import {Typography} from "antd";
import WidgetCard from "../../../ui/WidgetCard.tsx";

interface Props {
    onClose?(): void
}
const TimerWidget: React.FC<Props> = ({onClose}) => {

    const time = [
        {
            name: "Дни",
            value: 2
        },
        {
            name: "Часы",
            value: 15
        },
        {
            name: "Минуты",
            value: 48
        },
        {
            name: "Секунды",
            value: 32
        },
    ]

    return (
        <WidgetCard
            onClose={onClose}
            title={<Typography.Text strong>{"Таймер"}</Typography.Text>}
        >
            <div className={"flex pb-3 px-4 justify-center"}>
                {
                    time.map((it, index) =>
                        <TimeUnit
                            name={it.name}
                            value={it.value}
                            key={it.name}
                            lastUnit={index === time.length - 1}
                        />
                    )
                }
            </div>
        </WidgetCard>
    )
}

interface TimeUnitProps {
    name: string,
    value: number,
    lastUnit: boolean
}
const TimeUnit: React.FC<TimeUnitProps> = ({
        name,
        value,
        lastUnit
    }) => {

    return (
        <>
            <span className={"flex flex-col items-center w-14"}>
                <Typography.Text strong className={"text-2xl"}>{value > 9 ? value : `0${value}`}</Typography.Text>
                <Typography.Text type={"secondary"} className={"text-xs"}>{name}</Typography.Text>
            </span>
            {
                !lastUnit &&
                <Typography.Text strong className={"text-2xl"}>{":"}</Typography.Text>
            }
        </>

    )
}

export default TimerWidget