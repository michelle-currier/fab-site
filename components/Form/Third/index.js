import { Box, Text } from '@mantine/core';
import Detail from '../Detail';

function ThirdStep({ formData }) {
  const boxStyle = {
    width: '70%',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '1rem 0',
  };

  return (
    <Box sx={{ ...boxStyle, textAlign: 'left' }}>
      <Detail title="Name" data={formData.name} />
      <Detail title="Email" data={formData.email} />
      <Detail title="Employment status" data={formData.employment_status} />
    </Box>
  );
}
export default ThirdStep;