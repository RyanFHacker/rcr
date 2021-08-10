import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom'
import { ExternalLink } from 'react-external-link';
import { Icon } from '@iconify/react';
import discordIcon from '@iconify-icons/mdi/discord';


export const MainListItems = () => {
  return (
<div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Main" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
        <ListItemText primary="Customers" />
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
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Social" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Shop" />
    </ListItem>
  </div>
  )
}

export const SocialListItems = () => {
  return (
    <div>
    <ListSubheader inset>Social</ListSubheader>
    <ListItem button  component={<ExternalLink href='https://facebook.com/groups/SAFGC' />}>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    
    <ListItem button to='https://twitter.com/SanAntonioFGC' >
      <ListItemIcon>
        <TwitterIcon />
      </ListItemIcon>
      <ListItemText primary='Twitter' />
    </ListItem>
    <ListItem button to='https://discord.gg/0zTnPi5aCOdJzpb0' component={Link}>
      <ListItemIcon>
        <Icon icon={discordIcon} style={{ fontSize: 24  }}/>
      </ListItemIcon>
      <ListItemText primary='Discord' />
    </ListItem>
  </div>
  )
}