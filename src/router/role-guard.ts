/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  console.log(to, from, next);

  const userRole = localStorage.getItem("userRole");

  if (userRole === "Admin") {
    // queremos navegar!
    next();
  } else {
    alert("Login required");
    next({ name: "home" });
  }
};

export default haveRoleGuard;
