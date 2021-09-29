import MaterialTable from 'material-table';

export default function Events() {

    return (
  <MaterialTable 
  options={{
    pageSize: 10,
    sorting: true,
  }}
  columns={[
    {title: 'Player', field: 'name' },
    {title: 'BP', field: 'bp' },
    {title: 'PP', field: 'pp', defaultSort: 'desc'},
  ]}
  data={[
    { name: 'Droobertson', bp: 60, pp: 0 },
  ]}
  title="River City Ranbats II"
/> 
    )
  }