import React from 'react'
import './CardGrp.css';

const UseEffectAPI = ({waiting,users}) => {
    return waiting ? (   
          <div className="imgdiv">
            <img src="https://1.bp.blogspot.com/-yIhXlQfYN1E/WMksG192LLI/AAAAAAAAA9w/txsqdQfykVksDEFshayeN54c0Gu6C3AAwCLcB/s1600/glow.gif" alt="Waiting"/>
            <h2>Loading</h2>
          </div>
        ) : 
        (
        <div className="container text-center">
            <div className="row p-0">
                {users.length &&
                users.map((user) => {
                return (
                    
                        <div className="col-md-4 col-12 py-2" key={user.id}>
                            <div className="card">
                                <img src={user.avatar} alt="images" className="img-fluid"/>
                                    <div className="content">
                                        <h2>
                                            {user.first_name} {user.last_name}
                                        </h2>
                                        <a href="#">{user.email}</a>
                                    </div>
                            </div>
                        </div>
                    
                    );
            
                })}
            </div>
        </div>
        )
}

export default UseEffectAPI;