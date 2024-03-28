import styles from './calendary.module.css'

export interface CalendaryPageProps {
    prop?: string
}


export function  CalendaryPage({ prop = "CalendaryPage Works" }: CalendaryPageProps) {
    return (<span>{`${prop}`}</span>)
}