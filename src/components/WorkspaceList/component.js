import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MaterialTable from 'material-table';
import { fetchAllWorkspace, updateWorkspace, deleteWorkspace } from './actions';
import { showWorkspaceInfo } from '../Main/actions';
import Api from '../../../client/hypechat';
import { filterFetch, filterNewFields } from './dataFilter'; 

class WorkspaceList extends React.Component {
  async componentDidMount() {
    const { data: workspace } = await Api.get(`/api/workspaces/`);
    console.log(workspace);
    this.props.fetchAllWorkspace(filterFetch(workspace));
  }

  async onRowUpdate(newData, oldData) {
    this.props.updateWorkspace(newData);
    await Api.patch(`/api/workspaces/${newData.name}/fields`, filterNewFields(newData, oldData));
  }

  async onRowDelete(wsName) {
    this.props.deleteWorkspace(wsName);
    await Api.delete(`/api/workspaces/${wsName}`);
  }

  onRowClick(wsName) {
    this.props.showWorkspaceInfo(wsName);
  }
  
  render() {
    return (
      <MaterialTable
        title="Workspaces"
        columns={this.props.workspace.columns}
        data={this.props.workspace.data}
        actions={[
          {
            icon: 'info',
            tooltip: 'Info',
            onClick: (event, rowData) => this.props.showWorkspaceInfo(rowData.name)
          }
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.props.workspace.data];
                data[data.indexOf(oldData)] = newData;
                this.onRowUpdate(newData, oldData);
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.props.workspace.data];
                data.splice(data.indexOf(oldData), 1);
                this.onRowDelete(oldData.name);
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
  fetchAllWorkspace: (ws) => dispatch(fetchAllWorkspace(ws)),
  updateWorkspace: (newData) => dispatch(updateWorkspace(newData)),
  deleteWorkspace: (wsName) => dispatch(deleteWorkspace(wsName)),
  showWorkspaceInfo: (wsName) => dispatch(showWorkspaceInfo(wsName))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceList);
