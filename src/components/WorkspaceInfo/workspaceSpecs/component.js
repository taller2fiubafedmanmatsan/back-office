import React from 'react';
import { connect } from 'react-redux';
import Api from '../../../../client/hypechat';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateWorkspace } from '../../WorkspaceList/actions';

class WorkspaceSpecs extends React.Component{
  state = { 
    description: '',
    welcomeMessage: '',
  }

  componentDidMount() {
    const state = this.props.workspace;
    this.setState(() => ({ 
      description: state.description,
      welcomeMessage: state.welcomeMessage,
     }));
    console.log(this.state);
  }

  async handleOnClick() {
    const ws = {
      ...this.props.workspace,
      ...this.state,
    };
    this.props.updateWorkspace(ws);
    await Api.patch(`/api/workspaces/${this.props.workspace.name}/fields`, this.state);
  }

  handleChange(name) {
    return event => {
      const newData = event.target.value;
      this.setState((prevState) => ({ ...prevState, [name]: newData }));
    }
  }
  
  render() {
    const {
      name,
      creator,
      channelsAmount,
      admins,
      bots
    } = this.props.workspace;
    return (
      <form className={'container'} noValidate autoComplete="off">
        <div key="field" className='field'>
          <TextField
            id="standard-name"
            label="Name"
            className={'textField'}
            value={name}
            margin='normal'
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-description"
            label="Description"
            className={'textField'}
            value={this.state.description}
            onChange={this.handleChange('description')}
            margin='normal'
          />
          <TextField
            id="standard-description"
            label="Welcome Message"
            className={'textField'}
            value={this.state.welcomeMessage}
            onChange={this.handleChange('welcomeMessage')}
            margin='normal'
          />
        </div>
        <TextField
          id="standard-creator-name"
          label="Creator Name"
          className={'textField'}
          value={creator.name}
          margin='normal'
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-creator-email"
          label="Creator Email"
          className={'textField'}
          value={creator.email}
          margin='normal'
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-disabled"
          label="Channels Amount"
          className={'textField'}
          value={channelsAmount}
          margin='normal'
          InputProps={{
            readOnly: true,
          }}
        />
        {(admins.length > 0) && <h3>Administrators</h3>}
        {
          (admins.length > 0) && admins.map((admin) => (
            <div key="admins" className='admins'>
              <TextField
                id={`standard-creator-name${admin.id}`}
                label="Name"
                className={'textField'}
                value={admin.name}
                margin='normal'
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id={`standard-creator-email${admin.id}`}
                label="Creator Email"
                className={'textField'}
                value={admin.email}
                margin='normal'
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
          ))
        }
        {(bots.length > 0) && <h3>Bots</h3>}
        <Button 
          id="save-button"
          variant="outlined" 
          color="primary" 
          className="button"
          onClick={async () => await this.handleOnClick()}
        >
          Save
        </Button>
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateWorkspace: (expense) => dispatch(updateWorkspace(expense))
});

export default connect(undefined, mapDispatchToProps)(WorkspaceSpecs);
