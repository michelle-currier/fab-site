import { Box, Text, TextInput, boxStyle } from '@mantine/core';
function First({ formData, setFormData }) {
  return (

    <Box sx={boxStyle}
    >
      <Text>To start with, whats your beautiful name?</Text>
      <Box sx={{
          margin: '1rem 0',
        }}
      >
        <TextInput 
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          value={formData.name}
          placeholder="John Doe"
          required
        />
      </Box>
    </Box>
  );
}
export default First;