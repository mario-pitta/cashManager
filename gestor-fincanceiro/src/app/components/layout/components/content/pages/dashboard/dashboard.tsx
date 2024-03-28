import styles from './dashboard.module.css'

export interface DashboardPageProps {
    prop?: string
}


export function  DashboardPage({ prop = "DashboardPage Works" }: DashboardPageProps) {
    return (<span>{`${prop}`}</span>)
}