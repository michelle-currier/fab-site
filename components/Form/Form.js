import { Box, Button } from '@mantine/core';
import First from './First';
import SecondStep from './Second';
import ThirdStep from './Third';
import { useState } from 'react';


export default function Form () {
    const [page, setPage] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        employment_status: null
    });
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <First formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <ThirdStep formData={formData} setFormData={setFormData} />;
      default:
        return <First formData={formData} setFormData={setFormData} />;
    }
  }; 
  function handleSubmit () {
    if (page === 0) {
        // do form validation
        if (formData.name === '' || formData.name.length <= 1) {
            return alert('Please enter your name');
          } else {
            setPage(page + 1);
            console.log(formData);
          }
      } else if (page === 1) {
        // do form validation again
        if (formData.email === '' || !formData.email.includes('@')) {
            return alert('Please enter a valid email');
          } else if (!formData.employment_status) {
            return alert('Please select your employment status');
          } else {
            setPage(page + 1);
            console.log(formData);
          }
      } else if (page === 2) {
        // set page === 0 , and clear fields
        setPage(0);
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            employment_status: null,
        });
      } else setPage(page + 1);

    setPage(page + 1);
    {
      page > 0 && <Button onClick={() => setPage(page - 1)}>Back</Button>
    }
  }
  
return (
    <>
      <Box maw={340} mx="auto">
        {conditionalComponent()}
        <Button onClick={handleSubmit}>
        { page === 0 || page === 1 ? "Next" : "Submit" }
      </Button>
      </Box>
    </>
  )
}