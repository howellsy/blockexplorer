import { FC, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { useAlchemy } from '../../particles/AlchemyProvider';

const Dashboard: FC = () => {
  const { alchemySdk } = useAlchemy();
  
  const [blockNumber, setBlockNumber] = useState<number>();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemySdk.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
    <>
      <Box
        component="main"
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              {blockNumber}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              Other content goes here
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
