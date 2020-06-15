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
        ["I have never felt so young but old at the same time. When does this feeling go away?",
            "你好，世界！is Hello World in Chinese ",
            "This... stuff? Oh. Okay. I see. You think this has nothing to do with you. You go to your closet and you select... I don't know... that lumpy blue sweater, for instance, because you're trying to tell the world that you take yourself too seriously to care about what you put on your back. But what you don't know is that that sweater is not just blue. It's not turquoise. It's not lapis. It's actually cerulean. And you're also blithely unaware of the fact that in 2002, Oscar de la Renta did a collection of cerulean gowns. And then I think it was Yves Saint Laurent... wasn't it?…who showed cerulean military jackets? I think we need a jacket here. And then cerulean quickly showed up in the collections of eight different designers. And then it, uh, filtered down through the department stores and then trickled on down into some tragic Casual Corner where you, no doubt, fished it out of some clearance bin. However, that blue represents millions of dollars and countless jobs and it's sort of comical how you think that you've made a choice that exempts you from the fashion industry when, in fact, you're wearing the sweater that was selected for you by the people in this room from a pile of stuff.",
            "Mars is home to the tallest mountain in the solar system",
            "The heart of a shrimp is located in its head.",
            "I play the alto-sax",
            "The oldest 'your mom' joke was discovered on a 3,500 year old Babylonian tablet.",
            "The United States Navy has started using Xbox controllers for their periscopes.",
            "I'm a swimmer.",
            "The following can be read forward and backwards: Do geese see God?",
            "Recycling one glass jar saves enough energy to watch television for 3 hours.",
            "Approximately 10-20% of U.S. power outages are caused by squirrels."];

    // Pick a random fact.
    const opinion = opinions[Math.floor(Math.random() * opinions.length)];

    // Add it to the page.
    const opinionContainer = document.getElementById('opinion-container');
    opinionContainer.innerText = opinion;
}

async function getDataUsingAsyncAwait() {
  const response = await fetch('/data');
  const data = await response.text();
  document.getElementById('data-container').innerText = data;
}
