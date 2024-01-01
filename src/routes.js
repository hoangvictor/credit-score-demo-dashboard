import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdFireExtinguisher,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Prediction from "views/admin/prediction";

const routes = [
  {
    name: "Credit Information",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Loan Chance",
    layout: "/admin",
    path: "/prediction",
    icon: (
      <Icon
        as={MdFireExtinguisher}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Prediction,
    secondary: true,
  },
];

export default routes;
