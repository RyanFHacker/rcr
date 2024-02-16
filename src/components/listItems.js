import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';



export const MainListItems = () => {
  return (
<div>
    <ListItem button to='home' component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Main" />
    </ListItem>
    <ListItem button to='/events' component={Link}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem 
      button
      to='/ranbats'
      component={Link}
    >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Results"  />
    </ListItem>
    <ListItem button to='/shop' component={Link}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Shopper" />
    </ListItem>
  </div>
  )
}

export const SocialListItems = () => {
  return (
    <div>
    <ListItem button to='/facebook' component={Link}>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    
    <ListItem button to='/twitter' component={Link} >
      <ListItemIcon>
        <TwitterIcon />
      </ListItemIcon>
      <ListItemText primary='Twitter' />
    </ListItem>
    <ListItem button to='/discord' component={Link}>
      <ListItemIcon>
        <Icon icon="bi:discord" style={{ fontSize: 24  }}/>
      </ListItemIcon>
      <ListItemText primary='Discord' />
    </ListItem>
  </div>
  )
}
