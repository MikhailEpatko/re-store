import React from 'React';

const {
  Provider: BookstoreServiceProvider,
  Concumer: BookstoreServiceConcumer
} = React.createContext();

export {
  BookstoreServiceProvider,
  BookstoreServiceConcumer
}