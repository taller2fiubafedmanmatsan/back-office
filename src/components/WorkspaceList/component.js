import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllWorkspace } from './actions';
import Api from '../../../client/hypechat';
import dataFilter from './dataFilter'; 

class WorkspaceList extends React.Component {
  async componentDidMount() {
    const { data: workspace } = await Api.get(`/api/workspaces/red`);

    this.props.fetchAllWorkspace(dataFilter(workspace));
  }

  render() {
    return (
      <MaterialTable
        title="Workspaces"
        columns={this.props.workspace.columns}
        data={this.props.workspace.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.props.workspace.data];
                data.push(newData);
                // setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.props.workspace.data];
                data[data.indexOf(oldData)] = newData;
                // setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.props.workspace.data];
                data.splice(data.indexOf(oldData), 1);
                // setState({ ...state, data });
              }, 600);
            }),
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workspace: state.workspace
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchAllWorkspace: (ws) => dispatch(fetchAllWorkspace(ws))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceList);
