import bannerMob from "../../assets/banner-mob.png";
import bannerPc from "../../assets/banner-pc.png";
import useWindowSize from "../../hooks/useWindowSize";
import money from "../../assets/money.png";
import bulb from "../../assets/bulb.png";
import scope from '../../assets/scope.png';
import security from '../../assets/security.png';
import wallet from '../../assets/wallet.png';
import lock from '../../assets/lock.png';
import doc from '../../assets/doc.png';
import hand from '../../assets/hand.png';
import purchase from '../../assets/purchase.png';
import line from '../../assets/line.png';
import lineMob from '../../assets/lineMob.png';
import council from '../../assets/council.png';
import roadMap from '../../assets/roadmap.png'
import styles from "./index.module.css";
function Home() {
  const { width } = useWindowSize();
  return (
    <div className={styles.main_container}>
      <img
        src={width < 750 ? bannerMob : bannerPc}
        style={{ width: "100%" }}
        alt="banner"
      />
      <div className={styles.introduce}>
        <header className={styles.introduce_header}>
        WHY CHOOSE BTC BETA?
        </header>
        <div className={styles.introduce_item}>
          <div className={styles.introduce_item_title}>
            <img src={money} alt="" />
            <div>CORE BUSINESS</div>
          </div>
          <div className={styles.introduce_item_desc}>
            We are the first IDO platform focused on the Bitcoin ecosystem,
            providing an integrated environment that allows projects to issue
            tokens, inscriptions, runes, NFT and other assets on the Bitcoin
            main chain and its second-layer network
          </div>
        </div>
        <div className={styles.introduce_item}>
          <div className={styles.introduce_item_title}>
            <img src={bulb} alt="" />
            <div>TECHNOLOGICAL INNOVATION</div>
          </div>
          <div className={styles.introduce_item_desc}>
            We creatively developed the BRC202 protocol, which allows project
            teams to issue tokens through paid engraving. This not only solves
            the cost problem in the traditional inscription process, but also
            provides a more flexible and economical financing method for the
            project.
          </div>
        </div>
        <div className={styles.introduce_item}>
          <div className={styles.introduce_item_title}>
            <img src={scope} alt="" />
            <div>SERVICE SCOPE</div>
          </div>
          <div className={styles.introduce_item_desc}>
          BTC BETA PROVIDES DECENTRALIZED INDEXING PROTOCOLS AND AI-ASSISTED QUERY SERVICES. THESE ARE INNOVATIVE SERVICES THAT LOWER THE DATA ACCESS THRESHOLD FOR WEB3 DEVELOPERS.
          </div>
        </div>
        <div className={styles.introduce_item}>
          <div className={styles.introduce_item_title}>
            <img src={security} alt="" />
            <div>SECURITY AND DECENTRALIZATION</div>
          </div>
          <div className={styles.introduce_item_desc}>
          BTC BETA LEVERAGES THE SECURITY AND DECENTRALIZATION FEATURES OF THE BITCOIN NETWORK TO PROVIDE A SOLID FOUNDATION FOR PROJECT ISSUANCE AND FINANCING.
          </div>
        </div>
      </div>
      <div className={styles.feature}>
        <header className={styles.feature_header}>FEATURES OF BRC-202</header>
        <div className={styles.feature_main}>
          <div className={styles.feature_item}>
            <div className={styles.feature_item_title}>HIGH COMPATIBILITY</div>
            <div className={styles.feature_item_content}>
              BRC-202 IS HIGHLY COMPATIBLE WITH BRC-20 AND RUNES PROTOCOLS, PROVIDING DEVELOPERS WITH A FAMILIAR ENVIRONMENT AND LOWERING THE TECHNICAL BARRIER TO ENTRY.
            </div>
          </div>
          <div className={styles.feature_item}>
            <div className={styles.feature_item_title}>INNOVATIVE CONCEPT OF PAID ENGRAVING</div>
            <div className={styles.feature_item_content}>
              OFFERS A FLEXIBLE AND ECONOMICAL FINANCING METHOD, OPTIMIZING THE FUNDRAISING PROCESS.
            </div>
          </div>
          <div className={styles.feature_item}>
            <div className={styles.feature_item_title}>DECENTRALIZED FINANCING AND ISSUANCE</div>
            <div className={styles.feature_item_content}>
            LEVERAGES THE DESIGN PRINCIPLES OF DECENTRALIZATION AND SMART CONTRACTS TO ENSURE FAIR AND TRANSPARENT FINANCING ACTIVITIES, WITH AUTOMATED TOKEN DISTRIBUTION.
            </div>
          </div>
          <div className={styles.feature_item}>
            <div className={styles.feature_item_title}>ENHANCED INTEROPERABILITY</div>
            <div className={styles.feature_item_content}>
              FACILITATES CROSS-CHAIN INTERACTIONS AND LEVERAGES LAYER2 ADVANCEMENTS, REDUCING TRANSACTION COSTS AND BROADENING MARKET REACH.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.step}>
        <header className={styles.step_header}>STEP FOR BTC BETA IDO</header>
        <section className={styles.step_content}>
            <div className={styles.step_item}>
              <div className={styles.step_item_1}></div>
              <div className={styles.step_item_2}></div>
              <div className={styles.step_item_3}></div>
              <div style={{marginTop:'127rem'}}>BUY & HOLD</div>
              <div>PLATFORM TOKEN</div>
              <img style={{marginTop:'105rem',width:'167rem'}} src={hand} />
              <div className={styles.step_item_4}></div>
              <div className={styles.step_item_5}></div>
            </div>
            <div className={styles.step_item}>
              <div className={styles.step_item_1}></div>
              <div className={styles.step_item_2}></div>
              <div className={styles.step_item_3}></div>
              <div style={{marginTop:'77rem'}}>
                <div>GO TO</div>
                <div>BTC BETA</div>
                <div style={{marginTop:'20rem'}}>WEBSITE</div>
                <div>AND CONNECT</div>
                <div>YOUR WALLET</div>
              </div>
              <img style={{marginTop:'55rem',width:'149rem'}} src={wallet} />
              <div className={styles.step_item_4}></div>
              <div className={styles.step_item_5}></div>
            </div>
            <div className={styles.step_item}>
              <div className={styles.step_item_1}></div>
              <div className={styles.step_item_2}></div>
              <div className={styles.step_item_3}></div>
              <div style={{marginTop:'137rem'}}>
                <div>LOCK YOUR</div>
                <div>PLATFORM TOKEN</div>
              </div>
              <img style={{marginTop:'115rem',width:'149rem'}} src={lock} />
              <div className={styles.step_item_4}></div>
              <div className={styles.step_item_5}></div>
            </div>
            <div className={styles.step_item}>
              <div className={styles.step_item_1}></div>
              <div className={styles.step_item_2}></div>
              <div className={styles.step_item_3}></div>
              <div style={{marginTop:'122rem'}}>
                <div>COMPLETE</div>
                <div>WHITELIST</div>
                <div>REQUIREMENT</div>
              </div>
              <img style={{marginTop:'100rem',width:'121rem'}} src={doc} />
              <div className={styles.step_item_4}></div>
              <div className={styles.step_item_5}></div>
            </div>
            <div className={styles.step_item}>
              <div className={styles.step_item_1}></div>
              <div className={styles.step_item_2}></div>
              <div className={styles.step_item_3}></div>
              <div style={{marginTop:'122rem'}}>
                <div>PURCHASE AND</div>
                <div>CLAIM THE IDO</div>
                <div>TOKEN</div>
              </div>
              <img style={{marginTop:'100rem',width:'121rem'}} src={purchase} />
              <div className={styles.step_item_4}></div>
              <div className={styles.step_item_5}></div>
            </div>
        </section>
      </div>
      <div className={styles.fund}>
        <header className={styles.fund_header}>HOW TO FUND YOUR PROJECT ON BTC BETA</header>
        <main className={styles.fund_content}>
          {
            width < 750 ? <>
            <img src={lineMob} alt=""  className={styles.fund_img} />
            <div className={styles.fund_item1}>
              <header className={styles.fund_item_header}>APPLICATION</header>
              <section className={styles.fund_item_content}>
                <div>PROJECTS APPLY ON THE</div>
                <div>BTC BETA GOVERNANCE PORTAL</div>
              </section>
            </div>
            <div className={styles.fund_item2}></div>
            <div className={styles.fund_item3}></div>
            <div className={styles.fund_item4}></div>
            <div className={styles.fund_item5}></div>
            </> : <>
            <div className={styles.fund_row1}>
            <div>
              <header className={styles.fund_item_header}>APPLICATION</header>
              <section className={styles.fund_item_content}>
                <div>PROJECTS APPLY ON THE</div>
                <div>BTC BETA GOVERNANCE PORTAL</div>
              </section>
            </div>
            <div>
                <header className={styles.fund_item_header}>THE BTC BETA COUNCIL</header>
                <section className={styles.fund_item_content}>
                  <div>THE DAO COUNCIL RECEIVES THE</div>
                  <div>SELECTED PROJECTS AND MAKES</div>
                  <div>A FINAL DECISION</div>
                </section>
            </div>
            <div>
                <header className={styles.fund_item_header}>IDO OR NFT SALE</header>
                <section className={styles.fund_item_content}>
                  <div>LAUNCH YOUR TOKEN OR NFT</div>
                  <div>COLLECTION ON THE OFFICIAL</div>
                  <div>BTC BETA WEBSITE</div>
                </section>
            </div>
          </div>
          <img src={line} alt=""  className={styles.fund_img} />
          <div className={styles.fund_row2}>
            <div>
                <header className={styles.fund_item_header}>DUE DILIGENCE</header>
                <section className={styles.fund_item_content}>
                  <div>THE BTC BETA RESEARCH TEAM</div>
                  <div>REVIEWS APPLICATIONS AND</div>
                  <div>MOVES SELECTED PROJECTS TO</div>
                  <div>THE NEXT STEP</div>
                </section>
            </div>
            <div>
                <header className={styles.fund_item_header}>PRE-RAISE SUPPORT</header>
                <section className={styles.fund_item_content}>
                  <div>ONCE APPROVED, PROJECTS GET THE</div>
                  <div>FULL BTC BETA TEAM SUPPORT</div>
                  <div>LEADING UP TO THE SALE</div>
                </section>
            </div>
          </div>
            </>
          }
          
        </main>
      </div>
      <div className={styles.council}>
        <header className={styles.council_header}>THE BTC BETA COUNCIL</header>
        <main className={styles.council_content}>
          <div className={styles.council_section}>
            <section>AN ELITE CONSORTIUM OF INDUSTRY-LEADING DECISION MAKERS</section>
            <section>USERS WHO LOCK 10K $ Y202 CAN ENTER THE BTC BETA DAO COUNCIL. BTC BETA ADOPTS A VOTING MECHANISM FOR CURRENCY LISTING. DAO COUNCIL MEMBERS HAVE THE POWER TO DECIDE WHICH PROJECTS WILL BE LAUNCHED ON BTC BETA THROUGH VOTING. OUR COUNCIL AND INTERNAL ANALYST TEAM REVIEW PROJECTS THROUGH A STRICT DUE DILIGENCE PROCESS.</section>
            <button className={styles.council_btn}>JOIN THE COUNCIL</button>
          </div>
          <img src={council} alt="" className={styles.council_img} />
        </main>
      </div>
      <div className={styles.roadMap}>
        <header className={styles.roadMap_header}>ROADMAP</header>
        <div className={styles.roadMap_title_list}>
          <div>Q2.2024</div>
          <div>Q3.2024</div>
          <div>Q4.2024</div>
          <div>Q1.2025</div>
        </div>
        <img src={roadMap} alt="" className={styles.roadMap_img} />
        <div className={styles.roadMap_content}>
          <div className={styles.roadMap_item}>
              <div>BETA BUNNIES NFTS LAUNCHED</div>
              <div>PUBLIC CASTING OF BTC BETA EXCLUSIVE TOKEN BEGINS</div>
              <div>BTC BETA IDO PLATFORM LAUNCHED AND OFFICIALLY ACCEPTS PROJECT COIN APPLICATIONS</div>
          </div>
          <div className={styles.roadMap_item}>
              <div>CONTINUE TO OPTIMIZE THE IDO PLATFORM TO ATTRACT MORE PROJECTS AND INVESTORS.</div>
              <div>START COMMUNITY GOVERNANCE MECHANISM, ALLOWING PLATFORM TOKEN HOLDERS TO VOTE ON KEY PLATFORM MATTERS.</div>
              <div>INTRODUCE DECENTRALIZED INDEXING PROTOCOL TO ENHANCE DATA QUERYING AND HANDLING ABILITIES OF DEVELOPERS.</div>
          </div>
          <div className={styles.roadMap_item}>
              <div>DEVELOP A PROTOCOL FOR SEAMLESS CROSS-CHAIN TRANSFER BETWEEN BRC20 AND ERC20 ASSETS.</div>
              <div>LAUNCH SMART CONTRACT AUDIT SERVICES TO ENHANCE THE SECURITY OF IDO PROJECTS ON THE PLATFORM.</div>
              <div>DEVELOP NEW FEATURES, SUCH AS ENHANCED AI QUERY SERVICES, TO IMPROVE USER EXPERIENCE.</div>
          </div>
          <div className={styles.roadMap_item}>
              <div>FURTHER EXPAND THE DEVELOPMENT OF THE CROSS-CHAIN PROTOCOL, SUPPORTING MORE EVM NETWORKS.</div>
              <div>RESEARCH AND DESIGN BITCOIN LAYER 2 NETWORK ARCHITECTURE IN PREPARATION FOR THE IMPLEMENTATION OF SMART CONTRACT FUNCTIONALITY.</div>
              <div>ADD NEW PARTNERSHIP RELATIONSHIPS TO EXPAND THE SERVICE RANGE OF THE ECOSYSTEM.</div>
          </div>
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.subscribe_header}>NEVER WANT TO MISS A SALE</div>
        <div className={styles.subscribe_content}>
          <div className={styles.subscribe_title}>
            <div>SIGN UP FOR OUR NEWSLETTER AND GET</div>
            <div>THE LATEST NEWS ANDIVPDATES.</div>
          </div>
          <form action="" className={styles.subscribe_form}>
            <div>
              <input type="text" placeholder="EMAIL ADDRESS" />
              <span style={{color:'#e53434'}}>*</span>
            </div>
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
