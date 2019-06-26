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
  }

  componentDidMount() {
    const state = this.props.channel;
    console.log('llegue2');
    console.log(this.props.channel);
    this.setState(() => ({ 
      name: state.name,
      description: state.description,
      welcomeMessage: state.welcomeMessage,
      channelType: state.channelType,
      isPrivate: state.isPrivate,
     }));
    console.log(this.state);
  }

  async handleOnClick() {
    const channel = {
      ...this.props.channel,
      ...this.state,
    };
    await Api.patch(`/api/channels/${this.props.channel.name}/workspace/${this.props.workspace.name}`, channel);
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
      bots,
      creator
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
        {/* <TextField
          id="standard-disabled"
          label="Channels Amount"
          className={'textField'}
          value={channelsAmount}
          margin='normal'
          InputProps={{
            readOnly: true,
          }}
        /> */}
        {(bots && bots.length > 0) && <h3>Bots</h3>}
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
  updateChannel: (expense) => dispatch(updateChannel(expense))
});

export default connect(undefined, mapDispatchToProps)(ChannelSpecs);
