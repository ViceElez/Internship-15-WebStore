import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import '../Styles/welcomePage.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export function ContainedButton() {
  return (
    <Stack className='button-stack'>
        <Link to="/add-product">
            <Button variant="contained" startIcon={<DeleteIcon />} className='contained-button'>
                Add Product
            </Button>
        </Link>
        
        <Link to="/products">
            <Button variant="contained" className='contained-button'>
                See All Available Products
            </Button>
        </Link>
    </Stack>
  );
}
