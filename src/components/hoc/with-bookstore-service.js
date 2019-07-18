import React from 'react';

import {BokkstoreServiceConcumer} from '../bookstore-service-context';

const WithBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BokkstoreServiceConcumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props}
                       bookstoreService={bookstoreService}/>
            );
          }
        }
      </BokkstoreServiceConcumer>
    );
  }
};

export default WithBookstoreService;