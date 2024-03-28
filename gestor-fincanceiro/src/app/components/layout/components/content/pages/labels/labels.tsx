export interface LabelPageProps{
    prop?: string;
}


export function LabelPage({prop = "LabelsPage Works"}: LabelPageProps) {
    return (
        <span>{prop}</span>
    )
}