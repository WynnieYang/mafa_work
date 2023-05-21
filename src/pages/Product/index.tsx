import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';

const Product: React.FC<any> = () => {
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content w-100 flex flex-row display_start_center pl-10 pr-10'>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src='https://uc6fbcb13dc540609db427bc8d1d.previews.dropboxusercontent.com/p/thumb/AB4dHYNC4moHyh_W4bK6yThBXqepaj9z4SgKTTD3u_telypUjLPRkhYDY2yL4KjlSyYPoxxAcX5Pgy28Z4ufalpHPj4fpMUVUKDB7gHASqOQ17QfQVj9dpFFA5fTCYINgw7oixVCNMe6j2KtPvlr8fEW_Eo1lUsMnxH9bqhs7gPtiAS8f9-wkSdGPMbO9t9gROEsH1k6PZDH-2o4c6AclhekePW55KU9RdHjyg0Jbvq6LNDe8RukqkMXB2qtlzwDwoL1hgQmCRFm67NDhEMT-g8dBw8SWEHi4TyTGJkny5dsfNaoZtqaz20pnP8Ycti1wYIVn4y4pQTBIDnfruLIUTzyVKYYFILn5ymlbpuA--e41V6KdTpNeATM1zYBl50JNyIr2xjzsEJ4KBET9sDX6IcPu4qbqG3ba3XYFXtY1Sg3lnheXAw7nyc9VUfg9PN4NAU/p.jpeg'/></div></div>
                        </div>
                        <div className='flex flex-column w-40per'>
                        </div>
                        <div className='flex flex-column w-40per'>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Product;
