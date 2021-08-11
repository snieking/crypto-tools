import { Button, createStyles, TextField, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { KeyPair } from 'ft3-lib';
import { useState } from 'react';
import * as crypto from 'crypto';
import * as eccrypto from 'eccrypto';

interface Props {
  keyPair: KeyPair;
}

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

const Signing: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();

  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  function sha256Hash(input: string) {
    return crypto.createHash('sha256').update(input).digest();
  }

  async function sign() {
    const hash = sha256Hash(input);
    const signature = await eccrypto.sign(props.keyPair.privKey, hash);
    setOutput(signature.toString('hex'));
  }

  async function verify() {
    const hash = sha256Hash(input);
    try {
      await eccrypto.verify(props.keyPair.pubKey, hash, output);
    } catch {
      alert('Signature is invalid');
    }
  }

  return (
    <>
      <div>
        <TextField
          className={classes.textArea}
          label='Message'
          type='text'
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
          multiline
          rows={6}
          fullWidth
          variant='outlined'
        ></TextField>
        <TextField
          className={classes.textArea}
          label='Signature'
          type='text'
          value={output}
          multiline
          rows={6}
          fullWidth
          variant='outlined'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setOutput(event.target.value)
          }
        ></TextField>
      </div>
      <div>
        <Button className={classes.button} variant='outlined' onClick={sign}>
          Sign Message
        </Button>
        <Button className={classes.button} variant='outlined' onClick={verify}>
          Verify Signature
        </Button>
      </div>
    </>
  );
};

export default Signing;
