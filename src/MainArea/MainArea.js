import React from 'react';
import './MainArea.css';
import {MdHistory, MdHome, MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater} from 'react-icons/md';
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {FaGripfire, FaFutbol,FaMusic,FaNewspaper} from 'react-icons/fa'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player';

function MainArea(){
    return(
      <div className="MainArea">
          
            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="grey" fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey" fontSize="3rem"/>
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey" fontSize="3rem"/>
                        <div>Subscription</div>
                    </div>
                    </div>
                    <div className="Library">
                    <div className="Quick_Icon">
                        <MdHome color="grey" fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="grey" fontSize="3rem"/>
                        <div>Video Library</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey" fontSize="3rem"/>
                        <div>History</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey" fontSize="3rem"/>
                        <div>Watch Later</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="grey" fontSize="3rem"/>
                        <div>YouTube Clone </div>
                    </div>
                    <div className="Quick_Icon">
                        <GiGamepad color="grey" fontSize="3rem"/>
                        <div>Gaming</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="grey" fontSize="3rem"/>
                        <div>Live</div>
                    </div>
                </div>

                <div className="More_From_Youtube">
                    <div className="Quick_Icon">
                        <FaFutbol color="grey" fontSize="3rem"/>
                        <div>Sports</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="grey" fontSize="3rem"/>
                        <div>Musics</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="grey" fontSize="3rem"/>
                        <div>News</div>
                    </div>
                </div>
                 
            </div>


            <div className="Main">
                <div className="Videos">
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/ZgpSPXUgIQ8?list=RDZgpSPXUgIQ8&t=10"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>YouTube clone(UI)</div>
                       </div>
                       <br></br>
                       <div className="view">
                            52 views.Sep 22, 2021
                       </div>

                   </div>
               

                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/JD7LjR7ftiM?t=22"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> Ajax AmsterdamvBeşiktaş</div>
                       </div>
                       <br></br>
                       <div className="view">
                           10052 views.Oct 12, 2021
                       </div>

                   </div>
                
                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/C3a1sz2Bp_E?t=2"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> AC Milan v Atletico Madrid</div>
                       </div>
                       <br></br>
                       <div className="view">
                           2052 views.Jan 1, 2021
                       </div>

                   </div>
               
                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/2sAT4x944pI?t=238"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>Top 10 arduino projects</div>
                       </div>
                       <br></br>
                       <div className="view">
                       341,538 viewsNov 9, 2020
                       </div>

                   </div>
                

                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/QO_Jlz1qpDw?t=35"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>Arduino Programming</div>
                       </div>
                       <br></br>
                       <div className="view">
                       990,892 viewsAug 15, 2018
                       </div>

                   </div>
                

                
                   <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/XZzG8zLhum8"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> Z Fold 3 </div>
                       </div>
                       <br></br>
                       <div className="view">
                       123,311 views
                       </div>

                   </div>

                    <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/Db6XT4dmr4w?t=5"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> Sorry Samsung </div>
                       </div>
                       <br></br>
                       <div className="view">
                       100,646 viewsSep 28, 2021
                       </div>

                   </div>
                   
                       <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/2tbDNMhQjLE?t=1369"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> Django Framework </div>
                       </div>
                       <br></br>
                       <div className="view">
                       36,986 viewsApr 25, 2020
                       </div>

                   </div>

                     <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/ZgpSPXUgIQ8?list=RDZgpSPXUgIQ8&t=17"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>Despacito cover</div>
                       </div>
                       <br></br>
                       <div className="view">
                       10,366,581 viewsJul 19, 2017
                       </div>

                   </div>
                </div>


                <div className="Videoss">
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/QT3dAxqICC8?t=4"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>3D Printer DIY </div>
                       </div>
                       <br></br>
                       <div className="view">
                       1,444,431 viewsApr 2, 2020
                       </div>

                   </div>
               

                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/3LBTkLsjHGQ?t=8"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> The Ultimate Beginner's</div>
                       </div>
                       <br></br>
                       <div className="view">
                       1,384,554 viewsMar 11, 2017
                       </div>

                   </div>
                
                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/iJEq-vBG1Ws?t=15"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>3D Printer</div>
                       </div>
                       <br></br>
                       <div className="view">
                       199,884 viewsJul 21, 2021
                       </div>

                   </div>
               
                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/4jk6kZIwsQA?t=4"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>15 More Upgrades </div>
                       </div>
                       <br></br>
                       <div className="view">
                       464,176 viewsPremiered Mar 19, 2021
                       </div>

                   </div>
                

                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/uh-8_YDhIVM?t=5"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>DIY 3D Printer</div>
                       </div>
                       <br></br>
                       <div className="view">
                       107,638 viewsPremiered Aug 16, 2021

                       </div>

                   </div>
                

                
                   <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/ZoP80SfGscM?t=18"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> Pro Max vs Samsung Galaxy S21</div>
                       </div>
                       <br></br>
                       <div className="view">
                       4,779,701 views
                       </div>

                   </div>

                    <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/n0r2rENgvwY?t=4"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> Vivo X70 Pro Plus </div>
                       </div>
                       <br></br>
                       <div className="view">
                       1,248,123 views
                       </div>

                   </div>
                   
                       <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/qN_ZtncGW4g?t=3"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> iPhone 13 Pro Max </div>
                       </div>
                       <br></br>
                       <div className="view">
                       914,225 views
                       </div>

                   </div>

                     <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/nfzilid1Tcc?t=4"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>My iPhone 13 Pro </div>
                       </div>
                       <br></br>
                       <div className="view">
                       152,573 viewsSep 27, 2021
                       </div>

                   </div>
                </div>

                <div className="Videoes">
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/aZtEqtTpO24?t=52"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>iPhone 13 Unboxing  </div>
                       </div>
                       <br></br>
                       <div className="view">
                       268,217 viewsSep 21, 2021
                       </div>

                   </div>
               

                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/XdvrLPtbppc?t=8"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>  iPad MINI </div>
                       </div>
                       <br></br>
                       <div className="view">
                       151,857 viewsSep 22, 2021
                       </div>

                   </div>
                
                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/U2rzBFX1Z8g?t=4"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>mental health</div>
                       </div>
                       <br></br>
                       <div className="view">
                       12,396 viewsOct 1, 2021
                       </div>

                   </div>
               
                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/dui_S4SuXtE?t=10"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>Best BUDGET  </div>
                       </div>
                       <br></br>
                       <div className="view">
                       62,437 viewsSep 7, 2021
                       </div>

                   </div>
                

                
                   <div className="Video">
                       <ReactPlayer
                        url="https://youtu.be/Od20Jhv7Ejg?t=7"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>iOS 15 is Out!</div>
                       </div>
                       <br></br>
                       <div className="view">
                       1,008,261 views

                       </div>

                   </div>
                

                
                   <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/N9Dh7DAJJZI?t=23"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> iOS 15 Hands On</div>
                       </div>
                       <br></br>
                       <div className="view">
                       78,704 viewsJul 24, 2021
                       </div>

                   </div>

                    <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/8jrHYyoKyAY?t=5"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> iPhone 13 Lineup </div>
                       </div>
                       <br></br>
                       <div className="view">
                       91,090 viewsSep 21, 2021
                       </div>

                   </div>
                   
                       <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/U0uudQLrj58?t=7"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div> 13 vs iPhone 12 </div>
                       </div>
                       <br></br>
                       <div className="view">
                       181,729 viewsSep 26, 2021
                       </div>

                   </div>

                     <div className="Video">

                       <ReactPlayer
                        url="https://youtu.be/EqYV91Vi7pw?t=28"
                        height="170px"
                        width="280px"
                       controls />
                       <br></br>
                       <div className="logo">
                            <img src="/images/logo.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}} />
                            <div>mini 6 vs iPhone 13 </div>
                       </div>
                       <br></br>
                       <div className="view">
                       75,108 viewsSep 26, 2021
                       </div>

                   </div>
                </div>
                </div>
      </div>
    )
}
export default MainArea;