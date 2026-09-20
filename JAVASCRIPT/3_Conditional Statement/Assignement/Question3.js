let userRole = "Viewer";

switch (userRole) {
  case "Admin":
    console.log("Full Access.");
    break;
  case "Editor":
    console.log("Edit Access.");
    break;
  case "Viewer":
    console.log("Read  Only Access.");
    break;
  default:
    console.log("No Access.");
}
