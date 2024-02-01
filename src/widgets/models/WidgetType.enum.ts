export enum Widget {
    Map,
    Chat,
    Documents,
    Timer,
    Null
}

export type WidgetType =
    typeof Widget.Map |
    typeof Widget.Chat |
    typeof Widget.Documents |
    typeof Widget.Timer |
    typeof Widget.Null