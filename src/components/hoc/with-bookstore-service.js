import React from 'react';

import {BookstoreServiceConcumer} from '../bookstore-service-context';

const WithBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConcumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props}
                       bookstoreService={bookstoreService}/>
            );
          }
        }
      </BookstoreServiceConcumer>
    );
  }
};

export default WithBookstoreService;