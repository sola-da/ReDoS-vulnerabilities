# Reported ReDoS Vulnerabilities
Bellow is a list of **ReDoS vulnerabilities** reported by the Software Lab group at TU Darmstadt as part of the research paper *Freezing the Web: A Study of ReDoS Vulnerabilities in JavaScript-based Web Servers*:

| Vulnerable module | Bug Report | Response | Advisory|
|-------|:-------------:|------:|------:|
| [debug](https://www.npmjs.com/package/debug) | [Issue 501](https://github.com/visionmedia/debug/issues/501) | FIXED | [534](https://nodesecurity.io/advisories/534/) |
| [lodash](https://www.npmjs.com/package/lodash) | [Issue 3359](https://github.com/lodash/lodash/issues/3359) | "limiting the size is fine" | N/A |
| [mime](https://www.npmjs.com/package/mime) | [Issue 167](https://github.com/broofa/node-mime/issues/167) | FIXED | [535](https://nodesecurity.io/advisories/535) |
| [ajv](https://www.npmjs.com/package/ajv) | [Issue 557](https://github.com/epoberezkin/ajv/issues/557) | "it needs to be better investigated" | N/A |
| [tough-cookie](https://www.npmjs.com/package/tough-cookie) | [Issue 92](https://github.com/salesforce/tough-cookie/issues/92) | FIXED | [525](https://nodesecurity.io/advisories/525) |
| [fresh](https://www.npmjs.com/package/fresh) | [Issue 24](https://github.com/jshttp/fresh/issues/24) | FIXED | [526](https://nodesecurity.io/advisories/526) |
| [moment](https://www.npmjs.com/package/moment) | [Issue 4163](https://github.com/moment/moment/issues/4163) | FIXED | [532](https://nodesecurity.io/advisories/532) |
| [forwarded](https://www.npmjs.com/package/forwarded) | [Issue 3](https://github.com/jshttp/forwarded/issues/3) | FIXED | [527](https://nodesecurity.io/advisories/527) |
| [underscore.string](https://www.npmjs.com/package/underscore.string) | [Issue 510](https://github.com/epeli/underscore.string/issues/510) | N/A | N/A |
| [parsejson](https://www.npmjs.com/package/parsejson) | [Issue 4](https://github.com/get/parsejson/issues/4) | FIXED | [528](https://nodesecurity.io/advisories/528) |
| [no-case](https://www.npmjs.com/package/no-case) | [Issue 17](https://github.com/blakeembrey/no-case/issues/17) | FIXED | [529](https://nodesecurity.io/advisories/529) |
| [marked](https://www.npmjs.com/package/marked) | [Issue 937](https://github.com/chjj/marked/issues/937) | FIXED | [531](https://nodesecurity.io/advisories/531) |
| [content-type-parser](https://www.npmjs.com/package/content-type-parser) | [Issue 3](https://github.com/jsdom/content-type-parser/issues/3) | "a pull request is welcome" and "there are much worse attacks than a six second slowdown" | N/A |
| [platform](https://www.npmjs.com/package/platform) | [Issue 139](https://github.com/bestiejs/platform.js/issues/139) | "I'll accept a PR for this" and "using any utils withinputs of arbitrary length runs a performance risk" | N/A |
| [timespan](https://www.npmjs.com/package/timespan) | [Issue 10](https://github.com/indexzero/TimeSpan.js/issues/10) | N/A | [533](https://nodesecurity.io/advisories/533) |
| [string](https://www.npmjs.com/package/string) | [Issue 212](https://github.com/jprichardson/string.js/issues/212) | N/A | [536](https://nodesecurity.io/advisories/536) |
| [content](https://www.npmjs.com/package/content) | [Issue 14](https://github.com/hapijs/content/issues/14) | N/A | [537](https://nodesecurity.io/advisories/537) |
| [slug](https://www.npmjs.com/package/slug) | [Issue 82](https://github.com/dodo/node-slug/issues/82) | FIXED | [530](https://nodesecurity.io/advisories/530) |
| [htmlparser](https://www.npmjs.com/package/htmlparser) | [Issue 79](https://github.com/tautologistics/node-htmlparser/issues/79) | N/A | N/A |
| [charset](https://www.npmjs.com/package/charset) | [Issue 10](https://github.com/node-modules/charset/issues/10) | FIXED | [524](https://nodesecurity.io/advisories/524) |
| [mobile-detect](https://www.npmjs.com/package/mobile-detect) | [Issue 67](https://github.com/hgoebl/mobile-detect.js/issues/67) | "I limited the length of User-Agent to max 500 characters" | N/A |
| [ismobilejs](https://www.npmjs.com/package/ismobilejs) | [Issue 66](https://github.com/kaimallea/isMobile/issues/66) | N/A | N/A |
| [dns-sync](https://www.npmjs.com/package/dns-sync) | [Issue 5](https://github.com/skoranga/node-dns-sync/issues/5) | N/A | N/A |

# Running the Exploits Set
The current folder contains a set of exploits for the identified vulnerabilities. To run the exploits on your local machine perform the following steps: 

1. checkout the current repository
2. install the vulnerable package by running ```npm install``` in the checked out folder
3. run the benchmarks by executing the following command ```node ./run-all.js ```

The exploits are harmless to run locally since they do not perform any malicious actions other than exploiting the slowdown in the regular expression matching. For each benchmark, we print an execution time that shows how long a specific exploit takes.
