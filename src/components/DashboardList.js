

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItemLink from './ListItemLink'

export default function DashboardList() {
  return (
  <div>
    <ListItemLink to='/ranbats' primary='Results' icon={<BarChartIcon />}>
      <ListItem button>
      </ListItem>
    </ListItemLink>
    <ListItemLink to='/' primary='Stuff'>
      <ListItem button>
      </ListItem>
    </ListItemLink>
  </div>
  )
}