import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


interface VariantButtonGroupProps {
    path1: string;
    buttonMessage1?: string;
    path2: string;
    buttonMessage2?: string;
}


export default function VariantButtonGroup({ path1,buttonMessage1,path2,buttonMessage2 }: VariantButtonGroupProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Link to={path1}>
             <Button>{buttonMessage1}</Button>
        </Link>
        <Link to={path2}>
             <Button>{buttonMessage2}</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}