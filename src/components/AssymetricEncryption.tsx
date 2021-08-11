import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import { KeyPair } from 'ft3-lib';
import { decrypt, encrypt } from 'eciesjs';
import React, { useState } from 'react';

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

interface Props {
  keyPair: KeyPair;
}

const AssymetricEncryption: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const [inputIsHex, setInputIsHex] = useState(false);
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  function isHex(h: string) {
    return Boolean(h.match(/^[0-9A-Fa-f]+$/i));
  }

  function encryptInput() {
    console.log('Encrypting', input);
    const encrypted = encrypt(
      props.keyPair.pubKey.toString('hex'),
      Buffer.from(input)
    );
    console.log('Encrypted: ', encrypted.toString('utf8'));
    setOutput(encrypted.toString('hex'));
  }

  function decryptInput() {
    const decrypted = decrypt(props.keyPair.privKey, Buffer.from(input, 'hex'));
    setOutput(decrypted.toString('utf8'));
  }

  return (
    <>
      <div>
        <TextField
          className={classes.textArea}
          label='Input'
          type='text'
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInput(event.target.value);
            setInputIsHex(isHex(event.target.value));
          }}
          multiline
          rows={6}
          fullWidth
          variant='outlined'
        ></TextField>
        <TextField
          className={classes.textArea}
          label='Output'
          type='text'
          value={output}
          multiline
          rows={6}
          fullWidth
          variant='outlined'
          disabled
        ></TextField>
      </div>
      <div>
        <Button
          className={classes.button}
          variant='outlined'
          onClick={encryptInput}
        >
          Encrypt
        </Button>
        <Button
          className={classes.button}
          variant='outlined'
          onClick={decryptInput}
          disabled={!inputIsHex}
        >
          Decrypt
        </Button>
      </div>
    </>
  );
};

export default AssymetricEncryption;
