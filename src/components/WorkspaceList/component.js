import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllWorkspace, updateWorkspace, deleteWorkspace } from './actions';
import { showWorkspaceInfo } from '../Main/actions';
import Api from '../../../client/hypechat';
import { filterFetch } from './dataFilter'; 

class WorkspaceList extends React.Component {
  async componentDidMount() {
    const { data: workspace } = await Api(this.props.token).get(`/api/workspaces/`);
    console.log(workspace);
    this.props.fetchAllWorkspace(filterFetch(workspace));
  }

  async onRowDelete(wsName) {
    this.props.deleteWorkspace(wsName);
    await Api(this.props.token).delete(`/api/workspaces/${wsName}`);
  }

  async handleOnClick(rowData) {
    const response = await Api(this.props.token).get(`/api/workspaces/${rowData.name}/bots`);
    const workspace = {
      ...rowData,
      bots: response.data
    }
    this.props.showWorkspaceInfo(workspace);
  }
  
  render() {
    return (
      <MaterialTable
        title="Workspaces"
        columns={this.props.workspace.columns}
        data={this.props.workspace.data}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit',
            onClick: (event, rowData) => this.handleOnClick(rowData)
          }
        ]}
        editable={{
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
    workspace: state.workspace,
    token: state.login.token
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchAllWorkspace: (ws) => dispatch(fetchAllWorkspace(ws)),
  updateWorkspace: (newData) => dispatch(updateWorkspace(newData)),
  deleteWorkspace: (wsName) => dispatch(deleteWorkspace(wsName)),
  showWorkspaceInfo: (wsName) => dispatch(showWorkspaceInfo(wsName))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceList);
