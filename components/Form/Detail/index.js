import { Box, Text } from '@mantine/core';

function Detail({ title, data }) {
  return (
    <Box
      sx={{
        margin: '10px 0',
      }}
    >
      <Text weight={300}>{title}</Text>
      <Text>{data}</Text>
    </Box>
  );
}

export default Detail;