import { RegisterPage } from './pages/public/register/register.page'
import{ LoginPage } from './pages/public/login/login.page'
import{ NotFound } from './pages/public/notFound/notFound.page'
import { DashboardPage } from './pages/private/dashboard/dashboard.page'
import { CreateFlightsPage } from './pages/private/create-flights/createFlights.page'
import { EditFlightsPage } from './pages/private/edit-flights/editFlights.page'

export const routes = {
    public:[
        {path: '/', page:RegisterPage},
        {path: '/login', page:LoginPage},
        {path:'/not-found', page: NotFound}
    ],
    private:[
        {path:'/dashboard', page:DashboardPage},
        {path: '/dashboard/flights/create', page:CreateFlightsPage},
        {path:'/dashboard/flights/edit', page:EditFlightsPage}
    ]
}