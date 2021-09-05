import React from 'react'


const InventoryList = ({total}) => {

    return(
        <>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            {total.map(item => (
                <tr>
                    <td>{item.productName}</td><td>Php {parseFloat(item.amount).toFixed(2)}</td>      
                </tr>
            ))}
            </table>
        
        </>
    )
}

export default InventoryList