import React from 'react';
import QuestionAnswer from '../components/question-answer';

export default function Faq() {

  const questions = [
    "Where do you get your couches?",
    "Do you re-upholster couches?",
    "How does free delivery work?",
    "Do you hold couches?",
    "Can you buy/take/move my old couch?",
    'You say you "cleaned" and "sanitized" the couch. What does that mean?',
    "Can I see the couch before I buy it?",
    "Do you have a store/showroom?",
    "What payment methods do you accept?",
    "I live outside of Orange County. Will you still deliver a couch to me?",
    "Is there a charge for customers who live outside of Orange County?"
  ]

  const answers = [
    "We source our inventory from our local community. We mostly get them from the same third party sites that we list our couches on, such as: Facebook Marketplace, Craigslist, Offerup and Nextdoor. We also get them from trade ins from customers, facebook groups, furniture stores and more.",
    "We don't do full re-upholstery work for our couches, but we do light repair work on scuffs, cat scratch damage, burn holes, etc.",
    "For ALL Orange County Residents, we offer free delivery for your purchased couch. We have everything we need to move your couch into your home safely.",
    "We can hold couches for you, however, typically we do first come first serve. This is because without a security deposit there is no collateral on the buyers side to uphold their end of the deal. It is an unwritten rule in third party websites that it is first come first serve but we can talk about a security deposit if you want the item at a particular date.",
    "We can! With every delivery we can move your old couch out of the way, FREE of charge. If you want us to move the couch to the garage, another room, out of the way, or want us to take it off your hands, we can do that also. Only thing we would ask is if your couch is in dumpster shape. Please give $20 for the dump fee and we can take it to the dump for you.",
    "We have a five step cleaning process. It goes as follows: <br /> 1. Spray (Cleaning Formula) <br /> 2. Scrub (Drill Brush) <br /> 3. Spot Treat (Tough Stains) <br /> 4. Spray (Water) <br /> 5. Suction (Shop Vac) <br /> We do this for all of our couches, regardless of condition they look so we clean and sanitize all of our couches.",
    "Absolutely! We encourage try before buy because we certainly don't want to sell you a couch you will be unhappy with. Reach out to schedule a showing for the couch you want or to see multiple couches we can arrange that as well!",
    "No store or showroom at the moment, but it is on the radar for the future.",
    "We currently accept cash, venmo, zelle and cash app as payments. We have plans to expand and do other payment apps and credit card payments.",
    "Yes! We definitely can deliver to counties surrounding Orange County. We highly encourage a showing beforehand or at least a video tour so you have a good idea of what you are buying!",
    "Yes. We need to account for our time/gas/wear and tear on the truck. Depending on distance and time of travel the rate will vary. Let us know where you are at and we can arrange a delivery price."
  ]

  return (
    <div data-view="faq">
      <h1 className="text-center fw-bold m-3">FAQ</h1>
      {questions.map((question, index) => <QuestionAnswer key={index} question={question} answer={answers[index]}/>)}
    </div>
  )
}
