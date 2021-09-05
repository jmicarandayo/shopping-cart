import React,{useState, useEffect} from 'react'
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';


const retrieveData = localStorage.getItem('inventory')? JSON.parse(localStorage.getItem('inventory')) : [];


function InventoryTracker() {
    const [productName, setProductName] = useState('');
    const [amount, setAmount] = useState();
    const [total, setTotal] = useState(retrieveData);
    const handleName = (e) => {
        setProductName(e.target.value);
    } 
    const handleAmount = (e) => {
        setAmount(e.target.value);
    } 
    const handleDelete = () => {
        setTotal([]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(productName !== '' && amount > 0){
            const product = {productName, amount};
            setTotal([...total, product])
            setProductName('');
            setAmount(0);
        } else {
            alert('Invalid Name and Amount!')
        }
    }
    useEffect(() => {
        localStorage.setItem('inventory', JSON.stringify(total))
    }, [total]);

    return(
        <>
            <h1 className='title-header'>Product Information</h1>
            <InventoryForm 
            productName={productName}
            amount={amount}
            handleName={handleName}
            handleAmount= {handleAmount}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}/>
            
            <InventoryList 
            total={total}/>

            <label className='total-display'><span>Total</span>: Php {(total.reduce((accumulator, currentValue) => (
                accumulator += parseFloat(currentValue.amount)
            ),0)).toFixed(2)}</label>
        </>
    )
}


export default InventoryTracker