import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Record } from './ui-components';
import { API } from "aws-amplify";
import Modal from "./components/Modal";
import Button from '@mui/material/Button';
import {
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listRecords } from "./graphql/queries";
import {
  createRecord as createRecordMutation,
  deleteRecord as deleteRecordMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [records, setRecords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchRecords();
  }, []);

  async function fetchRecords() {
    const apiData = await API.graphql({ query: listRecords });
    const recordsFromAPI = apiData.data.listRecords.items;
    setRecords(recordsFromAPI);
  }

  async function createRecord(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      done: form.get("done"),
      billing_month: form.get("billing_month"),
      customer: form.get("customer"),
      effort: form.get("effort"),
      title: form.get("title"),
      netto: form.get("netto"),
      date: form.get("date"),
      duration: form.get("duration"),
      note: form.get("note"),
    };
    await API.graphql({
      query: createRecordMutation,
      variables: { input: data },
    });
    fetchRecords();
    event.target.reset();
  }

  async function deleteRecord({ id }) {
    const newRecords = records.filter((record) => record.id !== id);
    setRecords(newRecords);
    await API.graphql({
      query: deleteRecordMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Button variant="outlined" onClick={() => setIsOpen(true)} >Open Modal</Button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <Heading level={1}>My Record</Heading>
      <View as="form" margin="3rem 0" onSubmit={createRecord}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="done"
            placeholder="FALSE"
            label="Record Done"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="billing_month"
            placeholder="JAN, FEB ..."
            label="Record Billing Month"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="customer"
            placeholder="Uni ..."
            label="Record Customer"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="effort"
            placeholder="Workshop"
            label="Record Effort"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="title"
            placeholder="some tite ..."
            label="Record Title"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="netto"
            placeholder="0.00"
            label="Record Netto"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="date"
            placeholder="01-12-2023"
            label="Record Date"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="duration"
            placeholder="1.5"
            label="Record Duration"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="note"
            placeholder="some note ..."
            label="Record Notes"
            labelHidden
            variation="quiet"
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <View>
        <Record onSubmit={createRecord}/>
      </View>
      <Heading level={2}>Current Records</Heading>
      <View margin="3rem 0">
        {records.map((record) => (
          <Flex
            key={record.id || record.billing_month}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {record.date}
            </Text>
            <Text as="span">
              {record.customer}
            </Text>
            <Text as="span">{record.note}</Text>
            <Button variation="link" onClick={() => deleteRecord(record)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);