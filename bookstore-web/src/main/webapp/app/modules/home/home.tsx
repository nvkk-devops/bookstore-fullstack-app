import './home.scss';

import React from 'react';
// import { Link } from 'react-router-dom';
import { MenuList, MenuItem, Link, Button }  from '@material-ui/core';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  const handleClick = (event: React.MouseEvent<EventTarget>) => {
    // event.preventDefault();
    // console.log('Home.handleClick')
  };

  return (
    <Row>
      <Col md="4">
          <Button variant="contained" color="primary">
          <Link color="inherit" href="/bookstore" onClick={handleClick}>
            Book Store
          </Link>
          </Button>

          <Button variant="contained" color="secondary">
          <Link color="inherit" href="/allauthors" onClick={handleClick}>
            Authors
          </Link>
          </Button>

      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
