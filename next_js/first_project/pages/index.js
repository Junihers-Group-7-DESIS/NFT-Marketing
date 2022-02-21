import {Box} from "@material-ui/core"
import Header from "../components/header.js"
import Collections from "../components/Collections.js"
import Info from "../components/Info.js";
import Design from "../components/design.js";

const Index = () => {

  return(
    <Box>
      <Box sx={{ backgroundColor:'#F7FFFE', margin:'-0.4%'}}>
        <Box sx={{ backgroundColor:'#F7FFFE', margin:'-0.4%', marginRight:'-0.1%', marginBottom:'-2%'}}>
        <Header page={1}/>
        <Collections title='NFT Collections' />
        <Info title='random'/>
        <Design/>
        </Box>
      </Box>
    </Box>
)}
  
export default Index;