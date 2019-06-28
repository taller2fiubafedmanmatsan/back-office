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
    bots: []
  }

  async componentDidMount() {
    const state = this.props.workspace;
    this.setState(() => ({ 
      description: state.description,
      welcomeMessage: state.welcomeMessage,
      bots: state.bots
     }));
  }

  async handleOnClick() {
    const ws = {
      ...this.props.workspace,
      ...this.state,
    };
    this.props.updateWorkspace(ws);
    await Api(this.props.token).patch(`/api/workspaces/${this.props.workspace.name}/fields`, this.state);
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
      users,
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
        <div>
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
          <TextField
            id="standard-disabled"
            label="Users Amount"
            className={'textField'}
            value={users.length}
            margin='normal'
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
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
        {(bots.length > 0) && bots.map((bot) => (
            <div key="bots" className='bots'>
              <TextField
                id={`standard-creator-name${bot.id}`}
                label="Name"
                className={'textField'}
                value={bot.name}
                margin='normal'
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id={`standard-creator-email${bot.id}`}
                label="url"
                className={'textField'}
                value={bot.url}
                margin='normal'
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
          ))
        }
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

const mapStateToProps = (state) => {
  return {
    token: state.login.token
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateWorkspace: (expense) => dispatch(updateWorkspace(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceSpecs);
