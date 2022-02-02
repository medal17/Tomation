import React from 'react';
import { useHistory } from 'react-router-dom';


function DashbordCard({ icon, title, count, link }) {
    const history = useHistory();

    return <div className='  col-lg-4  mt-5' onClick={(e) => history.push(`${link}`)}  >
        <div className='row  bg-white   px-2 m-1' style={{ borderRadius: '40px', padding:'1.7rem', cursor: 'pointer' }}>
            <div className style={{ borderRadius: '50px', backgroundColor: '#FFF2EB', width: '3rem', height: '3rem', paddingTop:'0.8rem' }}>
                <div className='center' style={{ margin: '0 auto' }}>{icon}</div>
            </div>
            <div className='col-lg-12 col-md-12' >
                <div className='row text-center  text-small col-md-12 col-xs-12 p-2' style={{ fontWeight: '900', fontSize: '0.8rem', color: '#7C7C7C' }}>
                    {title}
                </div>
                <div className='center row' style={{ fontWeight: '600', fontSize: '18px', color: '#F55608' }}>{count}</div>
            </div>

        </div>
    </div>;
}

export default DashbordCard;
