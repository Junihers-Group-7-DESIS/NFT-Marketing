import {Box} from "@material-ui/core"
import Header from "../components/header.js"
import Collections from "../components/Collections.js"
import Design from "../components/design.js";

const Dashboard = () => {

  return(
    <Box>
      <Box sx={{ backgroundColor:'#F7FFFE', margin:'-0.4%'}}>
        <Box sx={{ backgroundColor:'#F7FFFE', margin:'-0.4%', marginRight:'-0.3%', marginBottom:'-2%'}}>
            <Header page={4}/>
            <Collections title='Dashboard' />
        <Design/>
        </Box>
      </Box>
    </Box>
)}
  
export default Dashboard;