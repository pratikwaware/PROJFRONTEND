import React from 'react'
import SideDrawer from '../components/SideDrawer';
import PageUnderConstruction from '../pages/PageUnderConstruction';

const Orders = () => {
  return <SideDrawer children={<PageUnderConstruction />} />
}

export default Orders;