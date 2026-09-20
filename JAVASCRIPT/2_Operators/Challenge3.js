let userName = "ChetanThakor";
let password = "Charvi@143";

if (userName || password) {
  if (userName) {
    if (password) {
      if (userName === "ChetanThakor") {
        if (password === "Charvi@143") {
          console.log("Login Success full.");
        } else {
          console.log("Please Enter Correct Password...");
        }
      } else {
        console.log("Please Enter Correct Username...");
      }
    }else{
    console.log("Please Enter your Password...");
    }
  } else {
    console.log("Please Enter your Username...");
  }
} else {
  console.log("Username and Password Required...");
}

if((userName && password ) && (userName === "ChetanThakor") && (password === "Charvi@143")){
          console.log("Login Success full.");
}else{
    console.log("  hi")
}
