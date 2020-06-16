// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random opinion to the page.
 */
function addRandomOpinion() {
    const opinions =
        [ "Mars is home to the tallest mountain in the solar system",
            "The heart of a shrimp is located in its head.",
            "The oldest 'your mom' joke was discovered on a 3,500 year old Babylonian tablet.",
            "The United States Navy has started using Xbox controllers for their periscopes.",
            "Recycling one glass jar saves enough energy to watch television for 3 hours.",
            "Approximately 10-20% of U.S. power outages are caused by squirrels."];

    // Pick a random fact.
    const opinion = opinions[Math.floor(Math.random() * opinions.length)];

    // Add it to the page.
    const opinionContainer = document.getElementById('opinion-container');
    opinionContainer.innerText = opinion;
}

function getdata() {
  fetch('/data').then(response => response.json()).then((messages) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    console.log();

    const statsListElement = document.getElementById('hardcode-message-container');
    statsListElement.innerHTML = '';
    statsListElement.appendChild(
        createListElement('Message 1: ' + messages[0]));
    statsListElement.appendChild(
        createListElement('Message 2 : ' + messages[1]));
    statsListElement.appendChild(
        createListElement('Message 3: ' + messages[2]));
    console.log();
    console.log(messages);
    
  });
}


/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

async function getDataUsingAsyncAwait() {
  const response = await fetch('/data');
  const data = await response.text();
  document.getElementById('data-container').innerText = data;
}
