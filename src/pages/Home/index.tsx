import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';

const Home: React.FC<any> = () => {
    const [imgShow,setImageShow] = useState(false);
    const [trianglevanish,setTriangleVanish] = useState(false);
    useEffect(()=>{
        setTimeout(function() {
            setImageShow(true)
          }, 1200);
          setTimeout(function() {
            setTriangleVanish(true)
          }, 1500);
    },[])
    const [isHover,setIsHover] = useState({show: false, width: 0, top: 0, left: 0, right:0},)
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content w-100 flex flex-row display_start_center'>
                        <div className={`${trianglevanish ? '' : 'triangle'}`} style={{position:'absolute',left:'45%',top:'40%'}}></div>
                        <div className=''><img className={`w-100 ${imgShow ? 'img-opacity' : 'opacity-0'}`} src='https://uc5c5733d49bbab186e9a445d4e5.previews.dropboxusercontent.com/p/thumb/AB7HD-9HjTdAtQY1y4IOLmogbmdlF5X86Brkt1uiNg9qCD4rNBuR4eRJDzsigXztcFljDg-8B03ggAnygkc4uCXkkgQPF-cOI6SI_DB_VueCbFVaXRVmAeCFVfNyaouuUKJ9HZHt-DK00ilrEzGrWlUlW5XDqQdwjX8fMni36kqYr2gN4PUoIg0PbhWiP2uZMBh2vY-uTF9p4lb2MZM-GDAACiHcwxL3OjdhBNSy-5MGGAAZdzGkoynAZDe_Pn1LQpQJitkBCYWfZPvLbcwJPZQz3Q9Pdk-l3JrZYXhYb5lHFi2jX52hE9tVJ6Jb9U1uXSqunnCBrsIXxxQ8oixgE1szx6VNoUOzXvHxnSWR76GCKZU-nIwkEsdjrUNlcH5fQC9wG4sKvc84wsT9NyEvxpiKIkqFKBqitmKe7JfDvAAx0xh3YNQXD_HBgq31-A2U9cclo26NXPT21NSTi0xJMokN/p.jpeg'></img></div>
                    </div>
                </div>
                
            </Grid>
        </Grid>
    )
}

export default Home;