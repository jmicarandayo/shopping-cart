import React from 'react'
import {Container} from '@material-ui/core';
import InventoryTracker from './InventoryTracker'

export const Main = () => {
    return (
        <div>
            <Container fixed align='center' style={{marginTop:'8em'}}>
                <InventoryTracker />
            </Container>
        </div>
    )
}
