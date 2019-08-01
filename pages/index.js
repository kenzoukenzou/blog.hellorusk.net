import Meta from "next/head";
import Header from "../components/header";
import Main from "./main";
import Footer from "../components/footer";
import { whitemode, darkmode } from "../store/actions";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";


const Index = props => {
  const handleChange = () => {
    props.isDarkMode ? props.whitemode() : props.darkmode();
  };

  return (
    <div>
      <Meta>
        <meta name="google-site-verification" content="NukXzTqPewV5uTImQdXdiNq4ZKc6d3I65Bq9amzEM1s" />
        <title key="title">HelloRusk Official Website</title>
        <meta property="og:title" content="HelloRusk Official Website" /> 
        <meta property="og:url" content="/" /> 
        <meta property="og:description" content="HelloRuskの公式ウェブサイト" />
      </Meta>
      <Switch
        className="modechange"
        checked={props.isDarkMode}
        onChange={() => handleChange()}
        value="checked"
        color="primary"
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isDarkMode: state.isDarkMode,
  };
};

const mapDispatchToProps = {
  whitemode,
  darkmode
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);