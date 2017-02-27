// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const codeSVGExample = require("../assets/svgexample");

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
      <Deck transition={[]} transitionDuration={0} progress="bar" theme={theme}>
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
          <Heading size={3} textFont="primary" textColor="secondary" textAlign="left">Why inline SVGs?</Heading>
          <List>
            <ListItem>
              <strong>Maintainability</strong>
              <div className="listitem-description">1 SVG => multiple colors / sizes / all dpi resolutions</div>
            </ListItem>
            <ListItem>
              <strong>Performance</strong>
              <div className="listitem-description">No extra HTTPS request(s)</div>
              <div className="listitem-description">Smaller file size</div>
            </ListItem>
            <ListItem>
              <strong>Animation</strong>
              <div className="listitem-description">Easy to animate</div>
            </ListItem>
            <ListItem>
              <strong>Accessiblity</strong>
              <div className="listitem-description">Machine readable</div>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={3} textFont="primary" textColor="secondary" textAlign="left">Why inline SVGs?</Heading>
          <List>
            <ListItem>
              <strong>Scaling</strong>
              <div className="listitem-description">Not pixelated when zooming</div>
            </ListItem>
            <ListItem>
              <svg className="pinterest-logo-svg" height="250" width="250" viewBox="0 0 16 16" aria-label="Startpagina" role="img" data-reactid="2">
                <path d="M5.644 15.648C6.39 15.877 7.18 16 8 16a8 8 0 1 0-2.847-.521c-.073-.625-.151-1.655.017-2.378.145-.621.934-3.958.934-3.958s-.238-.477-.238-1.183c0-1.107.642-1.934 1.44-1.934.68 0 1.008.51 1.008 1.122 0 .683-.435 1.705-.66 2.652-.187.792.398 1.439 1.18 1.439 1.416 0 2.504-1.493 2.504-3.647 0-1.907-1.37-3.24-3.327-3.24-2.266 0-3.596 1.7-3.596 3.456 0 .684.264 1.418.593 1.817a.238.238 0 0 1 .055.229c-.06.252-.195.792-.221.903-.035.146-.116.177-.267.107C3.581 10.4 2.96 8.946 2.96 7.778c0-2.512 1.825-4.82 5.262-4.82 2.763 0 4.91 1.97 4.91 4.6 0 2.745-1.73 4.954-4.133 4.954-.807 0-1.566-.42-1.825-.914 0 0-.4 1.52-.496 1.893-.188.722-.71 1.637-1.033 2.157z" data-reactid="4" />
              </svg>
              <img className="pinterest-logo-png" src={images.pinterestLogoPng} />
            </ListItem>
          </List>
        </Slide>
        <Slide transition={[]} bgColor="secondary" textColor="secondary">
          <BlockQuote size={2}>
            <Quote>Q: Yes, but why inline?<br />
                <div style={{ fontSize: 35, marginLeft: 50, marginTop: 30, marginBottom: 30 }}>Why not: img / background-image / base64 / iframe / embed</div></Quote>
          </BlockQuote>
          <BlockQuote size={2}>
            <Quote>A: Easier to style / animate & manipulate with CSS & JS</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="secondary">
          <BlockQuote size={2}>
            <Quote>Q: Sure but what about big SVGs?</Quote>
          </BlockQuote>
          <BlockQuote>
            <Quote>A: If it's not an icon use the &lt;img&gt; tag.</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="secondary">
          <BlockQuote size={2}>
            <Quote>Q: Where can we find the available icons?</Quote>
          </BlockQuote>
          <BlockQuote>
            <Quote>A: <a style={{ color: "#333" }} href="https://pinterest.github.io/gestalt/#/Icon">Pinterest Gestalt / Icon</a></Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="secondary">
          <BlockQuote size={2}>
            <Quote>Q: 😱! My icon isn't a part of that list, what do I do?</Quote>
          </BlockQuote>
          <BlockQuote>
            <Quote>A: <br />
              - If BRIO icon => <a style={{ color: "#333" }} href="https://github.com/pinterest/gestalt/issues">file a request</a><br />
              - If not, create your own SVG icon inline
            </Quote>
          </BlockQuote>
        </Slide>
        <CodeSlide transition={[]} className="codeSlide" lang="svg" code={codeSVGExample} ranges={[
          { loc: [ 0, 12], title: "SVG internals" },
          { loc: [ 0, 1], note: "Main SVG tag" },
          { loc: [ 1, 3], note: "Specify an exact width / height (IE Bug)" },
          { loc: [3, 4], note: (<div>
              <strong><a href="https://sarasoueidan.com/demos/interactive-svg-coordinate-system/index.html">Viewbox</a></strong>
              <div>min-x/min-y: top left position</div>
              <div>width/height: viewbox width & height</div>
          </div>) },
          { loc: [4, 5], note: "XML Namespace (user agent)" },
          { loc: [5, 6], note: "SVG Path" },
          { loc: [6, 7], note: "Color of the SVG path" },
          { loc: [7, 8], note: (<div>
              <strong>Series of path descriptions</strong>
              <div>M x y: Move To</div>
              <div>L x y: Line To</div>
              <div>H x / V y: Horizontal / Vertical Line To</div>
              <div>C x1 y1, x2 y2, x y: Cubic curves</div>
          </div>) }
        ]}
        />
        {/* Intro animation - http://codepen.io/cesar2535/pen/ByYXpN
        Water antimation - http://codepen.io/lbebber/pen/MwZRdw / http://codepen.io/christianv/pen/BpXaWp */}
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={3} textFont="primary" textColor="secondary" textAlign="left">Useful resources</Heading>
          <List>
            <ListItem>
              <a href="https://css-tricks.com/mega-list-svg-information/">CSS Tricks - SVG mega list</a>
            </ListItem>
            <ListItem>
              <a href="https://svgontheweb.com/">SVG on the web</a>
            </ListItem>
            <ListItem>
              <a href="https://sarasoueidan.com/demos/interactive-svg-coordinate-system/index.html">Interactive SVG viewbox demo</a>
            </ListItem>
            <ListItem>
              <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths">SVG Paths in depth</a>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading>
            <svg viewBox="0 0 600 100">
              <symbol id="s-text1">
                <text textAnchor="middle" x="50%" y="50%" dy=".35em">Questions ?</text>
              </symbol>
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
              <use className="text" xlinkHref="#s-text1" />
            </svg>
          </Heading>
          <Text textColor="secondary" margin="40 0 0 0">
            <span className="faded">by</span> Christian Vuerings</Text>
        </Slide>
      </Deck>
    );
  }
}
