import React from 'react';
import { connect } from 'react-redux';
import Api from '../../../../client/hypechat';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateChannel } from '../../ChannelList/actions';

class ChannelSpecs extends React.Component{
  state = { 
    name: '',
    description: '',
    welcomeMessage: '',
    channelType: '',
    isPrivate: '',
    amountMessages: '',
  }

  componentDidMount() {
    const state = this.props.channel;
    const pages =  this.props.channel.pages;
    const amountMessages = pages[pages.length -1].messages.length + 50 * (pages.length - 1);

    this.setState(() => ({ 
      name: state.name,
      description: state.description,
      welcomeMessage: state.welcomeMessage,
      channelType: state.channelType,
      isPrivate: state.isPrivate,
      amountMessages: amountMessages
     }));
  }

  async handleOnClick() {
    const channel = {
      ...this.props.channel,
      ...this.state,
    };
    await Api(this.props.token).patch(`/api/channels/${this.props.channel.name}/workspace/${this.props.workspace.name}`, channel);
    this.props.updateChannel(channel);
  }

  handleChange(name) {
    return event => {
      const newData = event.target.value;
      this.setState((prevState) => ({ ...prevState, [name]: newData }));
    }
  }
  
  render() {
    const {
      creator,
      users
    } = this.props.channel;
    console.log("llegue1")
    console.log(this.props.channel);
    return (
      <form className={'container'} noValidate autoComplete="off">
        <div key="field" className='field'>
          <TextField
            id="standard-name"
            label="Name"
            className={'textField'}
            value={this.state.name}
            margin='normal'
            onChange={this.handleChange('name')}
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
          <TextField
            id="standard-description"
            label="Type"
            className={'textField'}
            value={this.state.channelType}
            onChange={this.handleChange('channelType')}
            margin='normal'
          />
          <TextField
            id="standard-description"
            label="Private"
            className={'textField'}
            value={this.state.isPrivate}
            onChange={this.handleChange('isPrivate')}
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
            id="standard-creator-email"
            label="Messages Amount"
            className={'textField'}
            value={this.state.amountMessages}
            margin='normal'
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-creator-email"
            label="Users Amount"
            className={'textField'}
            value={users.length}
            margin='normal'
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
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
  updateChannel: (expense) => dispatch(updateChannel(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSpecs);
