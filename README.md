# WEB103 Project 3 - *Unearthed*

Submitted by: **Tripurashree Manjunatha**

About this web app: **Unearthed is a web application that suggests top organizations working towards sustainability and climate change, allowing users to explore and learn about various initiatives in their locality.**

Time spent: **7** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
- [x] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [x] **The web app displays the title of the app**
- [x] **A visual interface allows the user to select a Location they would like to view**
- [x] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [x] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [ ] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [x] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/tripurashree/web103_unit3_project/blob/main/gif.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  ezgif tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

**Challenges Encountered:**
API Integration: One of the significant challenges was integrating the React frontend with the PostgreSQL database through the Express API. Ensuring that data was fetched and displayed correctly required careful handling of asynchronous calls and state management in React.

Routing and Unique URLs: Implementing unique URLs for each location detail page required setting up React Router effectively. This was tricky as I needed to ensure that each route dynamically fetched the correct event data based on the selected location.

## License

Copyright [2024] [Tripurashree Manjunatha]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
