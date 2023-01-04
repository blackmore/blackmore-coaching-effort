/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
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
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
