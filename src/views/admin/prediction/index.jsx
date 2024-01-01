
import React, { useState } from 'react';

// Chakra imports
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Select,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form, Field } from 'formik';
import Cookies from 'universal-cookie';

export default function Prediction() {
    const cookies = new Cookies();
    const [returnProb, setReturnProb] = useState(null);

    return (
        <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
            <Formik
                initialValues={{
                    loan_type: 'Mortgage',
                    loan_value: 20,
                    collateral_value: 655,
                    identity_number: cookies.get('infoResponse') != null ? cookies.get('infoResponse').identityNumber : null
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                        axios
                            .post("http://144.126.242.191:36000/predict-loan-probability", values, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then((response) => {
                                setReturnProb(response.data);
                            });
                    }, 400);
                }}
            >
                {(props) => (
                    <Form>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="identity_number" id="identity_number" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="identity_number">
                                    <FormLabel>Identity number</FormLabel>
                                    <Input style={{ color: 'black' }} type='number' defaultValue={cookies.get('infoResponse') != null ? cookies.get('infoResponse').identityNumber : null} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="loan_type" id="loan_type" style={{ marginBottom: "10px"}} htmlFor="loan_type">
                                    <FormLabel>Loan type</FormLabel>
                                    <Select name="loan_type" id="loan_type" onChange={props.handleChange} style={{ color: 'black' }} placeholder='Select the loan type' defaultValue='Mortgage'>
                                        <option style={{ color: 'black' }} value="Mortgage">Mortgage</option>
                                        <option style={{ color: 'black' }} value="Unsecured Loan">Unsecured Loan</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="loan_value" id="loan_value" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="loan_value">
                                    <FormLabel>Loan value (million VND)</FormLabel>
                                    <Input style={{ color: 'black' }} type='number' defaultValue={20} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="collateral_value" id="collateral_value" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="collateral_value">
                                    <FormLabel>Collateral value (million VND, if possessed)</FormLabel>
                                    <Input style={{ color: 'black' }} type='number' defaultValue={665} />
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            {
                returnProb != null &&
                <Box>
                    <Text style={{margin: "10px"}}> Loan probability: {returnProb} %</Text>
                </Box>
            }
        </Box>
    );
}