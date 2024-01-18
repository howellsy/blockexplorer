import { FC, useEffect } from 'react';
import { Box, Container, Grid } from '../../atoms';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchBlockDetails } from '../../../services/block';
import { BlockDetails } from '../../organisms/BlockDetails';

const Block: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;
    dispatch(fetchBlockDetails(parseInt(id)));
  }, [dispatch, id]);

  const {
    blockDetails: { data: blockDetails },
  } = useAppSelector((state) => state);

  return (
    <Box component="main">
      <Container maxWidth="xl">
        <Grid container spacing={4} pt={4}>
          <Grid item xs={12}>
            {blockDetails && <BlockDetails block={blockDetails.block} />}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Block;
