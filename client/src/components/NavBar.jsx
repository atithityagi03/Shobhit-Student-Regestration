
import {AppBar, Toolbar, styled } from '@mui/material';  //Import AppBar, Toolbar, And Styled From MaterialUI
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111

`
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 30px;
    color: inherit;
    text-decoration: none;
`


const NavBar = () => {
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Shobhit University</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add User</Tabs>
                <Tabs to='/about'>About US</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;