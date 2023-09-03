import { FC } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const Block: FC = () => {
  const { id } = useParams();

  return (
    <>
      <Box component="main">
        <Container maxWidth="xl">
          <Grid container spacing={4} pt={4}>
            <Grid item xs={12}>
              Block ID = {id}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Block;
