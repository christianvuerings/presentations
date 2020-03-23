const https = require("https");

const request = async url => {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      {
        headers: {
          "user-agent": "Node.js"
        }
      },
      res => {
        // if (res.statusCode < 200 || res.statusCode >= 300) {
        //   return reject(new Error(`Status Codes: ${Object.keys(res)}`));
        // }

        const data = [];

        res.on("data", chunk => {
          data.push(chunk);
        });

        res.on("end", () => resolve(Buffer.concat(data).toString()));
      }
    );

    req.on("error", reject);

    req.end();
  });
};

let presentations;
let lastCacheDate;
const loadPresentations = async () => {
  const ONE_HOUR = 60 * 60 * 1000;

  console.log(loadPresentations);
  if (!presentations || new Date() - lastCacheDate > ONE_HOUR) {
    const presentationReadmes = await Promise.all(
      JSON.parse(
        await request(
          "https://api.github.com/repos/christianvuerings/presentations/contents"
        )
      )
        .filter(item => item.type === "dir")
        .map(async item => ({
          id: item.path,
          readme: await request(
            `https://raw.githubusercontent.com/christianvuerings/presentations/gh-pages/${item.path}/README.md`
          )
        }))
    );

    console.log("presentationReadmes", presentationReadmes);

    presentations = presentationReadmes
      .map(item => {
        const parse = item.readme.split("\n");

        if (!parse[0].startsWith("#")) {
          return false;
        }

        return {
          id: item.id,
          image: `https://raw.githubusercontent.com/christianvuerings/presentations/gh-pages/${item.id}/cover.png`,
          title: parse[0].replace("# ", ""),
          url: (parse[2] || "").replace("URL: ", ""),
          date: (parse[4] || "").replace("Date: ", "")
        };
      })
      .filter(Boolean);

    lastCacheDate = new Date();
    console.log(presentations);
  }

  return JSON.stringify(presentations);
};

const handler = async () => ({
  statusCode: 200,
  body: await loadPresentations(),
  headers: {
    "content-type": "application/json; charset=UTF-8"
  }
});

// To test locally, run nodemon lamdaFunction.js and comment out the line below
// handler();

exports.handler = handler;
