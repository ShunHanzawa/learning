import { useState } from 'react';
import { TextField, Box } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

type FilmOptionType = {
  text: string;
  category: string;
};

export const CategoryFilter = () => {
  const categoryList = [
    { text: '言語', category: 'langage' },
    { text: 'ライブラリ', category: 'library' },
    { text: 'NFT', category: 'nft' },
    { text: 'デザイン', category: 'design' }
  ];

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: FilmOptionType) => option.text
  });

  return (
    <Box sx={{ width: '34%', marginBottom: '20px' }}>
      <Autocomplete
        id="filter-demo"
        options={categoryList}
        getOptionLabel={(option) => option.text}
        filterOptions={filterOptions}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Filter" />}
      />
    </Box>
  );
};
