const moment = require("moment");
const LogMessage = (msg, type) => {
  let currentDateTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  switch (type) {
    case "info":

      console.log(currentDateTime + " ::" + msg);
      break;
      case "separator":
      console.log("________________________________________________________________");
      break    
  }
};
LogMessage("","separator")
LogMessage("This is awesome ", "info");
LogMessage("","separator")

export default LogMessage
