
import { Select, formData, selectInputStyle } from '@mantine/core'; 
import { useForm } from '@mantine/form';
import { TextInput } from '@mantine/core';
function Second() {
    const form = useForm({
        // initialValues: {
        //   email: ''
        // }, 
        // validate: {
        //     email: (value) => {
        //         if (!/^\S+@\S+\.\S+$/.test(value)) {
        //             return 'Invalid email';
        //         }
        //         return undefined; // No validation error
        //     }
        // }
    //     validationRules: {
    //         email: (value) => {
    //           if (!/^\S+@\S+\.\S+$/.test(value)) {
    //             return 'Invalid email';
    //           }
    //           return undefined; // No validation error
    //         }
    //     },
    //     onSubmit: (values) => {
    //         console.log(values); // Log form values on submission
    //         notifications.showNotification({ title: 'Form submitted!', color: 'blue' });
    //     }
     });

    return (
      <>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
                withAsterisk
                type="email" // Use type="email" for email input validation
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
                error={form.errors.email}
            />
            
            {/* <button type="submit">Submit</button> */}
            {/* <Select
                data={[
                    { value: 'Student', label: 'Student' },
                    { value: 'Employed', label: 'Employed' },
                    { value: 'Business', label: 'Business' },
                ]}
                    onChange={(e) => {
                    console.log(e);
                    setFormData({ ...formData, employment_status: e });
                }}
                value={formData.employment_status}
                sx={selectInputStyle}
                label="Your employment status"
                placeholder="Choose one"
            /> */}
        </form>
        {/* <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        </form> */}
        {/* <Select
            data={[
                { value: 'Student', label: 'Student' },
                { value: 'Employed', label: 'Employed' },
                { value: 'Business', label: 'Business' },
            ]}
                onChange={(e) => {
                console.log(e);
                setFormData({ ...formData, employment_status: e });
            }}
            value={formData.employment_status}
            sx={selectInputStyle}
            label="Your employment status"
            placeholder="Choose one"
            /> */}
      </>
    )
}

export default Second;
    
