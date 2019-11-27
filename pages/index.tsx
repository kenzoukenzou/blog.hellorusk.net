import Meta from "next/head";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { whitemode, darkmode } from "../store/actions";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";
import { ModeState, ActionTypes } from "../store/types";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";

interface LayoutProps {
  isDarkMode: boolean,
  whitemode: () => ActionTypes,
  darkmode: () => ActionTypes
}

const Index: React.FC<LayoutProps> = props => {
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
        <meta name="twitter:card" content="summary" />
        <meta property="og:image" content="https://hellorusk.net/mika_square.png" />
        <meta name="twitter:image" content="https://hellorusk.net/mika_square.png" />
      </Meta>
      <PersistGate loading={null} persistor={persistor}>
        <Switch
          className="modechange"
          checked={props.isDarkMode}
          onChange={() => handleChange()}
          value="checked"
          color="primary"
        />
      </PersistGate>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: ModeState) => {
  return {
    isDarkMode: state.isDarkMode,
  };
};

const mapDispatchToProps = {
  whitemode,
  darkmode
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);