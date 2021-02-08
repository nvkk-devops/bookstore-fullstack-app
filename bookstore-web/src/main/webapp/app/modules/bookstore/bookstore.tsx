import './bookstore.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import axios from 'axios';
import { printDebug, getAllBooks, getBookById } from 'app/modules/bookstore/bookstore.reducer';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { createStyles, withStyles, IconButton, Grid, Avatar, Card, CardActionArea, CardHeader, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const BOOKSTORE_SERVER_HOST = process.env.BOOKSTORE_SERVER_HOST ? process.env.BOOKSTORE_SERVER_HOST : 'http://localhost:8080';
printDebug(BOOKSTORE_SERVER_HOST);

export interface IBookStoreProp extends StateProps, DispatchProps {
  classes: any;
  bookslist: any;
  callbackHandler: Function;
}

// const useStyles = createStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

const useStyles = createStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    }
});

export class BookStore extends React.Component<IBookStoreProp, any> {

  constructor(props) {
    super(props);

    this.state = {
      bookslist: []
    };
  }

  componentDidMount() {
    printDebug("componentDidMount()");
    this.loadAllBooksDirectCall();
  }

  loadAllBooksDirectCall = async () => {
    const response = await axios.get(BOOKSTORE_SERVER_HOST + '/api/bookstore/getAllBooks', {});
    this.setState({
      bookslist: response && response.data
    });
    this.state.bookslist.map(book => {
      this.getImageByBookId(book.bookId);
      return book;
    })
  };


  getImageByBookId = async (bookid) => {
      const response = await axios.get(BOOKSTORE_SERVER_HOST + '/api/bookstore/getImage/'+bookid, {});
      printDebug("Book ID = "+bookid + ", "+response.data);

      this.setState({
          bookslist: this.state.bookslist.map(book => {
            if (bookid === book.bookId) {
              return { ...book, imageUrl: response.data }
            }
            return book;
          })
        });
  }

  handleBookView = (bookid: number) => {

  };

  handleBookPurchase = () => {

  };

  render() {
    // const classes = useStyles();
    const { classes } = this.props;

    return (
         <div>
        <Row>
          <h2>Venkata Book Store ! Books</h2>
         </Row>
          <Row>
            <Grid container spacing={2}>
            {this.state.bookslist.length > 0 &&
              this.state.bookslist.map((book: any) =>
                  <Grid key={book.bookId} item xs>
                     <Card key={book.bookId}  className={classes.root}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="recipe" className={classes.avatar}>
                                {book.authorName}
                              </Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <MoreVertIcon />
                              </IconButton>
                            }
                            title={book.bookTitle}
                            subheader={book.authorName}
                          />
                          <div>
                          <img className={classes.img} alt="Image Not Found" src={book.imageUrl} />

                          </div>
                          <CardMedia
                            className={classes.media}
                            image=""
                            title={book.bookTitle}
                          />
                          <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {book.bookTitle} ... lorem epsum ... lorem epsum .. {book.bookTitle} ... lorem epsum ... lorem epsum ..
                            </Typography>
                          </CardContent>
                      </Card>

                  </Grid>

            )}
             </Grid>

      </Row>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

const mapDispatchToProps = { getAllBooks, getBookById, printDebug };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(BookStore));
