// ** Layout Import
import BlankLayout from '@/DashboardComponents/@core/layouts/BlankLayout';

// ** Component Import
import Error404 from '@/pages/Dashboard/pages/404'

const ErrorPage = () => <Error404 />
ErrorPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ErrorPage