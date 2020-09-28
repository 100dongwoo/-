import React from 'react';

function App() {
    return (
        <div className="App">
            <header>
                <dlv className="logo">
                    <i className="fab fa-youtube"></i>
                    <span className={'title'}>Youtube</span>
                </dlv>
                <div className="icons">
                    <i className="fas fa-search"></i>
                    <i className=" fas fa-ellipsis-v"></i>
                </div>
            </header>
            <section className="player">
                <video
                    autoPlay
                    controls
                    src="https://cdn.videvo.net/videvo_files/video/premium/video0121/small_watermarked/2%20Box%20snd%20II_preview.webm"
                />
            </section>
            <section className="info">
                <div className="metadata">
                    <ui className="hashtages">
                        <li>dream</li>
                        <li>dream</li>
                        <li>dream</li>
                    </ui>
                    <div className="titleAndButton">
                        <span className="title">동우동우</span>
                        <button className="moreBtn">
                            <i className="fas fa-caret-down"></i>
                        </button>
                    </div>
                    <div className="views">
                        <span className="views">1M view</span>
                    </div>
                </div>

                <ui className="actions">
                    <li>
                        <button>
                            <i className="fas fa-thumbs-up"></i>
                            <span>1K</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fas fa-thumbs-down"></i>
                            <span>0</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fas fa-share"></i>
                            <span>Share</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fas fa-plus"></i>
                            <span>Save</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fab fa-font-awesome-flag"></i>
                            <span>Report</span>
                        </button>
                    </li>
                </ui>
                <div className="channel"></div>
            </section>

            <section className="UpNext"></section>
        </div>
    );
}

export default App;
