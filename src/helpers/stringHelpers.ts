import {FULL_MONTHS_NAMES, SHORT_MONTHS_NAMES} from "../constants/monthsNames.ts";

export function convertNumberPriceToNormalString(price?: number): string {
    if (price === undefined) return  "- ₽"
    return `${price.toLocaleString()} ₽`
}

// Converts a string "2000-01-01T00:00:00.000" to "1 January 2000 y." | "January 2000 y." | "2000 y."

type Format = "DAY_MONTH_YEAR" | "MONTH_YEAR" | "YEAR" | "MONTH" | undefined;
type LENGTH = "full" | "short";

export function convertDateStringToNormalString(string: string | undefined, format?: Format, length: LENGTH = "full"): string | undefined {
    if (!string) return undefined;
    const date = new Date(Date.parse(string.replace("T", " ").slice(0, -1)));
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = length === "full" ? FULL_MONTHS_NAMES[monthIndex] : SHORT_MONTHS_NAMES[monthIndex];
    const year = date.getFullYear();

    switch (format) {
        case "DAY_MONTH_YEAR":
            return `${day} ${month} ${year}`
        case "MONTH_YEAR":
            return `${month} ${year}`
        case "YEAR":
            return `${year}`
        case "MONTH":
            return `${month}`
        default:
            return `${day} ${month} ${year}`
    }
}