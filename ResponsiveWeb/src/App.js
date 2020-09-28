import React from 'react';
import './style.css';
function App() {
    const array = [
        'https://lh3.googleusercontent.com/proxy/_yZwoTYRADH1RQ-LJysePJardsYkFxSudpwvJYKkE1RoZ1cOV0mM7lMgVBksT86IOy0nQr5U7KnthcW4Rqbbz90-EmAGT-fkcegyXH7YxfHiwX55q7whuwxS',
        'https://t1.daumcdn.net/cfile/tistory/999A513F5DDD1DC10C',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX_h3UXoWBFryDaIhzOE-s1XPMYlKUA24Oew&usqp=CAU',
    ];
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
            {/*Video info */}
            <section className="info">
                {/*Meta Data*/}
                <div className="metadata">
                    <ui className="hashtags">
                        <li>dream</li>
                        <li>dream</li>
                        <li>dream</li>
                    </ui>
                    <div className="titleAndButton">
                        <span className="title">
                            나 다시 또 설레어 이렇게 너를 만나서 함께 하고 있는
                            지금 이 공기가 다시는 널 볼 순 없을 거라고 추억일
                        </span>
                        <button className="moreBtn">
                            <i className="fas fa-caret-down"></i>
                        </button>
                    </div>
                    <div className="views">
                        <span className="views">1M view</span>
                    </div>
                </div>

                {/*Action*/}
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

                {/*채널정보*/}
                <div className="channel">
                    <div className="metadata"></div>
                    <div className="subscribe">
                        <img
                            src="https://pds.joins.com/news/component/htmlphoto_mmdata/201901/04/ad58532f-6b1f-4b0f-a248-c91ad93b7ca5.jpg"
                            alt=""
                        />
                        <div className="info">
                            <span className="name">동의대학교</span>
                            <span className="subscribers">1M SUBSCRIBER</span>
                        </div>
                    </div>
                    <button className="subscribe">subscribe</button>
                </div>
            </section>
            <section className="UpNext">
                <span className="title">Up Next</span>
                <ul>
                    <li className="item">
                        <img src={array[0]} alt="" />
                        <div className="info">
                            <span className="title">
                                안녕하세요 웹반응형 입문을하는중입니다
                            </span>
                            <span className="name">Mokey_D.우</span>
                            <span className="views">11M views</span>
                            <button className="moreBtn">
                                <i className=" fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                    </li>
                    <li className="item">
                        <img src={array[1]} alt="" />
                        <div className="info">
                            <span className="title">
                                CHEERS 입문을하는중입니다
                            </span>
                            <span className="name">Mokey_D.우</span>
                            <span className="views">11M views</span>
                            <button className="moreBtn">
                                <i className=" fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                    </li>
                    <li className="item">
                        <img src={array[2]} alt="" />
                        <div className="info">
                            <span className="title">
                                안녕하세요 웹반응형 그렇답니다
                            </span>
                            <span className="name">Mokey_D.우</span>
                            <span className="views">11M views</span>
                            <button className="moreBtn">
                                <i className=" fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default App;
