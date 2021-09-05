import React from 'react'
import {Button, Box, TextField} from '@material-ui/core';

const InventoryForm = ({productName, amount, handleName, handleAmount, handleSubmit, handleDelete}) => {


    return(
        <>
            <form>
                <TextField variant="outlined" label="Product Name" value={productName} onChange={handleName} style={{padding:'.5em'}}/>
                <TextField variant="outlined" label="Amount" value={amount} onChange={handleName} onChange={handleAmount} placeholder='0.00' style={{padding:'.5em'}}/>
               
                
                <Box m={2}>
                    <Button style={{margin:'.5em'}} variant="contained" color="primary" type='submit' onClick={handleSubmit}>
                    Add to Cart
                    </Button>
                    <Button  style={{margin:'.5em'}} variant="contained" color="secondary" type='submit' onClick={handleDelete}>
                    Delete
                    </Button>
                </Box>
                
            </form>        
        </>
    )
}

export default InventoryForm