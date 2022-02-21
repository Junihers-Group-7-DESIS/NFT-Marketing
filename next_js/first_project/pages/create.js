import {Box} from "@material-ui/core"
import Header from "../components/header.js"
import Form from "../components/form.js"

const Create = () => (
    <Box>
        <Box sx={{ backgroundColor:'#FFFFFF', margin:'-0.4%', marginRight:'-0.3%'}}>
            <Header page={2}/>
            <Form/>
        </Box>
    </Box>
)
  
export default Create;