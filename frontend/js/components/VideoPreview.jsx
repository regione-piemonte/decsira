/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const React = require('react');
const I18N = require('@mapstore/components/I18N/I18N');
const { Button } = require("react-bootstrap");

class VideoPreview extends React.Component {

    render() {
        return (
            <div className="container">  
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h2><I18N.Message msgId={"Homepage.videoTitle"}/></h2>
                        <p><I18N.Message msgId={"Homepage.videoDesc"}/></p>
                    </div>      
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <iframe width="500" height="300"
                            src='https://vm-podcast.csi.it/mlab/projects/2025/Video_Sistema_Conoscenze_Ambientali/out/Video_Sistema_Conoscenze_Ambientali.mp4'
                            frameborder='0'
                            allowFullScreen="true" 
                            webkitallowfullscreen="true" 
                            mozallowfullscreen="true"
                            title='Videoguida SCA'
                        />
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <iframe width="250" height="150" style={{"textAlign": "left"}}
                                    src='https://vm-podcast.csi.it/mlab/projects/2025/Video_Sistema_Conoscenze_Ambientali/out/Video_Sistema_Conoscenze_Ambientali.mp4'
                                    frameborder='0'
                                    allowFullScreen="true" 
                                    webkitallowfullscreen="true" 
                                    mozallowfullscreen="true"
                                    title='Videoguida SCA'
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <iframe width="250" height="150" style={{"textAlign": "left"}}
                                    src='https://vm-podcast.csi.it/mlab/projects/2025/Video_Sistema_Conoscenze_Ambientali/out/Video_Sistema_Conoscenze_Ambientali.mp4'
                                    frameborder='0'
                                    allowFullScreen="true" 
                                    webkitallowfullscreen="true" 
                                    mozallowfullscreen="true"
                                    title='Videoguida SCA'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <Button onClick={() => {this.goToVideo(); }} className="btn btn-video btn-default">
                            <I18N.Message msgId={"Homepage.videoBtn"}/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    goToVideo = () => {
        this.context.router.history.replace("/video/");
    };
}

module.exports = VideoPreview;
