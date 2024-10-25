import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { RegisterAndLoginLayout } from "../layouts/RegisterAndLoginLayout";
import RegisterStudent from "../pages/studentRegister";
import EnterpriseRegister from "../pages/enterpriseRegister";
import Login from "../pages/login";


const SystemRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

    ],
  },
  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/register',
    element: <RegisterAndLoginLayout />,
    children: [
      {
        path: 'student',
        element: <RegisterStudent />
      },
      {
        path: 'enterprise',
        element: <EnterpriseRegister />
      }
    ]

  }
]);

export default SystemRoutes;