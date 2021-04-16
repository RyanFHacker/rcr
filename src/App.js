
import './App.css';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

function App() {
  return (
    <div className="App">
      <MaterialTable 
        options={{
          pageSize: 10,
        }}
        icons={tableIcons}
        columns={[
          {title: 'Player', field: 'name' },
          {title: 'BP', field: 'bp' },
          {title: 'PP', field: 'pp' },
        ]}
        data={[
          { name: 'Droobertson', bp: 60, pp: 0 },
          { name: 'WSUNLIMITED', bp: 130, pp: 100 },
          { name: 'EarthWurmVince', bp: 210, pp: 100 },
          { name: 'Audiyoo', bp: 210, pp: 400 },
          { name: 'BrandonChun', bp: 30, pp: 0 },
          { name: 'OliverQueen', bp: 790, pp: 2400 },
          { name: 'TheGreatMalcom', bp: 200, pp: 300 },
          { name: 'SugarJLeonard', bp: 70, pp: 0 },
          { name: 'AreaFiftyZ', bp: 220, pp: 800 },
          { name: 'Santa Claus Jr.', bp: 150, pp: 100 },
          { name: 'projectino', bp: 10, pp: 0 },
          { name: 'Radical Six', bp: 450, pp: 1400 },
          { name: 'saiferoth', bp: 60, pp: 0 },
          { name: 'rexnjay', bp: 60, pp: 0 },
          { name: 'Hiju', bp: 20, pp: 0},
          { name: 'Flash House', bp: 520, pp: 1600 },
          { name: 'Captain Terror', bp: 130, pp: 0 },
          { name: 'JSSN', bp: 60, pp: 0 },
          { name: 'sinister x', bp: 330, pp: 600 },
          { name: 'snanta', bp: 60, pp: 0 },
          { name: 'Judas Iscariot', bp: 510, pp: 1500 },
          { name: 'daredevil_hermz', bp: 120, pp: 0},
          { name: 'Corey Breeze', bp: 160, pp: 100 },
          { name: 'Izzzzymode', bp: 20, pp: 0 },
          { name: 'Swing7117', bp: 40, pp: 0 },
          { name: 'SaltySteven', bp: 270, pp: 500 },
          { name: 'Drunin', bp: 60, pp: 0},
          { name: 'PsychoWard', bp: 30, pp: 0 },
          { name: 'MrH', bp: 180, pp: 300 },


        ]}
        title="River City Ranbats II"
      />
    </div>
  );
}

export default App;
