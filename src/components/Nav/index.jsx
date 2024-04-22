import logo from "/public/logo.png";
import { Dropdown, Row, Col } from "antd";
import useWindowSize from '../../hooks/useWindowSize';

import styles from './index.module.css'

function Nav() {
  const { width } = useWindowSize();

  const PARTICIPATE = [
    {
      key: "1",
      label: "PROJECTS",
    },
    {
      key: "2",
      label: "QUESTS",
    },
    {
      key: "3",
      label: "PORTFOLIO",
    },
  ];

  const RESOURCES = [
    {
        key: "1",
        label: "GITBOOK",
      },
      {
        key: "2",
        label: "SUPPORT",
      }
  ]

  return (
      <Row className={styles.nav_row}>
        <Col><img src={logo} className={styles.nav_logo} alt="logo" /></Col>
        {
            width < 750 ? null : <Row className={styles.nav_list}>
            <Col>
            <Dropdown
                menu={{
                items: PARTICIPATE,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>PARTICIPATE</a>
            </Dropdown>
            </Col>
            <Col>
            <Dropdown
                menu={{
                items: RESOURCES,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>RESOURCES</a>
            </Dropdown>
            </Col>
            <Col><a onClick={(e) => e.preventDefault()}>Beta Bunnies</a></Col>
            <Col><a onClick={(e) => e.preventDefault()}>LOCK PLATFORM TOKEN</a></Col>
            <Col><a onClick={(e) => e.preventDefault()}>DATA SERVICE</a></Col>
            <Col><a onClick={(e) => e.preventDefault()}>LAUNCH WITH BTC BETA</a></Col>
            <Col><a onClick={(e) => e.preventDefault()}>About Us</a></Col>
        </Row>
        }
        <Col>
            <button className={styles.connect_btn}>CONNECT WALLET</button>
        </Col>
      </Row>
  );
}

export default Nav;
