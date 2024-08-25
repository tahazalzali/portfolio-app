import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage, VStack, useToast } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function ContactMeSection() {
  const toast = useToast();
  const initialValues = { firstName: '', email: '', type: '', comment: '' };
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    type: Yup.string().required('Required'),
    comment: Yup.string().required('Required')
  });

  return (
    <Box id="contactme-section" p={5}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            toast({
              title: "Submitted Successfully",
              description: "We have received your message.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            actions.setSubmitting(false);
            actions.resetForm();
          }, 1000);
        }}
      >
        {formik => (
          <Form>
            <VStack spacing={4}>
              <Field name="firstName">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input {...field} id="firstName" placeholder="Enter your first name" />
                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="Enter your email" type="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="type">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.type && form.touched.type}>
                    <FormLabel htmlFor="type">Type of Enquiry</FormLabel>
                    <Input {...field} id="type" placeholder="Type of enquiry" />
                    <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="comment">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.comment && form.touched.comment}>
                    <FormLabel htmlFor="comment">Comment</FormLabel>
                    <Input {...field} id="comment" placeholder="Enter your comment" />
                    <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button mt={4} colorScheme="teal" isLoading={formik.isSubmitting} type="submit">
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ContactMeSection;
