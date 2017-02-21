// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../css/index.css");


const images = {
  pinterestLogoPng: require("../assets/pinterest-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "#fff",
  tertiary: "#c75a2c",
  quartenary: "#cecece"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading>
            <svg viewBox="0 0 600 100">
              <symbol id="s-text1">
                <text textAnchor="middle" x="50%" y="50%" dy=".35em">Bitmap sprites</text>
              </symbol>
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
            </svg>
            <svg viewBox="0 0 600 50">
              <symbol id="s-text2">
                <text textAnchor="middle" x="50%" y="50%" dy=".35em">to</text>
              </symbol>
              <use className="text text-small" xlinkHref="#s-text2" />
              <use className="text text-small" xlinkHref="#s-text2" />
              <use className="text text-small" xlinkHref="#s-text2" />
              <use className="text text-small" xlinkHref="#s-text2" />
              <use className="text text-small" xlinkHref="#s-text2" />
            </svg>
            <svg viewBox="0 0 600 100">
              <symbol id="s-text3">
                <text textAnchor="middle" x="50%" y="50%" dy=".35em">SVGS</text>
              </symbol>
              <use className="text" xlinkHref="#s-text3" />
              <use className="text" xlinkHref="#s-text3" />
              <use className="text" xlinkHref="#s-text3" />
              <use className="text" xlinkHref="#s-text3" />
              <use className="text" xlinkHref="#s-text3" />
            </svg>
          </Heading>
          <Text textColor="secondary" margin="40 0 0 0">
            <span className="faded">by</span> Christian Vuerings</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={3} textFont="primary" textColor="secondary" textAlign="left">Issues with bitmap sprites</Heading>
          <List>
            <ListItem>
              <strong>Maintainability</strong>
              <div className="listitem-description">1 file per color / size / dpi resolution</div>
            </ListItem>
            <ListItem>
              <strong>Performance</strong>
              <div className="listitem-description">Extra HTTPS request(s)</div>
              <div className="listitem-description">Bigger file size</div>
            </ListItem>
            <ListItem>
              <strong>Animation</strong>
              <div className="listitem-description">Hard to animate</div>
            </ListItem>
            <ListItem>
              <strong>Accessiblity</strong>
              <div className="listitem-description">Not machine readable</div>
            </ListItem>
            <ListItem>
              <strong>Scaling</strong>
              <div className="listitem-description">Pixilated when zooming</div>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={3} textFont="primary" textColor="secondary" textAlign="left" margin="0 0 10 0">Issues with bitmap sprites</Heading>
          <img className="pinterest-logo-png" src={images.pinterestLogoPng} />
          <svg className="pinterest-logo-svg" height="250" width="250" viewBox="0 0 16 16" aria-label="Startpagina" role="img" data-reactid="2">
            <path d="M5.644 15.648C6.39 15.877 7.18 16 8 16a8 8 0 1 0-2.847-.521c-.073-.625-.151-1.655.017-2.378.145-.621.934-3.958.934-3.958s-.238-.477-.238-1.183c0-1.107.642-1.934 1.44-1.934.68 0 1.008.51 1.008 1.122 0 .683-.435 1.705-.66 2.652-.187.792.398 1.439 1.18 1.439 1.416 0 2.504-1.493 2.504-3.647 0-1.907-1.37-3.24-3.327-3.24-2.266 0-3.596 1.7-3.596 3.456 0 .684.264 1.418.593 1.817a.238.238 0 0 1 .055.229c-.06.252-.195.792-.221.903-.035.146-.116.177-.267.107C3.581 10.4 2.96 8.946 2.96 7.778c0-2.512 1.825-4.82 5.262-4.82 2.763 0 4.91 1.97 4.91 4.6 0 2.745-1.73 4.954-4.133 4.954-.807 0-1.566-.42-1.825-.914 0 0-.4 1.52-.496 1.893-.188.722-.71 1.637-1.033 2.157z" data-reactid="4" />
          </svg>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
