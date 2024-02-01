export default interface AvailableFeatures {
    points: {
        id: string,
        name: string,
        color: string,
        icon: string
    }[],
    lines: {
        id: string,
        name: string,
        color: string,
        lineType: string,
        icon: string
    }[],
    polygons: {
        id: string,
        name: string,
        color: string,
        icon: string
    }[]
}