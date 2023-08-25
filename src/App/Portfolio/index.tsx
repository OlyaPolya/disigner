import { itemsList } from './fixtures';
import ImageList from '@mui/material/ImageList';
import { Box, Typography } from '@mui/material';
import Item from './Item';
import { Item as ItemProp } from './interfaces';
import { COLUMNS_NUMBER, MAX_PORTFOLIO_WIDTH, PADDING_BETWEEN_ITEMS, ROW_HEIGHT } from './constants';

export default function Portfolio() {

  // const widthPortfolio = items.reduce(function (maxWidth, item) {
  //   const max = maxWidth > item.width ? maxWidth : item.width;
  //   return max;
  // }, 0)

  return (
    <Box component='div' sx={{ p: 3, bgcolor: 'black', paddingTop: '0' }} id='portfolio'>
      <Typography variant='h5' sx={{ color: 'white', p: 3 }}>
        PORTFOLIO
      </Typography>
      <ImageList sx={{ maxWidth: MAX_PORTFOLIO_WIDTH, margin: 'auto' }} variant='quilted' cols={COLUMNS_NUMBER} rowHeight={ROW_HEIGHT} gap={PADDING_BETWEEN_ITEMS}>
        {itemsList.map((item: ItemProp) => (
          <Item item={item} key={item.img} />
        ))}
      </ImageList>
    </Box>
  );

}




























































































































































































































































