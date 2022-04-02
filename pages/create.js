import { Box } from '@material-ui/core'
import Header from '../components/header.js'
import Form from '../components/form.js'

const Create = () => {

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          margin: '-0.4%',
          marginRight: '-0.3%',
        }}
      >
        <Header page={2} />
        <Form />
      </Box>
    </Box>
  )
}

//allow users to create and save items in ipfs

export default Create
