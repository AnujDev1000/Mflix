import React from 'react'
import LogoImg from '../components/imgComponents/LogoImg'

const HomeProviders = ({providers}) => {
    return (
        <div className="home-providers position-relative">
            <div className="row g-0">
                {providers.map(provider => 
                    <>
                        {provider && provider.logo_path ? 
                            <div className="col-1">
                                <div className="logo-card">
                                    <LogoImg logo_path={provider.logo_path} />
                                </div>
                            </div>
                            : null
                        }
                    </>        
                )}
            </div>
        </div>
    )
}

export default HomeProviders
