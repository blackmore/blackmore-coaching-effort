/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
      id
      done
      billing_month
      customer
      effort
      title
      netto
      date
      duration
      note
      createdAt
      updatedAt
    }
  }
`;
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
      id
      done
      billing_month
      customer
      effort
      title
      netto
      date
      duration
      note
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
      id
      done
      billing_month
      customer
      effort
      title
      netto
      date
      duration
      note
      createdAt
      updatedAt
    }
  }
`;
