import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';

const Creative: React.FC<any> = () => {
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content w-100 flex flex-row display_start_center pl-10 pr-10'>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_0466.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_0515.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_0551.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_0603.jpg")}/></div></div>
                            {/* <div ><div className='p-10'><img className='w-100' src='https://ucb8df0526c73e943fbc20b79455.previews.dropboxusercontent.com/p/thumb/AB7ZJRzSel8ha4Ufp8v08GQNgphjYMMKlgTuhWlrhi3mkD7fSJ2-5wvTsm2ffDA-Yp9HlFnoXM2UPzIftRtIRvwy2jnkrvD1wqKPQb_k4HTWU5DJpE2pV7mTDs-3l4yCQoN4xrHoPbQZLA4Hej8NLhzDoJuc1MY-TFGyU-sMmI853mBQMWY-zbZLukn7u2naUktXVR81BHsloBCuvqFW0uuR7lkDkPMm7Z8HhW2s8R45DmuZh6HbIXxaFjl6ZIx3pq_vLzgOag84HbSDhpIWocRdle0zhdyuzrb5IJytnDP3JJGS3NWUOWUK-zuPiVT-taPpGIDlqmotw1Ifeba_HvRoNZwCK130SBJzBV-dj-qOJUQWE20VSpdeApmRfaXYBFPBkiUsoEmP92IoEXOKKG_tV_vu6guC7iG-oA-PNfz4qJnFFx3wiarHhMEqDrzjYZwz3ioiZjGdejo8xXz5UWHIAZT1ipX3QtLIFdfv6gOa7D-3Pv0hxY-dXfVraTcgB_Y/p.jpeg'/></div></div> */}

                        </div>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1307.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1418.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1455.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1525.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1589.jpg")}/></div></div>

                        </div>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_0203.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_0212.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1838.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1876.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1908.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_1941.jpg")}/></div></div>

                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Creative;
