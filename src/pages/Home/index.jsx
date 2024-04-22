import bannerMob from '../../assets/banner-mob.png';
import bannerPc from '../../assets/banner-pc.png';
import useWindowSize from '../../hooks/useWindowSize';
function Home() {
    const { width } = useWindowSize();
  return (
    <div>
        <img src={ width < 750 ? bannerMob : bannerPc} style={{width:'100%'}} alt="banner" />
    </div>
  )
}

export default Home;
