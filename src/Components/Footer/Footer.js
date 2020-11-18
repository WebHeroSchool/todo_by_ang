import React from 'react';
import styles from './Footer.module.css';
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';

const Footer = ({count, toShowAll, toShowActive, toShowCompleted, toClearCompleted}) => {

  Footer.prototype = {
    count: PropTypes.number.isRequired
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.count}>{count} items left</div>
      <ButtonGroup
        size="small"
        variant="text"
        aria-label="text outlined button group">
        <Button style={{fontSize: '9px', color: '#c4c4c4'}}
                onClick={() => toShowAll()}
        >
          All
        </Button>
        <Button style={{fontSize: '9px', color: '#c4c4c4'}}
          onClick={() => toShowActive()}
        >
          Active
        </Button>
        <Button style={{fontSize: '9px', color: '#c4c4c4'}}
          onClick = {() => toShowCompleted()}
        >
          Completed
        </Button>
      </ButtonGroup>
      <Button style={{fontSize: '9px', color: '#c4c4c4'}}
              onClick={() => toClearCompleted()}
      >Clear completed</Button>
    </div>
  )

};


export default Footer;