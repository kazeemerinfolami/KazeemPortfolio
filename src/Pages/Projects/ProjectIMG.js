import React from 'react'

import { ProjectData, ProjectData2, ProjectData3, ProjectData4 } from './ProjectData'

function ProjectIMG() {
    return (
        <div>
            <div className="project-img-wrapper">
                <div >
                    <div>Project: LMS "Learning Management System"</div>
                    <div className="row center">
                        {ProjectData.map((D) => (
                            <div className="card" key={D.projIMG}>
                                <a href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: "C.R.U.D" List of Federal Ministries in Nigeria</div>
                    <div className="row center">
                        {ProjectData2.map((D) => (
                            <div className="card" key={D.projIMG}>
                                <a href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: Data Visualization Platform</div>
                    <div className="row center">
                        {ProjectData3.map((D) => (
                            <div className="card" key={D.projIMG}>
                                <a href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: Random User Profile Generato</div>
                    <div className="row center">
                        {ProjectData4.map((D) => (
                            <div className="card" key={D.projIMG}>
                                <a href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectIMG
