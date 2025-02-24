import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import '../Styles/welcomePage.css';

export function ContainedButton() {
  return (
    <Stack className='button-stack'>
      <Button variant="contained" startIcon={<DeleteIcon />} className='contained-button'>
        Add Product
      </Button>
      <Button variant="contained" className='contained-button'>
        See All Available Products
      </Button>
    </Stack>
  );
}
