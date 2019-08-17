import React from 'react';
import { NavLink } from 'react-router-dom';

const About = props => (
  <div>
  <div class="a"><h1>Sudan UK</h1></div>
  <img src={require('../Images/us.jpg')} width="100%"/>
              <p align="left">
                SudanUK is an organisation with many ideas, but one of our common goals is to stand with Sudan and support its people.
                <br/>
                <br/>
                <i>How are we different to any other Sudanese organisation, you may ask?</i>
                <br/>
                Simple -  we are unique in the sense that our company is one that is youth run, with a strong assisting hand from experienced adults. Our efforts and suggestions are combined together to produce multiple fruitful results. This organisation encompasses fragments that deal with many aspects of Sudanese issues which are usually ignored. The vision is to tackle these issues to ensure that the revolution does not just stop at dismantling the regime and entering a civilian led country, but also revolutionising the minds of all the citizens and the diaspora to build a new Sudan that has a space for all.
              <br/>
              <br/>
                Some of these issues will be redefining public perception on what counts as ‘credible’ studies or a valuable line of work. Remembering the importance of creativity in our history and how it is needed in a new society. We also want to address the issues of Language by setting up a scheme whereby we can help better the teaching of English language. Especially in rural areas of Sudan, but also focusing on learning and preserving indigenous languages of Sudan that are facing extinction.
                <br/>
                <br/>
                Another immediate problem we want to address is the influx of Migrants who need support in many different avenues but also need reintegration into the Sudanese Diaspora Community in the UK.
                <br/>
                <br/>
                These are just a few of the many issues that we will address, but this is not a task we are undertaking alone. We have many different incredibly youth groups doing incredible work and the main idea of the Youth Council is to unite these groups to ensure they are all working under the same umbrella without neglecting their valuable voices.
                </p>
                <br/>
                <p> Check out some of the <NavLink to='/projects' exact>projects</NavLink> we're working on!</p>
                <br/>

</div>
);

export default About;
