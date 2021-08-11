import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { KeyPair } from 'ft3-lib';
import React, { useState } from 'react';
import AssymetricEncryption from './AssymetricEncryption';
import Signing from './Signing';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: '25px',
      width: '90%',
    },
    icon: {
      marginRight: '5px',
    },
    textFieldWrapper: {
      display: 'inline-block',
      width: '640px',
      margin: '25px',
    },
    textArea: {
      width: '820px',
      marginBottom: '10px',
      marginLeft: '10px',
    },
    button: {
      margin: '5px',
    },
  })
);

const AssymetricOperations: React.FunctionComponent = () => {
  const classes = useStyles();

  const [keyPair, setKeyPair] = useState<KeyPair>(new KeyPair());
  return (
    <Paper className={classes.wrapper}>
      <Typography variant='h2' component='h2'>
        Assymetric Operations
      </Typography>
      <Button variant='outlined' onClick={() => setKeyPair(new KeyPair())}>
        <RefreshIcon className={classes.icon} /> New Key Pair
      </Button>
      <div className={classes.textFieldWrapper}>
        <TextField
          id='pubKey'
          label='Public'
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          value={keyPair.pubKey.toString('hex')}
          variant='outlined'
          fullWidth
        />
      </div>
      <div className={classes.textFieldWrapper}>
        <TextField
          id='pubKey'
          label='Private'
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          value={keyPair.privKey.toString('hex')}
          variant='outlined'
          fullWidth
        />
      </div>
      <AssymetricEncryption keyPair={keyPair} />
      <br />
      <Signing keyPair={keyPair} />
    </Paper>
  );
};

export default AssymetricOperations;
