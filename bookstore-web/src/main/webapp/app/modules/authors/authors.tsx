import './authors.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IAuthorsProp = StateProps;

export const Authors = (props: IAuthorsProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="12">
        <h2>Venkata Book Store ! Authors</h2>
        <div>
          <Alert color="success">Available Authors.</Alert>
        </div>

        <p>Pls use comments section to post any queries:</p>

      </Col>
      
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Authors);
