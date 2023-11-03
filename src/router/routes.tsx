import { createBrowserRouter } from "react-router-dom";
import Dashboardhome from "../Pages/Dashboardhome";
import { DashboardLayout } from "../components";
import Signin from "../Pages/Auth/Signin";
import Optionpage from "../Pages/Optionpage";
import Branches from "../Pages/Branches/Branches";
import Addbranch from "../Pages/Branches/Addbranch";
import Bookingshome from "../Pages/Bookings/Bookingshome";
import Addbooking from "../Pages/Bookings/Addbooking"
import Allrooms from "../Pages/Rooms/Allrooms";
import Roomtypes from "../Pages/Rooms/Roomtypes";
import Addroomtype from "../Pages/Rooms/Addroomtype";
import Addroom from "../Pages/Rooms/Addroom";
import Reserverdbooking from "../Pages/Bookings/Reserverdbooking";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Signin />
    },
    {
        path: "/options",
        element: <Optionpage />
    },
    {
        path: "/admin",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboardhome />
            },
            {
                path: "/admin/branches",
                element: <Branches />
            },
            {
                path: "/admin/addbranch",
                element: <Addbranch />
            },
            {
                path: "/admin/bookings",
                element: <Bookingshome />
            },
            {
                path: "/admin/addbooking",
                element: <Addbooking />
            },
            {
                path: "/admin/reserved-booking",
                element: <Reserverdbooking />
            },
            {
                path: "/admin/rooms",
                element: <Allrooms />
            },
            {
                path: "/admin/roomtypes",
                element: <Roomtypes />
            },
            {
                path: "/admin/addroomtype",
                element: <Addroomtype />
            },
            {
                path: "/admin/addroom",
                element: <Addroom />
            }
        ]
    }
])