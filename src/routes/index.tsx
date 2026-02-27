import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <Link to="/$locale" params={{ locale: 'en-US' }}>English (US)</Link>
        <Link to="/$locale" params={{ locale: 'en-GB' }}>English (UK)</Link>
        <Link to="/$locale" params={{ locale: 'tr-TR' }}>Türkçe</Link>
    </div>
}
